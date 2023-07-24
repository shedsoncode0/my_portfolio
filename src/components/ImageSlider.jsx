import React, { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [Projects, setProjects] = useState([
    {
      url: "fundafriend.xyz",
      image: "/image.jpeg",
      name: "`Fundafriend",
      type: "",
    },
    {
      url: "fundafriend.xyz",
      image: "/canvas.png",
      name: "`Fundafriend",
      type: "",
    },
  ]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Projects.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="w-screen flex justify-center h-screen fixed top-0 p-10 left-0 bg-black/90 backdrop-blur-sm">
      <div className="max-w-xl flex-col w-full flex justify-center items-center gap-10">
          {/* <img src="/image.jpeg" className="object-cover" alt="image" /> */}
        <div className="w-full overflow-hidden object-cover max-w-2xl bg-slate-400 flex-1 rounded-lg ">
          {Projects.map((items, index) => (
            <div
              key={index}
              className={`slider-slide ${
                index === currentSlide ? "active" : "hidden"
              }`}
            >
              <img src={items.image} className="object-cover" alt="image" />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        </div>
        <div className="w-full flex justify-between">
          <div
            onClick={() => goToPrevSlide()}
            className="p-3 cursor-pointer rounded-md bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            onClick={() => goToNextSlide()}
            className="p-3 cursor-pointer rounded-md bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
