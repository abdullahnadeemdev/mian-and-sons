import { homeOne } from "../../../assets/images";
import { LeftArrow } from "../../../assets/icons";
import Button from "../../Shared/Button";

const Hero = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center relative">
        <div className="bg-black/75 absolute flex items-center justify-center font-semibold z-10 h-screen w-full"></div>
        <div className="absolute z-20 flex flex-col items-center gap-6 text-background">
          <span className="bg-secondary text-sm px-4 py-1 rounded-2xl font-medium  w-fit ">
            ESTABLISHED 1994
          </span>

          <p className="text-5xl font-bold w-300 text-center px-60">
            BUILDING EXCELLENCE FOR{" "}
            <span className="text-secondary">30+ YEARS</span> IN PAKISTAN
          </p>

          <p className="text-background/80 text-lg px-40 w-200 text-center ">
            From luxury custom designs to state-of-the-art construction, we
            bring your vision of a perfect home to life
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
    </div>
  );
};

export default Hero;
