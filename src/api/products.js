import axios from "axios"
import { useEffect, useState } from "react";
import getToken from "./token";

const url = process.env.REACT_APP_BASE_URL
const token = getToken()

export default function useFetchProducts() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const products = []

  async function getProducts() {
    try {
      await axios({
        url: "products/",
        method: "GET",
        baseURL: url,
        headers: {
          "Content-Type": "application/json",
          'Accept': "*/*",
          'Authorization': `Bearer ${getToken()}`
        }
      }).then((response) => {
        products.push(...response.data)
      }).finally(() => {
        setData(products)
        setIsFetching(false)
      })
    } catch (error) {
      console.log(error)
      throw { message: "Login e/ou senha inválidos" };
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { data, isFetching }
}