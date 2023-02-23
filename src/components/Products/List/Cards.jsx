import React from 'react';
import './styles/Card.css'
import { NumericFormat } from 'react-number-format';

const Cards = ({ product }) => {
  return (

    <div className='card'>
      <img className='product-image' src={product.imagelink} alt={product.name} />
      <span className='product-name' >{product.name}</span>

      <NumericFormat
        className='product-price'
        value={product.price}
        prefix='R$ '
        fixedDecimalScale
        decimalScale={2}
        allowNegative={false}
        decimalSeparator={","}
        
      />
    </div>

  );
}

export default Cards;