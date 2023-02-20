import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../api/products';
import Dot from '../../../assets/jsx/Dot';
import Title from '../../../assets/jsx/Title';
import "./styles/List.css";

function ListProducts() {
  const [products, setProducts] = useState()

  // useEffect(async () => {
  //   await getProducts()
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="screen-list-products">
      <form className="form-list-user" onSubmit={handleSubmit}>
        <Dot justify="right" />
        <div className="title">
          <Title text="Products" />
        </div>
        <Dot justify="left" />
      </form>
    </div>
  );
}

export default ListProducts;