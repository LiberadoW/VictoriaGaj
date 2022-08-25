import React from "react";
import "../styles/Pagination.css";

const Pagination = ({
 
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  setCurrentPage,
  setMinPageNumberLimit,
  setMaxPageNumberLimit,
  pageNumberLimit,
  
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const header = document.querySelector(".main-image");
  const height = header.offsetHeight;

  
  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number}>
          <button
            className={`page-link ${currentPage === number ? "active" : ""}`}
            onClick={() => {
              window.scrollTo(0, height);
              paginate(number);
            }}
          >
            {number}
          </button>
        </li>
      );
    }
  });

  const handleNextButton = () => {
    window.scrollTo(0, height);
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    window.scrollTo(0, height);
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>
      <div>
        <ul className="pagination">
          <li>
            <button
              onClick={handlePrevButton}
              disabled={currentPage === 1 ? true : false}
            >
              «
            </button>
          </li>

          {renderPageNumbers}

          <li>
            <button
              onClick={handleNextButton}
              disabled={currentPage > pageNumbers.length - 1 ? true : false}
            >
              »
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
