import React from 'react';
import git from '../img/git.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import angelist from '../img/angelist.png';
import ContactForm from './contactForm';

const Contact = () => (
  <div className="contact-container position-relative">
    <div className="row m-0 p-0 black-translucid">
      <h1 className="col-12 fs-1 text-white text-center p-3">
        Contact
      </h1>
      <div className="col-12 col-md-6 row">
        <p className="col-12 text-white text-center fs-2">
          Social Media
        </p>
        <div className="col-12 d-flex flex-row justify-content-center">
          <a
            className="mx-3 h-100"
            href="https://github.com/JAAR91"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" className="m-0" src={git} />
          </a>
          <a
            className="mx-3"
            href="https://twitter.com/91_jaar"
            target="_blank"
            rel="noreferrer"
          >
            <img className="m-0" src={twitter} alt="" />
          </a>
          <a
            className="mx-3"
            href="https://www.linkedin.com/in/jaar/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="m-0" src={linkedin} alt="" />
          </a>
          <a
            className="mx-3"
            href="https://angel.co/u/jaar91"
            target="_blank"
            rel="noreferrer"
          >
            <img className="m-0" src={angelist} alt="" />
          </a>        
        </div>          
        <div className="col-12 d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center p-3">
          <p className="text-white text-center fs-3 m-0 p-0">Email:</p>
          <a
            className="link-info m-0 fs-3"
            href="mailto:jaarriagaramos@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            jaarriagaramos@gmail.com
          </a>
        </div>

        <div className="col-12 d-flex flex-row justify-content-center align-items-center my-2">
          <p className="text-white text-center fs-3 m-0 p-0">Resume: </p>
          <a
            className="link-info m-0 fs-3"
            href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit"
            target="_blank"
            rel="noreferrer"
          >
            Google Docs
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  </div>
);

export default Contact;