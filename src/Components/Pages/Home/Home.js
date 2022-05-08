import React from "react";
import Homebanner from "./Homebanner/Homebanner";
import Homeproducts from "./Homeproducts";

const Home = () => {
  return (
    <div className="container">
      <Homebanner></Homebanner>
      <Homeproducts></Homeproducts>
    </div>
  );
};

export default Home;
