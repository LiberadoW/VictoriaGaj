import React from "react";
import Pagination from "../components/Pagination";
import "../styles/HomePage.css";
import { useState } from "react";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";
import Table from "../components/Table";
import SocialMedia from "../components/SocialMedia";
import SidebarPromo from "../components/SidebarPromo";
import Articles from "../components/Articles";

const HomePage = (props) => {
  const articles = props.articles;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  articles.sort((a, b) => b.id - a.id);
  let idOfLatestArticle;
  if (articles.length > 0) {
    idOfLatestArticle = articles[0].id;
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (props.scores.length === 0) {
    return null;
  } else {
    return (
      <div className="home-page">
        <ScrollToTopOnLoad />
        <h1>Aktualności</h1>

        <section>
          <div className="article-pagination-container">
            <Pagination
              articles={articles}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              postsPerPage={postsPerPage}
              totalPosts={articles.length}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setMinPageNumberLimit={setMinPageNumberLimit}
              setMaxPageNumberLimit={setMaxPageNumberLimit}
              pageNumberLimit={pageNumberLimit}
              setPageNumberLimit={setPageNumberLimit}
            />

            <Articles
              articles={currentPosts}
              latestArticle={idOfLatestArticle}
            />
            <Pagination
              articles={articles}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              postsPerPage={postsPerPage}
              totalPosts={articles.length}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setMinPageNumberLimit={setMinPageNumberLimit}
              setMaxPageNumberLimit={setMaxPageNumberLimit}
              pageNumberLimit={pageNumberLimit}
              setPageNumberLimit={setPageNumberLimit}
            />
          </div>

          <aside>
            <SidebarPromo />
            <Table scores={props.scores} />
            <SocialMedia />
          </aside>
        </section>
      </div>
    );
  }
};

export default HomePage;
