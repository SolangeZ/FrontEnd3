import React, { useState } from "react";
import "../style/Style.css";

const Form = () => {
  const [values, setValues] = useState("");

  const formulario = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const email = e.target[1].value;

    if (nombre.trim().length < 3 || !email.includes("@")) {
      setValues("Please verify your information again");
    } else {
      setValues(`Thank you ${nombre}, we will contact you shortly`);
    }
  };

  return (
    <main>
      <form onSubmit={formulario}>
        <input className="" name="nombre" type="text" placeholder="full name" />
        <input name="email" type="email" placeholder="email" />
        <button type="submit">Send</button>
        <div>{values}</div>
      </form>
    </main>
  );
};

export default Form;
