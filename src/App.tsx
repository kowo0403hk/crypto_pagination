import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Coins } from "./types";
import { observer } from "./helpers/IntersectionObserver";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

const App = () => {
  const [coins, setCoins] = useState<Coins[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 8;

  // posts per page
  const lastCoinIndex = currentPage * coinsPerPage;
  const firstCoinIndex = lastCoinIndex - coinsPerPage;

  const currentPosts = coins.slice(firstCoinIndex, lastCoinIndex);

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

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, [currentPosts]);

  return (
    <div className="app">
      <h1 className="title hidden">Crypto Space</h1>
      <CryptoList coins={currentPosts} />
      <Pagination
        totalCoins={coins.length}
        coinsPerPage={coinsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
