import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ScrollToTopArticle from "../components/ScrollToTopArticle";
import Article from "../components/Article";

const ArticlePage = () => {
  const params = useParams();
  return (
    <div className="big-article-container">
      <ScrollToTopArticle/>
      <Link to="/"><button className="back-button">Powrót do strony głównej</button></Link>
      <Article id={params.id} />
      <Link to="/"><button className="back-button">Powrót do strony głównej</button></Link>
    </div>
  );
};

export default ArticlePage;
