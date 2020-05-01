// import React, { useState } from 'react';
// import Login from './pages/login/login';
// import Registration from "./pages/registration/registration";
// const App = () => {

//   const [showLogin, set] = useState(false)
//   const [showRegisteration, setReg] = useState(false)


//   const handleLoginClick = (event) => {
//     set(!showLogin)
//   }

//   const onModalClosed = () => {
//     //ToDo: set focus which triggred modal to open
//     set(false)
//     setReg(false)
//   }

//   const handleRegisterClick = (event) => {
//     setReg(!showRegisteration)
//   }

//   return (
//     <div style={{
//       width: '100%',
//       height: '100vh',
//       overflow: 'hidden',
//       backgroundImage: 'url(https://images.pexels.com/photos/910309/pexels-photo-910309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',

//     }}  >
//       <div >
//         <button onClick={handleLoginClick} style={{
//           padding: '15px 15px',
//           backgroundColor: '#00f',
//           width: '150px',
//           color: '#fff',
//           fontSize: '24px',
//           fontWeight: 'bold',
//           marginRight: '10px',
//           borderRadius: '12px',
//           outline: 'none'
//         }}  > LOGIN </button>
//         <button onClick={handleRegisterClick} style={{
//           padding: '15px 15px',
//           backgroundColor: '#fff',
//           width: '150px',
//           color: '#00f',
//           marginLeft: '10px',
//           fontSize: '24px',
//           fontWeight: 'bold',
//           borderRadius: '12px',
//           outline: 'none'
//         }}  > REGISTER </button>
//       </div>
//       {
//         showLogin ?
//           <Login onModalClosed={onModalClosed} />
//           :
//           null
//       }

//       {
//         showRegisteration ?
//           <Registration onModalClosed={onModalClosed} />
//           :
//           null
//       }

//     </div>
//   )
// }

// export default App;



import React, { useState } from 'react';
import Homepage from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import { Router } from "@reach/router";

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div >
      <div className="app">
        <Router>
          <Homepage path="/" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Dashboard
            path="dashboard"
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Router>
      </div>
    </div>
  );
};

export default App;