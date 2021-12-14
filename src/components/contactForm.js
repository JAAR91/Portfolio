import React, { useState } from "react";
import sendInfo from "../Logic/ApiHandler";
import warningImg from '../img/warning.png';
import checkImg from '../img/checked.png';

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    message: ""
  };

  const [ loading, setLoading ] = useState(false);
  const [ messages, setMessages ] = useState(0);
  const [ formData, setFormData] = useState(initialState);
  const [ buttonStatus, setButtonStatus] = useState(true);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const checkInp = () => {
    if ((formData.name.length > 5) && (validateEmail(formData.email)) && (formData.message.length > 10)){
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  };

  const setName = (e) => {
    setFormData((prevState) => ({ ...prevState, name: e.target.value}));
    checkInp();
  };

  const setEmail = (e) => {
    setFormData((prevState) => ({ ...prevState, email: e.target.value}));
    checkInp();
  };

  const setMessage = (e) => {
    setFormData((prevState) => ({ ...prevState, message: e.target.value}));
    checkInp();
  };

  const sendMessageHandler = () => {
    setLoading(true);
    sendInfo(formData.name, formData.email, formData.message, setLoading, setMessages);
    setFormData(initialState);
  };

  return (
    <div className="px-5 col-12 col-lg-6 p-3">
      <div className="d-flex flex-column">
        <p className="fs-2 text-white mb-4">Send me a message:</p>
        <div className="position-relative pb-4 m-0">
          <input
            className={"form-control " + ((formData.name.length < 5 && formData.name.length > 0) ? "border-red" : "")}
            type="text"
            placeholder="First name and last name"
            value={formData.name}
            onChange={setName}
          />
          <p className={"d-text m-0 text-white " + ((formData.name.length < 5 && formData.name.length > 0) ? "" : "d-none" )}>Name need to be more than 5 characters long!!</p>
        </div>
        <div className="position-relative pb-4 m-0">
          <input
            className={"form-control " + ( (!validateEmail(formData.email) && formData.email.length > 0) ? "border-red" : "")}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={setEmail}
          />
          <p className={"d-text m-0 text-white " + ((!validateEmail(formData.email) && formData.email.length > 0) ? "" : "d-none" )}>Enter a valid email!</p>
        </div>
        <div className="position-relative pb-4 m-0">
          <textarea
            className={"form-control "  + ((formData.message.length < 10 && formData.message.length > 0) ? "border-red" : "")}
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={setMessage}
          />
          <p className={"d-text m-0 text-white " + ((formData.message.length < 10 && formData.message.length > 0) ? "" : "d-none" )}>Message must be more than 10 characters long!</p>
        </div>
        <button
          className={"btn " + (buttonStatus ? "btn-dark": "btn-success")}
          type="click"
          disabled={buttonStatus}
          onClick={sendMessageHandler}
        >
          Send Message
        </button>
      </div>
      <div className={( loading ? "" : "d-none" ) + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-message`}
      >
        <p className="fs-3 my-2">Sending your message, please wait! </p>
        <div className="spinner-border text-success loading-spinner">
          </div>
        </div>
      <div className={( (messages === 1) ? "" : "d-none") + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-message`}>
        <img src={checkImg} alt=""/>
        <p className="fs-3 my-2">Thanks for your message I will reach back to you as soon as I can!</p>
        <button className="btn btn-outline-warning" onClick={() => setMessages(0)}>close</button>
      </div>
      <div className={( (messages === 2) ? "" : "d-none") + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-message`}>
        <img src={warningImg} alt="" />
        <p className="fs-3 my-2">There was an error and your message was not sent please try again later and refresh the page!</p>
        <button className="btn btn-outline-warning" onClick={() => setMessages(0)}>close</button>
    </div>
    </div>
  );
};

export default ContactForm;