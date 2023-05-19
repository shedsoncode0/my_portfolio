/** @format */

import React from "react";

const MouseAnimation = () => {
  return (
    <section className="absolute w-full h-full flex justify-center flex-col items-center">
      <h2 className="z-50 text-white font-medium bg-transparent mb-2 leading-tight">
        Scroll Down
      </h2>
      <div className="w-10 h-20 mouse relative z-50 border-[5px] rounded-full flex justify-center">
        <div className="mouse-wheel"></div>
      </div>
    </section>
  );
};

export default MouseAnimation;
