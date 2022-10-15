import React from 'react';
import Button from './FormLogin/Button';
import Dot from './FormLogin/Dot';
import ForgotPass from './FormLogin/ForgotPass';
import InputLogin from './FormLogin/Input';
import TitleLogin from './FormLogin/TitleLogin';
import "./Login.css"

const screenLogin = () => {
  return (
    <div className='screen-login'>
      <form className='form-login'>
      <Dot justify='right'/>
        <div className='title-login'>
          <TitleLogin colo='teste' text='Sign In'/>
        </div>
        <div className='interface-login'>
          <InputLogin name={'Email'} type='email'/>
          <InputLogin name={'Password'} type='password'/>
          <ForgotPass/>
          <Button name={'Sign In'}/>
        </div>
      <Dot justify='left'/>
      </form>
    </div>
  );
}
 
export default screenLogin;