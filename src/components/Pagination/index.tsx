import React, { FC } from "react";
import "./pagination.css";

interface Page {
  totalCoins: number;
  coinsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<Page> = ({
  totalCoins,
  coinsPerPage,
  currentPage,
  setCurrentPage,
}: Page) => {
  // generating pages for the pagination
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const page = Number(e.currentTarget.innerText);
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            className={page === currentPage ? "page selected" : "page"}
            key={index}
            onClick={(e) => handleClick(e)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
