import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import menuImg from '../img/menu.png';

const NavBar = () => {
  const [ menuStatus, setMenuStatus ] = useState(false);

  const navbarLinks = [
    {
      id: 1,
      link: '/',
      text: "Home"
    },
    {
      id: 2,
      link: '/projects',
      text: "Projects"
    },
    {
      id: 3,
      link: '/about',
      text: "About"
    },
    {
      id: 4,
      link: '/contact',
      text: "Contact"
    }
  ];

  return (
    <div id="navbar" className="d-flex flex-row justify-content-between d-md-flex flex-md-column justify-content-md-start align-items-center">
        <Link id="navbar-title" to="/" >J.A.A.R.</Link>
        <div className="div-menu-container">
          <button className="d-md-none bg-transparent border-0 p-2 float-end" onClick={() => setMenuStatus(!menuStatus)}>
            <img id="navMenuBtn" className="menuBtn" src={menuImg} alt="" />
          </button>
          <div className={ menuStatus ? "show-menu" : "hide-menu"}>
            {navbarLinks.map((navlink) => (
              <NavLink
                key={navlink.id}
                className="nav-text"
                to={navlink.link}
                activeclassname="active"
                exact="true"
                onClick={() => setMenuStatus(false)}
              >
                {navlink.text.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
  );
};

export default NavBar;
