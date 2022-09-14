import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const GalleryPage = ({
  photos,
  currentPage,
  setCurrentPage,
  photoList,
  indexOfLastPost,
  indexOfFirstPost,
  postsPerPage,
  currentPosts,
  setPageNumberLimit,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
  pageNumberLimit
}) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handleRightClick = () => {
    if (
      !(
        currentPage >= photoList.length / postsPerPage &&
        currentIndex === currentPosts.length - 1
      )
    ) {
      const totalLength = currentPosts.length;
      if (currentIndex + 1 >= totalLength) {
        const currentPosts = photoList.slice(
          indexOfFirstPost + postsPerPage,
          indexOfLastPost + postsPerPage
        );

        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(
            maxPageNumberLimit + pageNumberLimit
          );
          setMinPageNumberLimit(
            minPageNumberLimit + pageNumberLimit
          );
        }
        setCurrentIndex(0);
        const newUrl = currentPosts[0].attributes.url;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newItem = currentPosts[newIndex].attributes.url;

      setPageNumberLimit(5);

      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    }
  };

  const handleLeftClick = () => {
    if (!(currentPage === 1 && currentIndex === 0)) {
      if (currentIndex === 0) {
        if ((currentPage - 1) % pageNumberLimit === 0) {
          setMaxPageNumberLimit(
            maxPageNumberLimit - pageNumberLimit
          );
          setMinPageNumberLimit(
            minPageNumberLimit - pageNumberLimit
          );
        }
        const currentPosts = photoList.slice(
          indexOfFirstPost - postsPerPage,
          indexOfLastPost - postsPerPage
        );
        const totalLength = currentPosts.length;
        setCurrentIndex(totalLength - 1);
        setCurrentPage(currentPage - 1);

        const newUrl = currentPosts[totalLength - 1].attributes.url;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newItem = currentPosts[newIndex].attributes.url;

      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-pictures-container">
        {photos.map((item) => {
          return (
            <img
              src={item.attributes.formats.thumbnail.url}
              alt=""
              onClick={() =>
                handleClick(item.attributes.url, photos.indexOf(item))
              }
            />
          );
        })}
        {clickedImg && (
          <Modal
            currentPage={currentPage}
            currentIndex={currentIndex}
            clickedImg={clickedImg}
            postsPerPage={postsPerPage}
            currentPosts={currentPosts}
            handleRightClick={handleRightClick}
            handleLeftClick={handleLeftClick}
            setClickedImg={setClickedImg}
            photoList={photoList}
            setPageNumberLimit={setPageNumberLimit}
          />
        )}
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
      </div>
    </div>
  );
};

export default GalleryPage;
