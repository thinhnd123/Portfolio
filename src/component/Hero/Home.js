import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Ngo Dac Thinh</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" FullStack Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I spent most of my day experimenting with HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I want to become a full-fledged
              developer on the way to workand accompany the company which can help me develop myself as well as contribute a lot to the development of the company.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.facebook.com/ngo.dacthinh.5/" target="_blank" rel="noreferrer" className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href="https://github.com/thinhnd123" target="_blank" rel="noreferrer" className='btn_shadow'>
                    <img src="https://img.icons8.com/nolan/64/git.png" alt="github"/>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>Download CV</h4>
                <a href="/" rel="noreferrer" target="_blank" className='btn_shadow'>
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-cv-recruitment-agency-flaticons-lineal-color-flat-icons-3.png" alt='' />
                </a>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
