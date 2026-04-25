import React from "react";
import { Construction, Design, Email, Handshake } from "../../../assets/icons";
import Methods from "../../Shared/Methods";

const Methodology = () => {
  return (
    <div className="mx-auto mb-15">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        Your Journey to a Dream Home
      </h1>{" "}
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>
      <div className="mt-15 grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-4 ">
        <Methods
          icon={<Email />}
          title="Call Us"
          desc="Contact us via phone to share your requirements and house plan."
        />

        <Methods
          icon={<Design />}
          title="Get a Quote"
          desc="We provide a transparent, detailed quotation based on your specific needs."
        />

        <Methods
          icon={<Construction />}
          title="Meeting"
          desc="We schedule an in-person meeting to finalize details and start planning."
        />

        <Methods
          icon={<Handshake />}
          title="Build & Handover"
          desc="We begin constructing your dream home with 100% structural accuracy."
        />
      </div>
    </div>
  );
};

export default Methodology;
