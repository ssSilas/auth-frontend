import React from 'react';
import './TitleLogin.css'
 const TitleLogin = ({color, text}) => {
  return ( 
    <>
      <div className='container-title-login'>
        <p className='p-title-login'>{text}</p>
      </div>
    </>
  );
 }
  
 export default TitleLogin;