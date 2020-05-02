import React from 'react';
import {  Link } from "@reach/router";

export default () => {
  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>Dashboard</h1>
      <div style={{textAlign:'center'}}>
      <Link style={{color:'white',fontSize:24}} to="/">Home</Link>{" "}
      </div>
    </div>
  )
}