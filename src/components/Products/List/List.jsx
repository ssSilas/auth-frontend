import React from 'react';
import useFetchProducts from '../../../api/products';
import Dot from '../../../assets/jsx/Dot';
import Title from '../../../assets/jsx/Title';
import CardsProducts from './CardsProducts';

import "./styles/List.css";

function ListProducts() {
  const { data, isFetching } = useFetchProducts()
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
        { !isFetching ? <CardsProducts products={data} /> : ''}
        <Dot justify="left" />
      </form>
    </div>
  );
}

export default ListProducts;