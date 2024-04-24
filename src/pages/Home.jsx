import React from "react";
import HomeText from "../components/HomeText";
import Slider from "../components/Slider";
import HomeProducts from "../components/HomeProducts";

function Home() {
  return (
    <>
      <div className="flex">
        <HomeText></HomeText>
        <Slider></Slider>
      </div>
      <HomeProducts></HomeProducts>
    </>
  );
}

export default Home;
