import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import GalleryPage from "./GalleryPage";
import "../styles/Gallery.css";

const postsPerPage = 20

const Gallery = () => {
  const params = useParams();
  const location = useLocation();


  const gallery = location.state.find((o) => o.id == params.id);
  const photoList = gallery.attributes.Photos.data;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photoList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="gallery-container">
      <Link to="/photos">
        <button className="back-button">Powrót do galerii zdjęć</button>
      </Link> 
      <h1>{gallery.attributes.Title}</h1>

      <Pagination
        articles={photoList}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        postsPerPage={postsPerPage}
        totalPosts={photoList.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setMinPageNumberLimit={setMinPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        pageNumberLimit={pageNumberLimit}
        setPageNumberLimit={setPageNumberLimit}
      />

      <GalleryPage
        photos={currentPosts}
        photoList={photoList}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        indexOfLastPost={indexOfLastPost}
        indexOfFirstPost={indexOfFirstPost}
        postsPerPage={postsPerPage}
        currentPosts={currentPosts}
        setPageNumberLimit={setPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        pageNumberLimit={pageNumberLimit}
      />
      <Pagination
        articles={photoList}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        postsPerPage={postsPerPage}
        totalPosts={photoList.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setMinPageNumberLimit={setMinPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        pageNumberLimit={pageNumberLimit}
        setPageNumberLimit={setPageNumberLimit}
      />
    </div>
  );
};

export default Gallery;
