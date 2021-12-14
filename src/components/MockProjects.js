import twitterclone from '../img/twitterclone.png';
import covidImg from '../img/covidtracker.png';
import rocketImg from '../img/rocketsimg.png';
import webflixImg from '../img/webflix.png';
import tictactoe from '../img/tic-tac-toe.gif';
import webscraper from '../img/webscraper.png';
import carBooking from '../img/carbooking.png';

const MockProjects = [
  {
    id: 1,
    name: 'Car Booking',
    technologies: ['RUBY ON RAILS', 'REACT', 'REDUX'],
    description: 'A car website that allows you reserve car for testing before buying it, use its own API made with rails and uses reac and redux for the fron end.',
    link: 'https://github.com/Emmanuelaaron/carBooking',
    img: carBooking
  },
  {
    id: 2,
    name: 'Twitter Clone',
    technologies: ['RUBY', 'RUBY ON RAILS'],
    description: 'Clone website of Twitter. With log-in and out system, follow users, post text and images, and comment posts. The project was made with ruby on rails.',
    link: 'https://github.com/JAAR91/twitter',
    img: twitterclone
  },
  {
    id: 3,
    name: 'Covid Tracker',
    technologies: ['REACT', 'REDUX'],
    description: 'App that allows you to keep track of the covid-19 pandemic by country and by date. You can check information by contry and some countries contain information for city. ',
    link: 'https://github.com/JAAR91/covid-tracker',
    img: covidImg
  },
  {
    id: 4,
    name: 'Space Travelers Hub',
    technologies: ['REACT', 'REDUX'],
    description: 'Keep track of rockets and missions from SpaceX company. ',
    link: 'https://github.com/AdedayoOpeyemi/space_travelers_hub',
    img: rocketImg
  },
  {
    id: 5,
    name: 'WEBFLIX',
    technologies: ['JAVASCRIPT', 'WEBPACK'],
    description: 'Keep track of rockets and missions from SpaceX company. ',
    link: 'https://github.com/DanSam5K/Webflix-Index',
    img: webflixImg
  },
  {
    id: 6,
    name: 'TIC TAC TOE',
    technologies: ['RUBY'],
    description: 'A Tic Tac Toe game made with ruby.',
    link: 'https://github.com/JAAR91/tictactoewithRSpec',
    img: tictactoe
  },
  {
    id: 7,
    name: 'Movies WEB Scraper',
    technologies: ['RUBY'],
    description: 'Web scrapper made with ruby. It get all the movies store on Wikipedia.',
    link: 'https://github.com/JAAR91/Web_Scraper_Ruby',
    img: webscraper
  },
 
];

export default MockProjects;