import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Items from "../Items/Items";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Category></Category>
      <News></News>
    </div>
  );
};

export default Home;
