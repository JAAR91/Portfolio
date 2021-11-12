import { DisplayPage } from "./DomLoader";
import FormSubmit from "./Form";

const Contact = () => {
  DisplayPage.innerHTML = '';

  const ContactContainer = document.createElement('div');
  
  ContactContainer.innerHTML = `
    <p class="fs-1 text-white text-center">
        Under construction!
    </p>
  `;
  ContactContainer.append(FormSubmit());

  DisplayPage.appendChild(ContactContainer);
};

export default Contact;