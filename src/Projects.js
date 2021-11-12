import { DisplayPage } from "./DomLoader";
import twitterclone from './img/twitterclone.png';

const Projects = () => {
  DisplayPage.innerHTML = '';

  const ProjectContainer = document.createElement('div');

  ProjectContainer.innerHTML = `
    <div class="row m-0">
      <h1 class="fs-1 text-white text-center">My Projects</h1>
      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3" src="${twitterclone}">
            <div class="col-12 col-md-6 d-flex flex-column">
              <p class="fs-3 m-0">Twitter Clone</p>
              <div class="d-flex">
                <span class="badge bg-danger">RUBY</span>
                <span class="badge bg-danger mx-1">RUBY ON RAILS</span>
              </div>
              <span>Clone website of Twitter. With log-in and out system, follow users, post text and images, and comment posts. The project was made with ruby on rails.</span>
              <a class="link link-info my-1" href="https://github.com/JAAR91/twitter" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 order-md-2" src="${twitterclone}">
            <div class="col-12 col-md-6 d-flex flex-column order-md-1">
              <p class="fs-3 m-0">Twitter Clone</p>
              <div class="d-flex">
                <span class="badge bg-danger">RUBY</span>
                <span class="badge bg-danger mx-1">RUBY ON RAILS</span>
              </div>
              <span>Clone website of Twitter. With log-in and out system, follow users, post text and images, and comment posts. The project was made with ruby on rails.</span>
              <a class="link link-info my-1" href="https://github.com/JAAR91/twitter" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  DisplayPage.appendChild(ProjectContainer);
};

export default Projects;