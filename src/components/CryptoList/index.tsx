import React, { FC } from "react";
import { Coins } from "../../types";
import "./cryptoList.css";
import CryptoCard from "../CryptoCard";

interface List {
  coins: Coins[];
}

const CryptoList: FC<List> = ({ coins }: List) => {
  return (
    <div className="cryptoList">
      {coins.map((coin) => {
        return (
          <CryptoCard
            key={coin.id}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
