import React from "react";
import Modal from "../Modal";
import './style.css';

const Registration = (props) => {



    return <Modal
        title={"REGISTRATION"}
        onModalClosed={props.onModalClosed}
        corner={8}
        backgroundColor={"#fff"}
        titleColor={"#000"}
        titleSize={28}
    >

        <label className="input-label" >User name</label>
        <input id="userName" className="custom-input" placeholder="user name" />
        <label className="input-label" >User name</label>
        <input id="email" className="custom-input" placeholder="Email address" />
        <label className="input-label" >Password</label>
        <input className="custom-input" placeholder="password" />
        <label className="input-label" >Confirm Password</label>
        <input className="custom-input" placeholder="confirm password" />
        <button className="custom-button" >REGISTRATION</button>
        <span className="forget-password" >Have an account ? <span className="forget-pass-click-area" >Sign In</span> </span>
    </Modal>

}

export default Registration; 