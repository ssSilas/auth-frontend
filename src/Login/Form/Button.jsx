import React from 'react';
import './Button.css'

const Button = ({name}) => {
  return ( 
    <>
      <button className='button-submit'>{name}</button>
    </>
  );
}
 
export default Button;