import React from 'react'
import './header.css'
import Typewriter from 'typewriter-effect'
import Me from "../images/Insert_image_here.svg.png"
import {BsFillSunFill} from 'react-icons/bs'


const Header = () => {
  return (    
    <>
        
        {/*  ======================================== NAME AND NAVIGATION BAR ======================================== */}

        <div class="grid-container">

          <div class="grid-child name">
            <h1 className="my_name">Aaron Sintayehu</h1>
          </div>

          <div class="grid-child nav">
                <nav>
                  <a href="#home" className="nav__item">Home</a>
                  <a href="#about" className="nav__item">About</a>
                  <a href="#services" className="nav__item">Services</a>
                  <a href="#portfolio" className="nav__item">Portfolio</a>
                  <a href="#contact" className="nav__item">Contact</a>
                  <BsFillSunFill className="icon"/>
                </nav>
          </div>

        </div>

        


      {/*  ======================================== START OF TYPEWRITER EFFECT ======================================== */}
        
        <div>
              <h2>
              <Typewriter 
              onInit={(typewriter) =>{
                typewriter.pauseFor(1000).typeString("Full Stack Developer").pauseFor(1000).deleteAll().typeString("UI/UX Designer").pauseFor(1000).deleteAll().typeString("Software Engineer").pauseFor(1000).start();
              }}/>
              </h2>
        </div>

      {/*  ======================================== END OF TYPEWRITER EFFECT ======================================== */}

      <div className='grid-container'>
        <div>
          <img src={Me} alt="" />
        </div>

        <div className="container_self__description">

          <h1 className='self__description'>A developer who pushes boundaries and seeks innovative solutions.
          {/* <Typewriter 
              onInit={(typewriter) =>{
                typewriter.pauseFor(9000).typeString("A designer who pushes boundaries and seeks innovative solutions.").start();
              }}/> */}
          </h1>
        </div>

      </div>

    </>
  )
}

export default Header
