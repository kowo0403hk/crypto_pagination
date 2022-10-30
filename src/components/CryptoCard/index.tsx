import React, { FC } from "react";
import "./cryptoCard.css";

interface Card {
  name: string;
  image: string;
  price: number;
}

const CryptoCard: FC<Card> = ({ name, image, price }: Card) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <h3 className="card__price">${price.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default CryptoCard;
