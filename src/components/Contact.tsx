import React from "react";
import "../assets/css/Contact.css";
const Contact = () => {
  return (
    <div className="container-contact">
      <h2>Let's Connect</h2>
      <form>
        <div className="personal">
          <input type="text" className="field" placeholder="Name*" required />
          <input type="email" className="field" placeholder="Email*" required />
        </div>
        <div className="message">
          <textarea className="msg field" placeholder="Message*" required />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
