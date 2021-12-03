import React, { useState } from "react";
import sendInfo from "../Logic/ApiHandler";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    message: ""
  };

  const [ loading, setLoading ] = useState(false);
  const [ messages, setMessages ] = useState(0);
  const [formData, setFormData] = useState(initialState);

  const setName = (e) => {
    setFormData((prevState) => ({ ...prevState, name: e.target.value}));
  };

  const setEmail = (e) => {
    setFormData((prevState) => ({ ...prevState, email: e.target.value}));
  };

  const setMessage = (e) => {
    setFormData((prevState) => ({ ...prevState, message: e.target.value}));
  };

  const sendMessageHandler = () => {
    setLoading(true);
    sendInfo(formData.name, formData.email, formData.message, setLoading, setMessages);
    setFormData(initialState);
  };

  return (
    <div className="px-5 col-12 col-md-6 p-3">
      <div className="d-flex flex-column">
        <p className="fs-2 text-white mb-4">Send me a message:</p>
        <input
          className="form-control my-3"
          type="text"
          placeholder="First name and last name"
          value={formData.name}
          onChange={setName}
        />
        <input
          className="form-control my-3"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={setEmail}
        />
        <textarea
          className="form-control my-3"
          rows="6"
          placeholder="Message"
          value={formData.message}
          onChange={setMessage}
        />
        <button
          className="btn btn-dark"
          type="click"
          disabled=""
          onClick={sendMessageHandler}
        >
          Send Message
        </button>
      </div>
      <div className={( loading ? "" : "d-none" ) + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-dark-transparent`}
      >
        <p className="fs-3 my-2">Sending your message, please wait! </p>
        <div className="spinner-border text-success loading-spinner">
          </div>
        </div>
      <div className={( (messages === 1) ? "" : "d-none") + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-dark-transparent`}>
        <p className="fs-3 my-2">Thanks for your message I will reach back to you as soon as I can!</p>
        <img src="http://localhost:9000/db386a42cdb5cf6055e1.png" alt=""/>
        <button className="btn btn-outline-warning" onClick={() => setMessages(0)}>close</button>
      </div>
      <div className={( (messages === 2) ? "" : "d-none") + ` position-absolute
        top-50 start-50 translate-middle w-100 text-white h-100 d-flex
        flex-column justify-content-center align-items-center bg-dark-transparent`}>
        <p className="fs-3 my-2">There was an error and your message was not sent please try again later and refresh the page!</p>
        <img src="http://localhost:9000/956f0b58508214df351d.png" alt="" />
        <button className="btn btn-outline-warning" onClick={() => setMessages(0)}>close</button>
    </div>
    </div>
  );
};

export default ContactForm;