import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Items from "../Items/Items";
import News from "../News/News";
import PopularBrand from "../PopularBrand/PopularBrand";
import ItemInfo from "../ItemInfo/ItemInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ItemInfo></ItemInfo>
      <Items></Items>
      <Category></Category>
      <PopularBrand></PopularBrand>
      <News></News>
    </div>
  );
};

export default Home;
