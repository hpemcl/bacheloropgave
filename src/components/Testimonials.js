import React, { useState } from "react";
import leftArrow from "../assets/icons/Icon-Arrow-Left.svg";
import faceImage from "../assets/images/Person_uden_ansigt_med_cirkel_lys.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Otto Ohrt",
      title: "Sundhedschef, Sundhed og Omsorg - Aarhus Kommune",
      text: `“Kommunerne skal ikke alle genopfinde den dybe tallerken på samme tid. Sund By Netværket er et fællesskab, hvor vi i kommunerne deler de gode idéer og viden med hinanden til gavn for sundheden hos borgerne. 
      
      Her afprøves også nye metoder, hvor vi tør indtænke civilsamfundet offensivt for at bekæmpe den stigende ulighed i sundhed. Det er en gevinst for Aarhus Kommune at være aktive medlemmer.”`,
    },
    {
      name: "Allan Krogh Paludan Malver",
      title: "Chef for Bibliotek, Borgerservice og Fællesskab - Horsens Kommune",
      text: `“Siden 1987 har Horsens Kommune været medlem af WHO Healthy Cities Network og gennem dette netværk møder vi mange internationale samarbejdspartnere. 

      I Det Nationale Sund By Netværk får vi mulighed for at samarbejde og dele viden mere lokalt, med kommuner over hele Danmark. Dette er af stor betydning for vores daglige arbejde med Fællesskab, Trivsel og Frivillighed.”`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 400); // Animation duration
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4 md:px-8">
        <p className="font-body text-bodySmall text-black uppercase mb-2">
          Testimonials
        </p>
        <h2 className="font-title text-4xl font-bold mb-12">
          Hvad siger vores medlemmer om os?
        </h2>
        <div className="flex flex-col items-center justify-center">
          {/* Testimonial card */}
          <div
            className={`bg-secondary-lighter rounded-lg p-8 w-full max-w-md md:max-w-2xl shadow-lg transition-opacity transform ${
              isTransitioning
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            } duration-300`}
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={faceImage}
                alt="Person icon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="font-title text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="font-body text-bodySmall text-gray-600">
                {testimonials[currentIndex].title}
              </p>
            </div>
            <p className="font-body text-bodyMain text-gray-800">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Arrow */}
          <button
            onClick={handleNext}
            className="mt-8 flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary-light transition-transform duration-400"
          >
            <img src={leftArrow} alt="Arrow icon" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
