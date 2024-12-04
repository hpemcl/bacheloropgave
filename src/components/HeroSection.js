import React from "react";
import heroImage from "../assets/images/Logo_uden_navn-v3.png"; // Update path as per your project structure

const HeroSection = () => {
  return (
    <section className="bg-primary-dark text-white py-16 relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left Section - Text and Buttons */}
        <div className="md:w-1/2 text-left">
          <h1 className="font-title text-4xl md:text-6xl mb-4 font-bold">
            Velkommen til Sund By Netværket
          </h1>
          <p className="font-body text-bodyMain mb-6">
            Siden 1991 har Sund By Netværket været et aktivt medlem af WHO's Healthy Cities
            Network og er nu et af de største nationale netværk i dette globale fællesskab.
            <br />
            <br />
            Som medlem får din kommune/region værdifulde muligheder for at styrke det lokale
            folkesundhedsarbejde. Dog afhænger netværkets styrke af dets medlemmer.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Styled Buttons */}
            <button className="bg-secondary-light text-black px-12 py-2 rounded-sm font-body text-btn2 font-semibold shadow-md hover:bg-primary hover:text-white transition-colors">
              Bliv medlem
            </button>
            <button className="bg-transparent border-2 border-secondary-light px-12 py-2 rounded-sm font-body text-btn2 font-semibold text-white shadow-md hover:text-white hover:border-primary hover:bg-primary transition-colors">
              Kontakt os
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Sund By Netværket"
            className="w-full max-w-sm md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
