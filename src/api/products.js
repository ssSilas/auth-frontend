import axios from "axios"

const url = process.env.REACT_APP_BASE_URL

export const getProducts = async  () => {
  try {
    const req = await axios({
      url: "/products/",
      method: "GET",
      baseURL: url,
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      }
    }).then((token) => {
      return token;
    });
    return req.data;
  } catch (error) {
    console.log(error)
    throw { message: "Login e/ou senha inválidos" };
  }
}