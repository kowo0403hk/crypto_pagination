import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Coins } from "./types";
import { observer } from "./helpers/IntersectionObserver";
import CryptoList from "./components/CryptoList";

const App = () => {
  const [coins, setCoins] = useState<Coins[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoins(data);
      // give h1 an animation when it's on the screen
      const title = document.querySelectorAll(".title");

      title.forEach((el) => {
        observer.observe(el);
      });
    };

    fetchCoins();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Crypto Space</h1>
      <CryptoList coins={coins} />
    </div>
  );
};

export default App;
