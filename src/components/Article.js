import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/BigArticle.css";
import ReactMarkdown from "react-markdown";
import Slider from "./Slider";

const Article = (props) => {
  const location = useLocation();
  const article = location.state.find((o) => o.id == props.id);

  return (
    <>
      <div className="big-article">
        <h1>{article.attributes.Title}</h1>
        <section className="big-article-content">
          <Slider photos={article.attributes.Photos.data} />

          <div className="big-article-text-container">
            <ReactMarkdown>{article.attributes.Text}</ReactMarkdown>
          </div>
        </section>
      </div>
      {/* <ScrollToTop /> */}
    </>
  );
};

export default Article;
