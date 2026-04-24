import React from "react";
import { homeOne } from "../../../assets/images";

const index = () => {
  return (
    <div>
      <h5 className="text-sm text-secondary">TESTIMONIALS</h5>
      <h1 className="text-4xl font-extrabold mb-10">What Our Clients Say</h1>
      <div>
        <div>
          <p class=" w-[65%] overflow-hidden text-[#ff9800]">★★★★★</p>

          <p>
            One of the best contractors available in Lahore right now, very
            humble and professional
          </p>
          <div className="flex items-center gap-5 text-lg font-semibold">
            <div className="w-15 h-15 ">
              <img
                src={homeOne}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <p>Naveed Bilal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
