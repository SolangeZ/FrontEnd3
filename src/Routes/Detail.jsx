import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { eP } from "./Home";
import "../style/Style.css";
import TableCell from "@mui/material/TableCell";
import ButtonBase from '@mui/material/ButtonBase';

const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(`${eP}/${id}`);
    const data = await res.json();
    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  });

  return (
    <section className="container">
      <TableCell>
        <h1 className="detail">Detail Dentist </h1>
        <>
          <p>{details?.name}</p>
          <p>{details?.username}</p>
          <p>{details?.email}</p>
          <p>{details?.phone}</p>
          <p>{details?.website}</p>
        </>
        <ButtonBase>
          <Link to="/home">Back</Link>
        </ButtonBase>
      </TableCell>
    </section>
  );
};

export default Detail;
