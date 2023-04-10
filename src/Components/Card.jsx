import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextFavs } from "../Context/ContextFavs";
import "../style/Style.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextFavs);

  const addFav = () => {
    dispatch({ type: "ADD", payload: { name, username, id } });
  };

  const disAdd = () => {
    dispatch({ type: "DISADD", payload: { name, username, id } });
  };

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="doctor" />
      <h5> {name}</h5>
      <p>{username}</p>
      {state.data.some((element) => element.id === id) ? (
        <Link onClick={disAdd} className="favButton">
          <StarIcon className="icons" alt="icon add" />
        </Link>
      ) : (
        <Link onClick={addFav} className="favButton">
          <StarBorderIcon className="icons" alt="icon disAdd" />
        </Link>
      )}
      <Link to={`/users/${id}`}>
        <ManageSearchIcon className="icons" alt="icon detail" />
      </Link>
    </div>
  );
};

export default Card;
