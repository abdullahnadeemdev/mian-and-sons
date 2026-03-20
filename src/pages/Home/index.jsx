import React from "react";
import Hero from "../../components/Home/Hero";
import Expertise from "../../components/Home/Expertise";

const Home = () => {
  return (
    <div className="flex flex-col gap-15">
      <Hero />
      <Expertise />
    </div>
  );
};

export default Home;
