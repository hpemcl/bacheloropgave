import React from "react";
import caseIcon from "../assets/images/Sunde-Borgere-logo.svg";

const CaseSection = () => {
  return (
    <section className="bg-secondary-lighter py-16 mb-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Right Section - Text and Button */}
        <div className="order-1 md:order-2 md:w-1/2 text-center md:text-left">
          <h2 className="font-title text-2xl font-bold text-primary-dark mb-4">
            Tilføj din case
          </h2>
          <div className="border-b-4 border-primary w-12 mb-4 mx-auto md:mx-0"></div>
          <p className="font-body text-bodyMain text-gray-700 mb-4">
            Har din kommune implementeret en løsning, der fremmer sundhed og
            bæredygtighed?
          </p>
          <p className="font-body text-bodyMain text-gray-700 mb-4">
            Del din erfaring med os, og lad andre kommuner drage nytte af dine
            succeser.
          </p>
          <p className="font-body text-bodyMain text-gray-700 mb-8">
            Bidrag til vores fællesskab ved at tilføje din case her, og vær med
            til at inspirere andre til at skabe positive forandringer.
          </p>
          <a
            href="https://sundeborgere.dk/indsend/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-3 rounded-sm font-body text-btn2 font-semibold shadow-md hover:bg-white hover:text-black transition-colors"
          >
            Tilføj din case
          </a>
        </div>

        {/* Left Section - Large Icon */}
        <div className="order-2 md:order-1 flex justify-center md:justify-start md:w-1/2 mt-8 md:mt-0">
          <img src={caseIcon} alt="Sunde Borgere Icon" className="w-92 h-auto md:w-11/12 md:h-11/12" />
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
