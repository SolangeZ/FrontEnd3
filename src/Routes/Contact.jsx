import React from "react";
import Form from "../Components/Form";
import "../style/Style.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <img src="./images/contactanos.jpg" alt="contacto" />
      <Form />
    </section>
  );
};

export default Contact;
