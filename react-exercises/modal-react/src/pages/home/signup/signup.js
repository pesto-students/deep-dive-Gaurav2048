import React from 'react';
import Modal from "../../../components/modal/modal";
import './signup.css';
import { navigate } from "@reach/router";

const Registration = (props) => {
  return <Modal
    title={"REGISTRATION"}
    onModalClosed={props.onModalClosed}
    borderRadius={8}
    backgroundColor={"#fff"}
    titleColor={"#000"}
    titleSize={28}
  >

    <label className="input-label" >User name</label>
    <input id="userName" className="custom-input" placeholder="user name" />
    <label className="input-label" >Email</label>
    <input id="email" className="custom-input" placeholder="Email address" />
    <label className="input-label" >Password</label>
    <input className="custom-input" placeholder="password" />
    <label className="input-label" >Confirm Password</label>
    <input className="custom-input" placeholder="confirm password" />
    <button className="custom-button" onClick={() => {
      navigate('/dashboard')
    }}>REGISTRATION</button>

  </Modal>

}

export default Registration; 