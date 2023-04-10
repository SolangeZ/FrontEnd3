import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../style/Style.css";
export const eP = "https://jsonplaceholder.typicode.com/users";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(eP);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <main>
      <h1>Professional Dentist</h1>

      <section className="card-detail">
        {details.length
          ? details.map((detail) => (
              <Card
                key={detail.id}
                name={detail.name}
                username={detail.username}
                id={detail.id}
              />
            ))
          : null}
      </section>
    </main>
  );
};

export default Home;
