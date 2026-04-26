import { homeOne } from "../../../assets/images";
import { LeftArrow } from "../../../assets/icons";
import Button from "../../Shared/Button";
import Stats from "./Stats";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen flex items-center justify-center relative">
        <div className="bg-black/75 rounded-b-2xl absolute flex items-center justify-center font-semibold z-10 h-screen w-full"></div>
        <div className="absolute z-20 flex flex-col items-center gap-6 text-background px-6">
          <span className="bg-secondary text-xs sm:text-sm lg:text-base px-4 py-1 rounded-2xl font-medium w-fit tracking-wider">
            QUALITY WORK IS OUR MOTTO
          </span>

          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold max-w-4xl text-center leading-tight">
            BUILDING LUXURY HOMES WITH{" "}
            <span className="text-secondary">GENERATIONAL TRUST</span>
          </h1>

          <p className="text-background/80 text-sm md:text-lg lg:text-xl max-w-2xl text-center leading-relaxed">
            At Mian &amp; Sons, we don't just build houses — we construct
            legacies. 26+ years of uncompromising quality and 100% structural
            accuracy.
          </p>

          <div className="flex gap-6">
            <Link to="/contact">
              <Button className={"flex items-center gap-1"}>
                <p>Start Your Project</p>
                <LeftArrow className={"h-4 w-4"} />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button variant="glass">View Portfolio</Button>
            </Link>
          </div>
        </div>

        <img
          src={homeOne}
          alt="Mian and Sons luxury construction"
          className="rounded-2xl h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="absolute -bottom-23 md:-bottom-10 left-1/2 -translate-x-1/2 mx-auto z-20 ">
        <Stats />
      </div>
    </div>
  );
};

export default Hero;
