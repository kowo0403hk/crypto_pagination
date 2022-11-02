import React, { FC, useEffect } from "react";
import { Coins } from "../../types";
import "./cryptoList.css";
import CryptoCard from "../CryptoCard";
import { CSSTransition } from "react-transition-group";

interface List {
  coins: Coins[];
  direction: string;
}

const CryptoList: FC<List> = ({ coins, direction }: List) => {
  // useEffect(() => {
  //   const list = document.querySelector(".cryptoList");

  //   if (direction === "right") {
  //     list?.classList.add("right");
  //     list?.classList.remove("left");
  //   } else if (direction === "left") {
  //     list?.classList.add("left");
  //     list?.classList.remove("right");
  //   }
  // }, [direction]);

  return (
    <CSSTransition in={true} timeout={500} classNames={direction} unmountOnExit>
      <div className={`cryptoList`}>
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
    </CSSTransition>
  );
};

export default CryptoList;
