import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Items from "../Items/Items";
import News from "../News/News";
import PopularBrand from "../PopularBrand/PopularBrand";
import ItemInfo from "../ItemInfo/ItemInfo";
import NewArivalItems from "../NewArivalItems/NewArivalItems";
import BestSale from "../BestSale/BestSale";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ItemInfo></ItemInfo>
      <Items></Items>
      <Category></Category>
      <BestSale></BestSale>
      <NewArivalItems></NewArivalItems>
      <PopularBrand></PopularBrand>
      <Contact></Contact>
      <News></News>
    </div>
  );
};

export default Home;
