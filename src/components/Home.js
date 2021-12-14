import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../img/profilepic.png';

const Home = () => {
  const skill = [
    "HTML5",
    "CSS3",
    "BOOTSRAP",
    "RUBY",
    "RAILS",
    "JAVASCRIPT",
    "REACT",
    "REDUX"
  ]

  return (
    <div className="home-container">
      <div className="image-container">
        <img className="w-100" src={ profilePic } alt="" />
      </div>
      <div className="home-text-container">
        <div className="black-translucid p-3"> 
          <div>
            <p className="text-white fs-5 m-0">Hello there, my name is Jose Alberto Arriaga Ramos</p>
            <p className="text-white fs-1 m-0 text-center">I am a Full Stack Software Developer</p>
          </div>
          <div className="text-center">
            {
              skill.map((item, index) => {
                const knum = index + 1;
                return (
                  <span key={knum} className="badge bg-info m-1">{item}</span>
                );
              })
            }
          </div>
          <div className="text-white text-center mt-5">
            <p className="fs-4">
              I love to code and I'm currently looking for new challenges that help me grow up as a developer.
              <NavLink className="bg-transparent text-white m-0 p-3" to="/about" >read more...</NavLink>
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <a
              className="btn btn-outline-light"
              href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit"
              rel="noreferrer"
              target="_blank" 
            >
              Get my resume
            </a>
          </div>
          <div className=" col-12 order-3 text-white text-center mt-3">
            <q className="fs-2">Programming isn't about what you know. It's about what you can figure out-</q>
            <p>-Chris Pine</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;