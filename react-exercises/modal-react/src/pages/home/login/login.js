import React from 'react';
import Modal from "../../../components/modal/modal";
import './login.css';
import { navigate } from "@reach/router";

const Login = (props) => {
  return <Modal
    onModalClosed={props.onModalClosed}
    title={"LOGIN"}
    borderRadius={8}
    backgroundColor={"#fff"}
    titleColor={"#000"}
    titleSize={28}
  >
    <label className="input-label" >User name</label>
    <input id="userName" className="custom-input" placeholder="user name" />
    <label className="input-label" >Password</label>
    <input className="custom-input" placeholder="password" />
    <button className="custom-button" onClick={() => {
      navigate('/dashboard')
    }} >LOGIN</button>

  </Modal>

}

export default Login; 