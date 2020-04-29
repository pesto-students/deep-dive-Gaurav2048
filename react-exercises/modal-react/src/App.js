import React, { useState } from 'react';
import Modal from './components/modal';

const App = () => {

  const [showModal, set] = useState(false)

  const handleClick = () => {
    set(!showModal)
  }

  const onModalClosed = () => {
    //ToDo: set focus which triggred modal to open
    set(false)
  }

  return (
    <div >
      <button onClick={handleClick}  > show modal </button>
      {
        showModal ?
          <Modal
            title={"Title"}
            onModalClosed={onModalClosed}
            corner={8}
            backgroundColor={"#f00"}
            titleColor={"#fff"}
            titleSize={28}
          >

            <h1>Text On</h1>
            <input placeholder="input counted" id="one" />
            <input placeholder="input counted" />
            <h4>oka</h4>
            <input placeholder="input counted" />
            <input placeholder="input counted" />
            <input placeholder="input counted" />
            <button>tess</button>
          </Modal> :
          null
      }
    </div>
  )
}

export default App;
