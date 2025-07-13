import React from "react";
import SplitTextGSAP from "@/components/ui/split-text-gsap";

const ContactHeading = React.memo(() => (
  <div className="mx-auto mt-6 max-w-4xl text-center">
    <SplitTextGSAP
      text="Get In Touch"
      className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 font-ghapter"
      delay={10}
      duration={0.5}
    />
  </div>
));

export default ContactHeading;
