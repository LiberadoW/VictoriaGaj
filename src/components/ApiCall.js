import React from "react";
import Page from "../layouts/Page";
import { useEffect, useState } from "react";

const ApiCall = () => {
  const parseJSON = (resp) => (resp.json ? resp.json() : resp);

  const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }

    return parseJSON(resp).then((resp) => {
      throw resp;
    });
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://victoria-gaj-api.herokuapp.com/api/article2s?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setArticles(data))
      .catch((error) => setError(error));
  }, [] );

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://victoria-gaj-api.herokuapp.com/api/players?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => {
        setPlayers(data);
      })
      .catch((error) => setError(error));
  }, []);

  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("https://victoria-gaj-api.herokuapp.com/api/galleries?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => {
        setGallery(data);
      })
      .catch((error) => setError(error));
  }, []);

  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetch("https://webscraper90minut.herokuapp.com/api/scores", {
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((data) => {
        setScores(data);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }


  return (
    <Page
      articles={articles}
      players={players}
      gallery={gallery}
      scores={scores}
    />
  );
};

export default ApiCall;
