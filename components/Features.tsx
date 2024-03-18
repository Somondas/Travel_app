import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <Image
          src="/phone.png"
          alt="phone"
          width={440}
          height={1000}
          className="feature-phone"
        />
      </div>
    </section>
  );
};

export default Features;
