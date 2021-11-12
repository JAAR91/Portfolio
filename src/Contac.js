import { DisplayPage } from "./DomLoader";
import FormSubmit from "./Form";
import git from './img/git.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import angelist from './img/angelist.png';

const Contact = () => {
  DisplayPage.innerHTML = '';

  const ContactContainer = document.createElement('div');
  ContactContainer.classList.add('shadowbackground', 'm-0', 'rounded', 'row');
  
  ContactContainer.innerHTML = `
    <h1 class="col-12 fs-1 text-white text-center">
        Contact
    </h1>
    <div class="col-12 col-md-6 row">
      <p class="col-12 text-white text-center fs-2">Social Media</p>
      <div class="col-12 d-flex flex-row justify-content-center">
        <a class="mx-3 h-100" href="https://github.com/JAAR91" target="_blank"><img class="m-0" src="${git}"></a>
        <a class="mx-3" href="https://twitter.com/91_jaar" target="_blank"><img class="m-0" src="${twitter}"></a>
        <a class="mx-3" class="m-3"a href="https://www.linkedin.com/in/jaar/" target="_blank"><img class="m-0" src="${linkedin}"></a>
        <a class="mx-3" href="https://angel.co/u/jaar91" target="_blank"><img class="m-0" src="${angelist}"></a>
      </div>
      <div class="col-12 d-flex flex-row justify-content-center align-items-center">
        <p class="text-white text-center fs-3 m-0 p-0">Email: </p>
        <a class="link-info m-0 fs-3" href="mailto:jaarriagaramos@gmail.com" target="_blank">jaarriagaramos@gmail.com</a>
      </div>

      <div class="col-12 d-flex flex-row justify-content-center align-items-center my-2">
        <p class="text-white text-center fs-3 m-0 p-0">Resume: </p>
        <a class="link-info m-0 fs-3" href="https://docs.google.com/document/d/1AINJ2zR6U2j3eEWaSuTKL-SMAYRwPZsLuh1VXfxH3as/edit" target="_blank">Google Docs</a>
      </div>
    </div>

  `;
  ContactContainer.append(FormSubmit());

  DisplayPage.appendChild(ContactContainer);
};

export default Contact;