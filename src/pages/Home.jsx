import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mt-3 justify-evenly gap-6">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Home;
