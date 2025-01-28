import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const Product = ({ title, image, onClick }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={image} />
      <button onClick={onClick}>Detaya Git</button>
    </div>
  );
};
