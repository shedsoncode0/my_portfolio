import React, { useState } from "react";
import BunnyPlay from "../assets/projectImage/bunnyplay.png";
import state from "../store";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [Projects, setProjects] = useState([
    {
      url: "fundafriend.xyz",
      image: BunnyPlay,
      name: "Bunnyplay",
      productType: "Music-Player",
      type: "Web-App",
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
    <div
      onClick={() => (state.showPopup = { name: "", show: false })}
      className="w-screen flex justify-center h-screen fixed top-0 p-10 left-0 bg-black/90 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl flex-col w-full flex justify-center items-center gap-10"
      >
        {/* {Projects.map((item, index) => (
        ))} */}
        <div className="w-full text-center text-white">
          <h1 className="font-bold text-2xl">Bunnyplay</h1>
          <p className="font-normal">Fin-tech - Mobile/Web</p>
        </div>

        <div className="w-full overflow-hidden object-cover max-w-2xl bg-slate-400 flex-1 rounded-lg ">
          {Projects.map((item, index) => (
            <>
              <div
                key={index}
                className={`slider-slide object-cover  h-full w-full ${
                  index === currentSlide ? "active" : "hidden"
                }`}
              >
                <a href={item.url} target="_blank">
                  <img
                    src={item.image}
                    className="object-cover w-full h-full"
                    alt="image"
                  />
                </a>
              </div>
            </>
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
