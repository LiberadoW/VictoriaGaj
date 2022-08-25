import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Players from "../pages/Players";
import Coaches from "../pages/Coaches";
import Workouts from "../pages/Workouts";
import Timetable from "../pages/Timetable";
import Photos from "../pages/Photos";
import Videos from "../pages/Videos"
import Contact from "../pages/Contact";
import ArticlePage from "../pages/ArticlePage";
import Gallery from "../components/Gallery";

const Page = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage scores={props.scores} articles={props.articles}/>} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/players" element={<Players players={props.players} />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route
          path="/timetable"
          element={<Timetable scores={props.scores} />}
        />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos gallery={props.gallery} />} />
        <Route path="/photos/gallery/:id" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Page;
