import React from "react";
import Hero from "../../components/Home/Hero";
import Expertise from "../../components/Home/Expertise";
import Methodology from "../../components/Home/Methodology";
import Portfolio from "../../components/Home/Portfolio";

const Home = () => {
  return (
    <div className="flex flex-col gap-15">
      <Hero />
      <Expertise />
      <Methodology />
      <Portfolio />
    </div>
  );
};

export default Home;
