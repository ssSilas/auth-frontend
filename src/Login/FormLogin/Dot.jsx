import React from 'react'
import './Dot.css'
const Dot = ({justify}) => {
  return ( 
    <>
      <div style={{ justifyContent: justify }} className='conteiner-dot'>
        <span class="dot"></span>
      </div>
    </>
  );
}
 
export default Dot;