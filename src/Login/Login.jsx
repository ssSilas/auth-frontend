import React from 'react';
import Button from './Form/Button';
import InputLogin from './Form/Input';
import "./Login.css"

const screenLogin = () => {
  return (
    <div className='screen-login'>
      <form className='form-login'>
        <InputLogin name={'Email'}/>
        <InputLogin name={'Password'}/>
        <Button name={'Sign In'}/>
      </form>
    </div>
  );
}
 
export default screenLogin;