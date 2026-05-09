import { Check } from "../../../assets/icons";
import { homeOne } from "../../../assets/images";
import { REASONS } from "../../../constants";

const Pitch = () => {
  console.log("My Image URL is:", homeOne);
  return (
    <section className="mb-20 mx-4 md:mx-6">
      <div className="bg-primary text-background rounded-4xl shadow-2xl overflow-hidden">
        <div className="px-6 py-14 md:py-20 lg:px-16 flex flex-col gap-12 lg:gap-20 lg:flex-row items-center justify-between">
          <div className="flex-1 w-full max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center lg:text-left mb-10 md:mb-14">
              WHY PARTNER WITH US
            </h2>

            <ul className="flex flex-col gap-8 md:gap-10">
              {REASONS.map((reason) => (
                <li key={reason.title} className="flex gap-5 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-full bg-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div className="flex flex-col mt-1">
                    <h3 className="font-bold text-lg md:text-xl mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="font-light text-sm md:text-base opacity-80 leading-relaxed max-w-lg">
                      {reason.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl aspect-4/3 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={homeOne}
                alt="Mian and Sons quality construction"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
