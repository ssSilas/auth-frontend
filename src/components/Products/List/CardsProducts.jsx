import React from 'react';
import Cards from './Cards';
import './styles/CardsProducts.css'

const CardsProducts = ({ products }) => {
  return (
    <div className='container-margin-cards-products'>
      <div className='container-cards-products'>
        {
          products.map((product) => {
            return <Cards key={product.id} product={product} />
          })
        }
      </div>
    </div>
  );
}

export default CardsProducts;