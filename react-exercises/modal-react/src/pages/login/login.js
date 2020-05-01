import Modal from "../../components/modal/modal";
import './style.css';

const Login = (props) => {

  return <Modal
    title={"LOGIN"}
    onModalClosed={props.onModalClosed}
    corner={8}
    backgroundColor={"#fff"}
    titleColor={"#000"}
    titleSize={28}
  >

    <label className="input-label" >User name</label>
    <input id="userName" className="custom-input" placeholder="user name" />
    <label className="input-label" >Password</label>
    <input className="custom-input" placeholder="password" />
    <button className="custom-button" >LOGIN</button>
    <span className="forget-password" >Forget Password ? <span className="forget-pass-click-area" >Click here</span> </span>
    <span className="sign-up-here">SIGH UP HERE</span>
  </Modal>

}

export default Login; 