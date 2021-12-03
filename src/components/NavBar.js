import React from 'react';
import { NavLink } from 'react-router-dom';
import menuImg from '../img/menu.png';

const NavBar = () => {
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
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark m-0">
        <div className="container d-flex flex-row justify-content-between">
          <button className="navbar-brand bg-transparent border-0 fs-3 nav-link" type="click">J.A.A.R.</button>
          <div>
            <button className="bg-transparent border-0"><img id="navMenuBtn" className="menuBtn d-md-none" src={menuImg} alt="" /></button>
            <ul className="d-none mobileLinks d-md-flex flex-row me-auto mb-2 mb-lg-0 text-secondary list-style-none">
              {navbarLinks.map((navlink) => (
                <li key={navlink.id}>
                  <NavLink
                    className="nav-text px-3"
                    to={navlink.link}
                    activeclassname="active"
                    exact="true"
                  >
                    {navlink.text.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
