import { homeOne } from "../../../assets/images";
import { Check } from "../../../assets/icons";

const Pitch = () => {
  return (
    <div className="mb-15 bg-primary text-background">
      <div className="px-6 py-10 flex flex-col gap-6 md:flex-row justify-between">
        <div className="flex-1 mt-4 md:pl-14 ">
          <p className="text-xl md:text-3xl font-bold text-center md:text-start">
            WHY PARTNER WITH US
          </p>

          <ul className="mt-5 md:mt-15 flex flex-col gap-4 ">
            <li className="flex gap-4">
              <div className=" px-2 md:px-3 md:py-1 flex items-center  justify-center rounded-full bg-secondary">
                <Check />
              </div>
              <span>
                <p className="font-bold text-base md:text-lg">
                  Uncompromising Quality
                </p>
                <p className="font-extralight text-sm md:text-base">
                  Lorem ipsum dolor sit amet.
                </p>
              </span>
            </li>

            <li className="flex gap-4">
              <div className="px-2 md:px-3 md:py-1 flex items-center  justify-center rounded-full bg-secondary">
                <Check />
              </div>
              <span>
                <p className="font-bold  text-base md:text-lg">
                  Uncompromising Quality
                </p>
                <p className="font-extralight text-sm md:text-base">
                  Lorem ipsum dolor sit amet.
                </p>
              </span>
            </li>

            <li className="flex gap-4">
              <div className="px-2 md:px-3 md:py-1 flex items-center  justify-center rounded-full bg-secondary">
                <Check />
              </div>
              <span>
                <p className="font-bold  text-base md:text-lg">
                  Uncompromising Quality
                </p>
                <p className="font-extralight text-sm md:text-base ">
                  Lorem ipsum dolor sit amet.
                </p>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex items-center  justify-end ">
          <div className="aspect-6/4 max-h-140 ">
            <img
              src={homeOne}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
