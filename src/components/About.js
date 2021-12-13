import React from 'react';
import developerImg from '../img/codedeveloper.jpg';
import teamImg from '../img/developerteam.jpg';

const About = () => (
  <div className="about-container">
    <div className="d-flex flex-column m-0 p-4 bg-transparentblack w-100">
      <h1 className="fs-1 text-white text-center">About</h1>
      <p className="fs-4 text-white">
        <img className="AboutImg float-end m-2 p-2" src={developerImg} alt="" />
        Hello, my name is Jose. I am a full-stack web developer that uses Javascript, React, Redux, and Ruby on Rails. After taking the mission of learning Unreal Script all by myself.
        I couldn't stop thinking that I love to code. So I decided to become a website developer. I love to build ideas into web applications. Then I decided to take things to the next level.
        I completed the coursework at Microverse. A remote software development school. That teaches pair programming with developers from all around the world building real-world projects. 
      </p>
      <p className="fs-4 text-white">
        <img className="AboutImg float-start m-2 p-2" src={teamImg} alt="" />
        There I've spent the last twelve months immersed in remote development. Building entire websites with excellent UI. Like a Twitter clone using ruby on rails. A weather website that 
        shows the current weather information on any location you search. And a fully working react and redux app. That helps you keep track of Space X missions and rockets using its API.
        During the time I spent in Microverse. I gained soft skills like working on teams, pair-programming, remote development. In Addition to that, I already know about effective communication, 
        problem-solving, and multi-tasking.
        I'm currently looking for a job that provides the challenges I need to grow up in my developer career.
      </p>
    </div>
  </div>
);

export default About;