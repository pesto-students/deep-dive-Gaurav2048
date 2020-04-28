import React, { useState } from 'react';
import Dummy from './components/Modal';

const App = () => {

  const [showModal, set] = useState(false)

  const handleClick = () => {
    set(!showModal)
  }

  const onModalClosed = () =>{
    set(false)
  }

  return (
    <div >
      <button onClick={handleClick} > show modal </button>
      {
        showModal ?
          <Dummy  
            onModalClosed  = {onModalClosed}
          >
            <h1>Test one</h1>
          </Dummy> :
          null
      }
    </div>
  )
}

export default App;



// import React, { useState, useCallback  } from "react";
// import { useTransition , animated } from "react-spring";

// export default function App(){
//   const [show, set] = useState(false)
// const transitions = useTransition(show, null, {
// from: { position: 'absolute', opacity: 0 },
// enter: { opacity: 1 },
// leave: { opacity: 0 },
// })
// return transitions.map(({ item, key, props }) =>
// item && <animated.div key={key} style={props}>✌️</animated.div>
// )
// }



// import './styles.css'; 

// const pages = [
//   ({style})=> <animated.div style={{...style, backgroundColor:'lightpink'}} >A</animated.div>,
//   ({style})=> <animated.div style={{...style, backgroundColor:'lightblue'}} >B</animated.div>, 
//   ({style})=> <animated.div style={{...style, backgroundColor:'lightgreen'}} >C</animated.div>
// ]

// export default function App(){

//   const [index, set] = useState(0); 
//   const click = useCallback(()=>set(state => (state+1)%3), [])
//   const transitions = useTransition(index, p => p, {
//     from: {opacity:0, transform: 'translate3d(100%,0,0)'}, 
//     enter: {opacity:1, transform: 'translate3d(0%,0,0)'}, 
//     leave: {opacity:0, transform: 'translate3d(-50%,0,0)'}
//   })

//   return(
//     <div className="simple-trans-main" onClick= {click} >

//       {
//         transitions.map(({item,props, key})=>{
//           const Page = pages[item]; 
//           return <Page key={key} style={props} />
//         })
//       }

//     </div>
//   )

// }
