import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import menuImg from './img/menu.png';
import Contact from "./Contac";

const Navbar = () => {
  const menuBar = document.createElement('nav');
  menuBar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'm-0',
  'fixed-top');
  menuBar.innerHTML = `
    <div class="container d-flex flex-row justify-content-between">
      <button class="navbar-brand bg-transparent border-0 fs-3 nav-link" type="click">J.A.A.R.</button>
      <div>
        <div class="">
          <button class="bg-transparent border-0"><img id="navMenuBtn" class="menuBtn d-md-none" src="${menuImg}"></button>
          <ul class="d-none mobileLinks d-md-flex flex-row me-auto mb-2 mb-lg-0 text-secondary" id="linkContainer">
            <li>
              <button class="bg-transparent border-0 active">Home</button>
            </li>
            <li>
              <button class="bg-transparent border-0">Projects</button>
            </li>
            <li>
              <button class="bg-transparent border-0">About</button>
            </li>
            <li>
              <button class="bg-transparent border-0">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  let mobileMenuStatus = false;

  const MenuClick = (link) => {
    document.getElementById('linkContainer').childNodes.forEach((item) => {
      const button = item.childNodes[1];
      if (button) {
        if(button.textContent === link) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    });
  };

  const closeMobileMenu = () => {
    if (mobileMenuStatus) {
      document.getElementById('linkContainer').classList.add('d-none');
      mobileMenuStatus = false;
    }
  };

  menuBar.addEventListener('click', (e) => {
    switch(e.target.textContent) {
      case 'J.A.A.R.':
        break;
      case 'Home':
        MenuClick('Home');
        Home();
        closeMobileMenu();
        break;
      case 'Projects':
        MenuClick('Projects');
        Projects();
        closeMobileMenu();
        break;
      case 'About':
        MenuClick('About');
        About();
        closeMobileMenu();
        break;
      case 'Contact':
        MenuClick('Contact');
        Contact();
        closeMobileMenu();
        break;
    }
    if (e.target.id === 'navMenuBtn') {
      document.getElementById('linkContainer').classList.toggle('d-none');
      mobileMenuStatus = !mobileMenuStatus;
    }
  });

 return menuBar;
};

export default Navbar;