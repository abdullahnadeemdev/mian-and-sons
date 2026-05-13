import React from "react";
import Hero from "../../components/Home/Hero";
import Expertise from "../../components/Home/Expertise";
import Methodology from "../../components/Home/Methodology";
import Portfolio from "../../components/Home/Portfolio";
import Pitch from "../../components/Home/Pitch";
import CTA from "../../components/Home/CTA";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Mian & Sons Construction delivers luxury home construction, grey structure, Spanish villas, and interior design services in Lahore with 26+ years of experience."
        />{" "}
      </Helmet>
      <div className="flex flex-col gap-15 mx-auto max-w-360">
        <Hero />
        <Expertise />
        <Methodology />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Pitch />
      </div>
    </>
  );
};

export default Home;
