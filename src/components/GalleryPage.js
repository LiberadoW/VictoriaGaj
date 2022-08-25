import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const GalleryPage = (props) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handleRightClick = () => {
    if (
      !(
        props.currentPage >= props.photoList.length / props.postsPerPage &&
        currentIndex === props.currentPosts.length - 1
      )
    ) {
      const totalLength = props.currentPosts.length;
      if (currentIndex + 1 >= totalLength) {
        const currentPosts = props.photoList.slice(
          props.indexOfFirstPost + props.postsPerPage,
          props.indexOfLastPost + props.postsPerPage
        );

        props.setCurrentPage(props.currentPage + 1);
        if (props.currentPage + 1 > props.maxPageNumberLimit) {
          props.setMaxPageNumberLimit(
            props.maxPageNumberLimit + props.pageNumberLimit
          );
          props.setMinPageNumberLimit(
            props.minPageNumberLimit + props.pageNumberLimit
          );
        }
        setCurrentIndex(0);
        const newUrl = currentPosts[0].attributes.url;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newItem = props.currentPosts[newIndex].attributes.url;

      props.setPageNumberLimit(5);

      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    }
  };

  const handleLeftClick = () => {
    if (!(props.currentPage === 1 && currentIndex === 0)) {
      if (currentIndex === 0) {
        if ((props.currentPage - 1) % props.pageNumberLimit === 0) {
          props.setMaxPageNumberLimit(
            props.maxPageNumberLimit - props.pageNumberLimit
          );
          props.setMinPageNumberLimit(
            props.minPageNumberLimit - props.pageNumberLimit
          );
        }
        const currentPosts = props.photoList.slice(
          props.indexOfFirstPost - props.postsPerPage,
          props.indexOfLastPost - props.postsPerPage
        );
        const totalLength = currentPosts.length;
        setCurrentIndex(totalLength - 1);
        props.setCurrentPage(props.currentPage - 1);

        const newUrl = currentPosts[totalLength - 1].attributes.url;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newItem = props.currentPosts[newIndex].attributes.url;

      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-pictures-container">
        {props.photos.map((item) => {
          return (
            <img
              src={item.attributes.formats.thumbnail.url}
              alt=""
              onClick={() =>
                handleClick(item.attributes.url, props.photos.indexOf(item))
              }
            />
          );
        })}
        {clickedImg && (
          <Modal
            currentPage={props.currentPage}
            currentIndex={currentIndex}
            clickedImg={clickedImg}
            postsPerPage={props.postsPerPage}
            currentPosts={props.currentPosts}
            handleRightClick={handleRightClick}
            handleLeftClick={handleLeftClick}
            setClickedImg={setClickedImg}
            photoList={props.photoList}
            setPageNumberLimit={props.setPageNumberLimit}
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
