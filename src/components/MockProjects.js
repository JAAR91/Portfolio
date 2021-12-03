import twitterclone from '../img/twitterclone.png';
import covidImg from '../img/covidtracker.png';
import rocketImg from '../img/rocketsimg.png';
import webflixImg from '../img/webflix.png';
import tictactoe from '../img/tic-tac-toe.gif';
import webscraper from '../img/webscraper.png';

const MockProjects = [
  {
    name: 'Twitter Clone',
    technologies: ['RUBY', 'RUBY ON RAILS'],
    description: 'Clone website of Twitter. With log-in and out system, follow users, post text and images, and comment posts. The project was made with ruby on rails.',
    link: 'https://github.com/JAAR91/twitter',
    img: twitterclone
  },
  {
    name: 'Covid Tracker',
    technologies: ['REACT', 'REDUX'],
    description: 'App that allows you to keep track of the covid-19 pandemic by country and by date. You can check information by contry and some countries contain information for city. ',
    link: 'https://github.com/JAAR91/covid-tracker',
    img: covidImg
  },
  {
    name: 'Space Travelers Hub',
    technologies: ['REACT', 'REDUX'],
    description: 'Keep track of rockets and missions from SpaceX company. ',
    link: 'https://github.com/AdedayoOpeyemi/space_travelers_hub',
    img: rocketImg
  },
  {
    name: 'WEBFLIX',
    technologies: ['JAVASCRIPT', 'WEBPACK'],
    description: 'Keep track of rockets and missions from SpaceX company. ',
    link: 'https://github.com/DanSam5K/Webflix-Index',
    img: webflixImg
  },
  {
    name: 'TIC TAC TOE',
    technologies: ['RUBY'],
    description: 'A Tic Tac Toe game made with ruby.',
    link: 'https://github.com/JAAR91/tictactoewithRSpec',
    img: tictactoe
  },
  {
    name: 'Movies WEB Scraper',
    technologies: ['RUBY'],
    description: 'Web scrapper made with ruby. It get all the movies store on Wikipedia.',
    link: 'https://github.com/JAAR91/Web_Scraper_Ruby',
    img: webscraper
  },
 
];

export default MockProjects;