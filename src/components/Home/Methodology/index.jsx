import React from "react";
import { Construction, Design, Email, Handshake } from "../../../assets/icons";
import Methods from "../../Shared/Methods";

const Methodology = () => {
  return (
    <div className="mx-auto mb-15">
      <p className="text-dark font-medium text-center text-xs sm:text-base">
        OUR METHODOLOGY
      </p>
      <p className="text-lg md:text-3xl  font-semibold text-center">
        {" "}
        The Seamless Journey to Excellence
      </p>

      <div className="mt-15 grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-4 ">
        <Methods
          icon={<Email />}
          title="Consultation"
          desc="
        Dive deep into your lifestyle and vision to define the project scope"
        />

        <Methods
          icon={<Design />}
          title="Design"
          desc="
        Dive deep into your lifestyle and vision to define the project scope"
        />

        <Methods
          icon={<Construction />}
          title="Construction"
          desc="
        Dive deep into your lifestyle and vision to define the project scope"
        />

        <Methods
          icon={<Handshake />}
          title="Handover"
          desc="
        Dive deep into your lifestyle and vision to define the project scope"
        />
      </div>
    </div>
  );
};

export default Methodology;
