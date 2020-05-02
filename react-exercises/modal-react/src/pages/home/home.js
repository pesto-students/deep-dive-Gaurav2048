import React, { useState } from 'react';
import Login from './login/login';
import Registration from './signup/signup';
import './home.css';

const Homepage = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const onModalClosed = () => {
    setShowLoginModal(false)
    setShowSignupModal(false)
  }

  const handleLoginClick = (event) => {
    setShowLoginModal(true)
    setShowLoginModal(!showLoginModal)
  }
  const handleRegisterClick = (event) => {
    setShowSignupModal(true)
    setShowSignupModal(!showSignupModal)
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <button
        className="btn"
        type="button"
        onClick={handleLoginClick}
      >
        Sign in
          </button>
      <button
        className="btn"
        type="button"
        onClick={handleRegisterClick}
      >
        Sign up
          </button>

      {showLoginModal && <Login onModalClosed={onModalClosed} />}
      {showSignupModal && <Registration onModalClosed={onModalClosed} />}
    </div>
  );
};

export default Homepage;
