import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Players from "../pages/Players";
import Coaches from "../pages/Coaches";
import Workouts from "../pages/Workouts";
import Photos from "../pages/Photos";
import Contact from "../pages/Contact";
import ArticlePage from "../pages/ArticlePage";
import Gallery from "../components/Gallery";

const Page = ({scores,articles,players,gallery}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage scores={scores} articles={articles}/>} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/players" element={<Players players={players} />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/photos" element={<Photos gallery={gallery} />} />
        <Route path="/photos/gallery/:id" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Page;
