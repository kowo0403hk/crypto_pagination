import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Coins } from "./types";

const App = () => {
  const [coins, setCoins] = useState<Coins[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoins(data);
    };

    fetchCoins();
  }, []);
  return (
    <div className="app">
      <h1>Crypto Space</h1>
    </div>
  );
};

export default App;
