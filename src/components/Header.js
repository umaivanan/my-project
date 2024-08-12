import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
const Header = () => {
  const[signIn,setCount]=useState('./Footer')
       
  function ClickHere(){
    setCount("signIn")
        
  }
  return (
    <header className="header">
      <h1>SkillShare</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <button onclick={ClickHere}>signIn</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;