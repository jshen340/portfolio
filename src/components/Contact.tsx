import React from "react";
import "../assets/css/Contact.css";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Swal from "sweetalert2";
const Contact = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "6f425123-aaa9-4bda-9ccd-b6a61409b72e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container-contact">
      <h2>Let's Connect</h2>
      <form onSubmit={onSubmit}>
        <div className="personal">
          <input
            type="text"
            className="field"
            placeholder="Name*"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="message">
          <textarea
            className="msg field"
            placeholder="Message*"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>
        <button className="submit">Submit</button>
      </form>
      <div className="icons">
        <a href="https://github.com/jshen340">
          <img src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/jocelyn-shen-546ba721b/">
          <img src={Linkedin} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
