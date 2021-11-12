import { DisplayPage } from "./DomLoader";
import profilePic from './img/profilepic.png';

const Home = () => {
  DisplayPage.innerHTML = '';

  const HomeContainer = document.createElement('div');
  
  HomeContainer.innerHTML = `
    <div class="row m-0">
      <div class="col-12 col-md-5 order-md-2 p-4">
        <img class="shadow-lg rounded-circle w-100" src="${ profilePic }">
      </div>
      <div class="col-12 col-md-7 order-md-1 pt-7">
        <div class="text-center">
          <p class="text-white fs-1 my-0">Jose Alberto Arriaga Ramos</p>
          <div class="border"></div>
          <p class="text-white fs-3 my-0">Full Stack Software Developer</p>
        </div>
        <div class="text-center">
          <span class="badge bg-info">HTML5</span>
          <span class="badge bg-info">CSS</span>
          <span class="badge bg-info">BOOTSTRAP</span>
          <span class="badge bg-info">RUBY</span>
          <span class="badge bg-info">RAILS</span>
          <span class="badge bg-info">JAVASCRIPT</span>
          <span class="badge bg-info">REACT</span>
          <span class="badge bg-info">REDUX</span>
        </div>
        <div class="text-white text-center mt-5">
          <p class="fs-3">I love to code and I'm always ready to solve new challenges and learn new ways to solve the problems I found.</p>
        </div>
        <div class="d-flex justify-content-center">
          <a class="btn btn-outline-light" href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit" target="_blank">Get my resume</a>
        </div>
      </div>
      <div class=" col-12 order-3 text-white text-center mt-3 shadowbackground">
        <p class="fs-2">"Programming isn't about what you know. It's about what you can figure out." -Chris Pine-</p>
      </div>
    </div>
  `;

  DisplayPage.appendChild(HomeContainer);
};

export default Home;