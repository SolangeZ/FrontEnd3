import React, { useContext } from "react";
import { ContextFavs } from "../Context/ContextFavs";

const Favs = () => {
  const { state } = useContext(ContextFavs);

  return (
    <>
      <h1>Dentists Favorites</h1>

      <section className="card-favorites">
        {state.data?.map((data) => (
          <div>
            <img
              src="./images/doctor.jpg"
              alt="imagen doctor"
              style={{
                borderRadius: "50%",
              }}
            />
            <h5> {data.name}</h5>
            <p>{data.username}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Favs;
