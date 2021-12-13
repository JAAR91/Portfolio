import React from 'react';
import profilePic from '../img/profilepic.png';

const Home = () => (
  <div className="container p-3">
    <div className="row m-0">
      <div className="col-12 col-md-5 order-md-2 p-4">
        <img className="shadow rounded-circle w-100" src={ profilePic } alt="" />
      </div>
      <div className="col-12 col-md-7 order-md-1 pt-7">
        <div>
          <p className="text-white fs-5 my-0">Hello there, my name is Jose Alberto Arriaga Ramos</p>
          <p className="text-white fs-1 my-0">I am a Full Stack Software Developer</p>
        </div>
        <div className="text-center">
          <span className="badge bg-info">HTML5</span>
          <span className="badge bg-info">CSS</span>
          <span className="badge bg-info">BOOTSTRAP</span>
          <span className="badge bg-info">RUBY</span>
          <span className="badge bg-info">RAILS</span>
          <span className="badge bg-info">JAVASCRIPT</span>
          <span className="badge bg-info">REACT</span>
          <span className="badge bg-info">REDUX</span>
        </div>
        <div className="text-white text-center mt-5">
          <p className="fs-3">I love to code and I'm always ready to solve new challenges and learn new ways to solve the problems I found.</p>
        </div>
        <div className="d-flex justify-content-center">
          <a className="btn btn-outline-light" href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit" rel="noreferrer" target="_blank" >Get my resume</a>
        </div>
      </div>
      <div className=" col-12 order-3 text-white text-center mt-3 shadowbackground">
        <p className="fs-2">"Programming isn't about what you know. It's about what you can figure out." -Chris Pine-</p>
      </div>
    </div>
  </div>
);

export default Home;