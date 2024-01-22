import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Slide from "./Slide";
import 'bootstrap/dist/css/bootstrap.min.css';
import sql from '../img/MySQL-icon.png';
import react from '../img/React-icon.png';
import js from '../img/JS-icon.png';
import php from '../img/PHP-icon.png';


const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects-content">
      <div className="project-title-div">
        <h1 id="projects-title">Projects</h1>
      </div>
      <div className="projects-main">
        <Parallax id="par" style={{overflow: 'scroll'}} pages={2}>
          <ParallaxLayer sticky={{ start: 0, end: 2 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Slide />
          </ParallaxLayer>
      
          <ParallaxLayer offset={0} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="item">
              <h1>Freepack Askfree</h1>
              <h2 id="desc-project">Making improvements to an existing system. Added new call in sick and archive worker functionailty.</h2>
              <h3>2023</h3>
              <div className="lang">
                <img className="item-lang" src={php} alt=""></img>
                <img className="item-lang" src={js} alt=""></img>
                <img className="item-lang" src={sql} alt=""></img>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.74} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="item">
              <h1>Portfolio</h1>
              <h2 id="desc-project">A website to show what i have made and learnt so far.</h2>
              <h3>2023</h3>
              <div className="lang">
                <img className="item-lang" src={js} alt=""></img>
                <img className="item-lang" src={react} alt=""></img>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="item">
              <h1>Animap</h1>
              <h2 id="desc-project">A website to view animals that live in a country you click on.</h2>
              <h3>2024</h3>
              <div className="lang">
                <img className="item-lang" src={js} alt=""></img>
              </div>
            </div>
          </ParallaxLayer>
  
        </Parallax>
      </div>
    </div>
  );
});

export default Projects;
