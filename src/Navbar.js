import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Navbar = () => {
  const menuBar = document.createElement('nav');
  menuBar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'm-0',
  'fixed-top');
  menuBar.innerHTML = `
    <div class="container d-flex flex-row justify-content-between">
      <button class="navbar-brand bg-transparent border-0 fs-3 nav-link" type="click">J.A.A.R.</button>
      <div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="linkContainer">
            <li class="nav-item">
              <button class="nav-link bg-transparent border-0 active">Home</button>
            </li>
            <li class="nav-item">
              <button class="nav-link bg-transparent border-0">Projects</button>
            </li>
            <li class="nav-item">
              <button class="nav-link bg-transparent border-0">About</button>
            </li>
            <li class="nav-item">
              <button class="nav-link bg-transparent border-0">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

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

  menuBar.addEventListener('click', (e) => {
    switch(e.target.textContent) {
      case 'J.A.A.R.':
        console.log('JAAR');
        break;
      case 'Home':
        MenuClick('Home');
        Home();
        break;
      case 'Projects':
        MenuClick('Projects');
        Projects();
        break;
      case 'About':
        MenuClick('About');
        About();
        break;
      case 'Contact':
        MenuClick('Contact');
        break;
    }
  });

 return menuBar;
};

export default Navbar;