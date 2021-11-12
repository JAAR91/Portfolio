import { DisplayPage } from "./DomLoader";

const Contact = () => {
  DisplayPage.innerHTML = '';

  const ContactContainer = document.createElement('div');
  
  ContactContainer.innerHTML = `
    <p class="fs-1 text-white text-center">
        Under construction!
    </p>
  `;

  DisplayPage.appendChild(ContactContainer);
};

export default Contact;