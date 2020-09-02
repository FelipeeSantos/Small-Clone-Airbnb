import React from "react";
import { Card, CardInfo } from "./CardsStyles"

const Cards = ({ src, title, description, price }) => {
  return (
    <>
      <Card>
        <img src={src} alt="Images"/>
        <CardInfo>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </CardInfo>
      </Card>
    </>
  );
};

export default Cards;
