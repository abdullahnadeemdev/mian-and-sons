import React from "react";
import Hero from "../../components/Home/Hero";
import Expertise from "../../components/Home/Expertise";
import Methodology from "../../components/Home/Methodology";

const Home = () => {
  return (
    <div className="flex flex-col gap-15">
      <Hero />
      <Expertise />
      <Methodology />
    </div>
  );
};

export default Home;
