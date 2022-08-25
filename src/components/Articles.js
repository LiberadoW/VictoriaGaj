import React from "react";
import { Link } from "react-router-dom";
import "../styles/Article.css";
import formatDate from "./functions/formatDate";

const Articles = ({ articles, latestArticle }) => {

  return (
    <ul className="articles-container">
      {articles.map((post) => (
        <li className="article-list-item" key={post.id}>
          <Link to={`article/${post.id}`} state={articles}>
            {post.id === latestArticle ? (
              <div className="featured-article">
                <img
                  src={
                    post.attributes.Photos.data[0].attributes.formats.medium.url
                  }
                  alt="article"
                />
                <div className="featured-article-title">
                  <h3>{post.attributes.Title}</h3>
                </div>
              </div>
            ) : (
              <div className="article">
                <div className="article-photo">
                  <img
                    src={
                      post.attributes.Photos.data[0].attributes.formats.medium
                        .url
                    }
                    alt="article"
                  />
                </div>
                <div className="article-text">
                  <p className="article-date">{formatDate(post.attributes.publishedAt)}</p>
                  <div>
                    <h3>{post.attributes.Title}</h3>
                    <p>{post.attributes.Description}</p>
                  </div>
                 
                </div>
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
