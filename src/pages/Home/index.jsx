import React from "react";
import Hero from "../../components/Home/Hero";
import Expertise from "../../components/Home/Expertise";
import Methodology from "../../components/Home/Methodology";
import Portfolio from "../../components/Home/Portfolio";
import Pitch from "../../components/Home/Pitch";

const Home = () => {
  return (
    <div className="flex flex-col gap-15">
      <Hero />
      <Expertise />
      <Methodology />
      <Portfolio />
      <Pitch />
    </div>
  );
};

export default Home;
