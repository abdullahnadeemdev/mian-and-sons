import { homeOne } from "../../../assets/images";
import { LeftArrow } from "../../../assets/icons";
import Button from "../../Shared/Button";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen flex items-center justify-center relative">
        <div className="bg-black/75 absolute flex items-center justify-center font-semibold z-10 h-screen w-full"></div>
        <div className="absolute z-20 flex flex-col items-center gap-6 text-background">
          <span className="bg-secondary text-xs sm:text-sm lg:text-base px-4 py-1 rounded-2xl font-medium w-fit tracking-wider">
            ESTABLISHED 1994
          </span>

          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold max-w-4xl text-center leading-tight">
            BUILDING EXCELLENCE FOR{" "}
            <span className="text-secondary">30+ YEARS</span> IN PAKISTAN
          </h1>

          <p className="text-background/80 text-sm md:text-lg lg:text-xl max-w-2xl text-center leading-relaxed">
            From luxury custom designs to state-of-the-art construction, we
            bring your vision of a perfect home to life.
          </p>

          <div className="flex gap-6">
            <Button className={"flex items-center gap-1"}>
              <p>Start Your Project</p>
              <LeftArrow className={"h-4 w-4"} />
            </Button>

            <Button variant="glass">View Portfolio</Button>
          </div>
        </div>

        <img src={homeOne} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 mx-auto z-10 bg-background py-8 rounded-2xl shadow-4xl w-[80vw]">
        <Stats />
      </div>
    </div>
  );
};

export default Hero;
