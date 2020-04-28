import React, { useEffect } from 'react';
import './style.css'

export default function Modal(props){

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
  }, [])

  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      props.onModalClosed()
    }
 };

    return (
        <div className="modal-area" > 
        <div className="modal" > 
          <div className = "modal-header" >
             <div className="modal-title" > Purpose </div>
             <div className="modal-drop"  >X</div>
          </div>
              
            <div className="modal-body" > 
              {props.children}
            </div>          
          </div>
        </div>
      );
}
