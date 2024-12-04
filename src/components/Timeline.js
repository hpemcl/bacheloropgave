import React, { useState } from "react";
import tidslinjeArrowTransparent from "../assets/icons/tidslinje_arrow_transparent.svg";
import tidslinjeArrowBg from "../assets/icons/tidslinje_arrow_bg.svg";

import tidslinjeCirkel2002 from "../assets/icons/tidslinje_cirkel_2002.svg";
import tidslinjeCirkel2002Transparent from "../assets/icons/tidslinje_cirkel_2002_transparent.svg";
import tidslinjeCirkel2005 from "../assets/icons/tidslinje_cirkel_2005.svg";
import tidslinjeCirkel2005Transparent from "../assets/icons/tidslinje_cirkel_2005_transparent.svg";
import tidslinjeCirkel2007 from "../assets/icons/tidslinje_cirkel_2007.svg";
import tidslinjeCirkel2007Transparent from "../assets/icons/tidslinje_cirkel_2007_transparent.svg";
import tidslinjeCirkel2010 from "../assets/icons/tidslinje_cirkel_2010.svg";
import tidslinjeCirkel2010Transparent from "../assets/icons/tidslinje_cirkel_2010_transparent.svg";
import tidslinjeCirkel2015 from "../assets/icons/tidslinje_cirkel_2015_bg.svg";
import tidslinjeCirkel2015Transparent from "../assets/icons/tidslinje_cirkel_2015_transparent.svg";
import tidslinjeCirkel2024 from "../assets/icons/tidslinje_cirkel_2024_bg.svg";
import tidslinjeCirkel2024Transparent from "../assets/icons/tidslinje_cirkel_2024_transparent.svg";

const timelineData = [
    {
      year: "2002",
      imageYear: tidslinjeCirkel2002, // Billede til årstallet
      imageTransparent: tidslinjeCirkel2002Transparent, // Transparent billede til ikke-aktiv tilstand
      imageDescription: "/images/Isbjerget-det-vi-overser.png", // Beskrivelsesbillede
      description: "Dette skete i 2002. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. ",
    },
    {
      year: "2005",
      imageYear: tidslinjeCirkel2005,
      imageTransparent: tidslinjeCirkel2005Transparent,
      imageDescription: "/images/Billede-for-2005.png", // Unikt billede til beskrivelse
      description: "Dette skete i 2005. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis.",
    },
    {
      year: "2007",
      imageYear: tidslinjeCirkel2007,
      imageTransparent: tidslinjeCirkel2007Transparent,
      imageDescription: "/images/Billede-for-2007.png",
      description: "Dette skete i 2007. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis.",
    },
    {
      year: "2010",
      imageYear: tidslinjeCirkel2010,
      imageTransparent: tidslinjeCirkel2010Transparent,
      imageDescription: "/images/Billede-for-2010.png",
      description: "Dette skete i 2010. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis.",
    },
    {
      year: "2015",
      imageYear: tidslinjeCirkel2015,
      imageTransparent: tidslinjeCirkel2015Transparent,
      imageDescription: "/images/Billede-for-2015.png",
      description: "Dette skete i 2015. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis.",
    },
    {
      year: "2024",
      imageYear: tidslinjeCirkel2024,
      imageTransparent: tidslinjeCirkel2024Transparent,
      imageDescription: "/images/Billede-for-2024.png",
      description: "Dette skete i 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis miac risus sollicitudin, sit amet consequat tortor iaculis.",
    },
  ];
  


const TimelineComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center py-16">
        <h2 className="font-bold mb-4 font-title text-subtitle3 ">Vores ståsted</h2>
            <p className="text-black font-bodyMain pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis mi
              ac risus sollicitudin, sit amet consequat tortor iaculis. 
            </p>
    {/* Navigation Arrows */}
    <div className="flex items-center w-full justify-center mb-12 space-x-8">
        {/* Previous Arrow */}
        <button onClick={handlePrevious} className="relative group">
        <img
            src={tidslinjeArrowTransparent}
            alt="Previous"
            className="w-16 h-16 group-hover:hidden"
        />
        <img
            src={tidslinjeArrowBg}
            alt="Previous Hover"
            className="w-16 h-16 hidden group-hover:block"
        />
        </button>

        {/* Timeline Circles */}
        <div className="relative flex items-center space-x-4 overflow-hidden">
        {timelineData.map((item, index) => {
            const isActive = index === currentIndex;
            return (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-300 ${
                isActive ? "scale-100 z-10" : "scale-75"
                }`}
            >
                <img
                src={isActive ? item.imageYear : item.imageTransparent}
                alt={`Year ${item.year}`}
                className={`w-20 h-20 object-contain ${
                    isActive ? "" : "opacity-80"
                }`}
                />
            </button>
            );
        })}
        </div>

        {/* Next Arrow */}
        <button onClick={handleNext} className="relative group">
        <img
            src={tidslinjeArrowTransparent}
            alt="Next"
            className="w-16 h-16 group-hover:hidden"
        />
        <img
            src={tidslinjeArrowBg}
            alt="Next Hover"
            className="w-16 h-16 hidden group-hover:block"
        />
        </button>
    </div>

    {/* Content Section */}
    <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-[70%] gap-16">
        {/* Beskrivelsesbillede */}
        <div className="flex-1">
            <img
            src={timelineData[currentIndex].imageDescription}
            alt={`Description Image for ${timelineData[currentIndex].year}`}
            className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
        </div>

        {/* Tekstbeskrivelse */}
        <div className="flex-1">
            <h3 className="text-subtitle1 font-bold mb-6 font-title">
            {timelineData[currentIndex].year}
            </h3>
            <p className="text-black text-bodyMain font-body">
            {timelineData[currentIndex].description}
            </p>
        </div>
        </div>
    </div>
    </div>



  );
};

export default TimelineComponent;
