import { DisplayPage } from "./DomLoader";
import twitterclone from './img/twitterclone.png';
import covidImg from './img/covidtracker.png';
import rocketImg from './img/rocketsimg.png';
import webflixImg from './img/webflix.png';
import tictactoe from './img/tic-tac-toe.gif';
import webscraper from './img/webscraper.png';

const Projects = () => {
  DisplayPage.innerHTML = '';

  const ProjectContainer = document.createElement('div');

  ProjectContainer.innerHTML = `
    <div class="row m-0">
      <h1 class="fs-1 text-white text-center">My Projects</h1>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 projectImg" src="${twitterclone}">
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
            <img class="col-12 col-md-6 rounded-3 order-md-2 projectImg" src="${covidImg}">
            <div class="col-12 col-md-6 d-flex flex-column order-md-1">
              <p class="fs-3 m-0">Covid Tracker</p>
              <div class="d-flex">
                <span class="badge bg-warning ">React</span>
                <span class="badge bg-warning  mx-1">Redux</span>
              </div>
              <span>
                App that allows you to keep track of the covid-19 pandemic by country and by date. You can check information by contry and some countries contain information for city. 
              </span>
              <a class="link link-info my-1" href="https://github.com/JAAR91/covid-tracker" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 order-lg-2 projectImg" src="${rocketImg}">
            <div class="col-12 col-md-6 d-flex flex-column order-md-1">
              <p class="fs-3 m-0">Space Travelers Hub</p>
              <div class="d-flex">
                <span class="badge bg-warning ">JavaScript</span>
                <span class="badge bg-warning  mx-1">Webpack</span>
              </div>
              <span>
                Keep track of rockets and missions from SpaceX company. 
              </span>
              <a class="link link-info my-1" href="https://github.com/AdedayoOpeyemi/space_travelers_hub" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 order-md-2 order-lg-1 projectImg" src="${webflixImg}">
            <div class="col-12 col-md-6 d-flex flex-column order-md-1 order-lg-2">
              <p class="fs-3 m-0">WEBFLIX</p>
              <div class="d-flex">
                <span class="badge bg-danger">RUBY</span>
                <span class="badge bg-danger mx-1">RUBY ON RAILS</span>
              </div>
              <span>
                Keep track of the TV shows you watch, see comments and give likes to your favorites shows.
              </span>
              <a class="link link-info my-1" href="https://github.com/DanSam5K/Webflix-Index" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 projectImg" src="${tictactoe}">
            <div class="col-12 col-md-6 d-flex flex-column">
              <p class="fs-3 m-0">TIC TAC TOE</p>
              <div class="d-flex">
                <span class="badge bg-danger">RUBY</span>
              </div>
              <span>
                A Tic Tac Toe game made with ruby.
              </span>
              <a class="link link-info my-1" href="https://github.com/JAAR91/tictactoewithRSpec" target="_blank">See repository</a>
              <button class="btn btn-outline-info">More info</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 p-2">
        <div class="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
          <div class="row m-0">
            <img class="col-12 col-md-6 rounded-3 order-md-2 projectImg" src="${webscraper}">
            <div class="col-12 col-md-6 d-flex flex-column order-md-1">
              <p class="fs-3 m-0">Movies WEB Scraper</p>
              <div class="d-flex">
                <span class="badge bg-danger ">Ruby</span>
              </div>
              <span>
              Web scrapper made with ruby. It get all the movies store on Wikipedia.
              </span>
              <a class="link link-info my-1" href="https://github.com/JAAR91/Web_Scraper_Ruby" target="_blank">See repository</a>
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