import React, { useEffect } from 'react';
import { allFocusableElements } from './utils'
import './style.css'

export default function Modal(props) {

  // const [childCountOnFocus,set] = useState(-1)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvents);

    function handleKeyEvents(event) {
      if (event.keyCode === 27) { // escape
        handleEscKey(event)
      } else if (event.keyCode === 9) {// for tab
        handleTab(event)
      }
      // handle enter event for close / submit
    }

    function handleEscKey(event) {
      props.onModalClosed()
    }

    function handleTab(event) {
      const focusableChildren = fetchFocusableChildren();
      const focusableChildrenCount = focusableChildren.length;
      if (focusableChildrenCount === 0) return;

      const currentFocus = getFocusedChild();
      let focusedIndex = 0;

      for (let i = 0; i < focusableChildrenCount; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (event.shiftKey && focusedIndex === 0) {
        event.preventDefault();
        focusableChildren[focusableChildrenCount - 1].focus();
      } else if (!event.shiftKey && focusedIndex === focusableChildrenCount - 1) {
        event.preventDefault();
        focusableChildren[0].focus();
      }
    }

    function fetchFocusableChildren() {
      return document.querySelector("#modal").querySelectorAll(allFocusableElements.join(', '));
    }

    function getFocusedChild() {
      let currentFocus;
      const focusableChildren = fetchFocusableChildren();
      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }
      return currentFocus;
    }

    // auto focus the first input. 
    for (const el of props.children) {
      if (el.type === "input") {
        const id = el.props.id
        document.getElementById(id).focus()
        break
      }
    }

  })
  const styles = {
    modal: {
      borderRadius: props.borderRadius ? `${props.borderRadius}px` : "0px",
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff"
    },
    title: {
      color: props.titleColor ? props.titleColor : "#000",
      fontSize: props.titleSize ? props.titleSize : "16px"
    }
  }


  return (
    <div className="modal-area" >
      <div id="modal" className="modal" style={styles.modal} >
        <div className="modal-header" >
          <div className="modal-title" style={styles.title} > {props.title !== null ? props.title : "Modal"} </div>
          <button className="modal-drop" onClick={() => props.onModalClosed()} >X</button>
        </div>

        <div className="modal-body" >
          {props.children}
        </div>
      </div>
    </div>
  );
}
