import './App.css';
import background from './assets/images/background.png';
import CanDo from './functions/CanDo.js';
import Contact from './functions/Contact.js';
import Footer from './functions/Footer.js'
import React, { useRef } from 'react';

function Container() {
  const scrollDiv = useRef(null)
  return (
    <div className="container">
      <img class="background" src={background}/>
      <a id="honk" onClick={e => alert("Honoka Best Girl.")}>Honoka Kousaka</a>
      <div className="header">
        <h1>Repyh Dev</h1>
        <button className="learnmore" onClick={e => scrollDiv.current.scrollIntoView()}>Learn More ►</button>
      </div>
      <div className="about" ref={scrollDiv}>
        <div id="about-title">
            <h1 id="ab-h1">About Me</h1>
            <div id="shape"></div>
        </div>
        <p><code>Hey! I'm Repyh and Im an experienced Intermediate Full-Stack Web Developer. I'm located in Indonesia and currently studying in High-School.<br/><br/>I started off programming with C++ in middle school, taught directly by my IT teacher. I continue to develop my skills by learning Javascript right before the pandemic. I learned alot throughout the years from making a simple discord bot into making a full stack app demo.<br/><br/>I'm sure I still have alot to learn and master over time and will continue to improve further and sharpen my skill.</code></p>
      </div>
      <CanDo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Container;
