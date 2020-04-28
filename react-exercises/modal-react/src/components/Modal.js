import React, { useEffect , useState , useRef } from 'react';
import './style.css'

export default function Modal(props){

  const [childCountOnFocus , set ] = useState(-1) 

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    // auto focus the first input. 
    for(const el of props.children){
      if(el.type === "input"){
        const id = el.props.id
        document.getElementById(id).focus()
        break
      }
    }

  }, [])

  const shiftFocus = () =>{
    if(childCountOnFocus !== props.children.length ){
          
    }
  }

  const styles = {
    modal: {
      borderRadius : props.corner ? `${props.corner}px` : "0px" , 
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff"
    }, 
    title: {
        color: props.titleColor ? props.titleColor : "#000" , 
        fontSize:  props.titleSize ? props.titleSize :"16px"
    }
  }

  const handleEsc = (event) => {
    console.log(event.keyCode);
    
    if (event.keyCode === 27) {   
      console.log(props.children);
      props.onModalClosed()
    }else if (event.keyCode === 9){
      // logic for key code

    }
 };

    return (
        <div className="modal-area" > 
        <div className="modal" style = {styles.modal} > 
          <div className = "modal-header" >
             <div className="modal-title" style={styles.title} > {props.title !== null ? props.title : "Purpose"} </div>
             <div className="modal-drop" onClick={()=>props.onModalClosed()}  >X</div>
          </div>
              
            <div className="modal-body" > 
              {props.children}
            </div>          
          </div>
        </div>
      );
}
