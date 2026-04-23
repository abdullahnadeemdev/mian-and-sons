import { homeOne } from "../../../assets/images";
import { Check } from "../../../assets/icons";

const REASONS = [
  {
    title: "100% Structural Accuracy",
    desc: "Every brick is laid with precision — we guarantee 100% adherence to your architect's drawings and maps.",
  },
  {
    title: "25+ Year Permanent Team",
    desc: "Our staff has been with us for over 25 years. They understand our standards of leveling, strength, and finishing.",
  },
  {
    title: "Premium Materials Only",
    desc: "A-Class bricks, 60-Grade Mughal/Ittefaq steel, Turk Plast pipes, and 99.9% pure Pakistan Cables copper wiring.",
  },
  {
    title: "Structural Warranty & Support",
    desc: "We offer a structural warranty and remain available even after handover for any technical adjustments.",
  },
];

const Pitch = () => {
  return (
    <div className="mb-15 bg-primary text-background">
      <div className="px-6 py-10 flex flex-col gap-6 md:flex-row justify-between">
        <div className="flex-1 mt-4 md:pl-14 ">
          <p className="text-xl md:text-3xl font-bold text-center md:text-start">
            WHY PARTNER WITH US
          </p>

          <ul className="mt-5 md:mt-15 flex flex-col gap-4 ">
            {REASONS.map((reason) => (
              <li key={reason.title} className="flex gap-4">
                <div className=" px-2 md:px-3 md:py-1 flex items-center  justify-center rounded-full bg-secondary">
                  <Check />
                </div>
                <span>
                  <p className="font-bold text-base md:text-lg">
                    {reason.title}
                  </p>
                  <p className="font-extralight text-sm md:text-base">
                    {reason.desc}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex items-center  justify-end ">
          <div className="aspect-6/4 max-h-140 ">
            <img
              src={homeOne}
              alt="Mian and Sons quality construction"
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
