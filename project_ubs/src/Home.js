import './styles.css?v=1.0';
import logo from './logo.jpg';
import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <p> *insert search*</p>
        <div className="logo">
          <img src={logo} alt="Logo"></img>
          <h1> MGCIubs</h1>
        </div>
      </div>
      <div className="content">
        <div className="left-col"></div>
        <div className="mid-col">

        </div>
        <div className="right-col"></div>
      </div>
    </div>
  );
}

export default Home;
