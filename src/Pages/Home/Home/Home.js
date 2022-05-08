import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Category></Category>
    </div>
  );
};

export default Home;
