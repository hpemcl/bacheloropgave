import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      title: "Medlemskab",
      description: "Bliv en del af Sund By Netværket. Sammen skaber vi sundere byer.",
      link: "/om-os/medlemskab", 
      image: "assets/images/medlemskab.jpg", 
    },
    {
      title: "Temagrupper",
      description: "Bidrag til innovative sundhedsinitiativer. Deltag i vores temagrupper.",
      link: "/temagrupper", 
      image: `${process.env.PUBLIC_URL}/images/header_background.jpg`, 
    },
    {
      title: "Projekter",
      description: "Skab positive forandringer. Vær med i vores sundhedsprojekter.",
      link: "/metodeudvikling-og-innovation", 
      image: "assets/images/projekter.jpg", 
    },
    {
      title: "Kalender",
      description: "Deltag i kommende events. Se vores kalender her.",
      link: "/kalender", 
      image: "assets/images/kalender.jpg", 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="text-center bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h3 className="font-title text-2xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-bodyMain text-gray-700 mb-4">
                {feature.description}
              </p>
              <span className="font-body text-primary flex items-center justify-center group hover:text-primary-light">
                Læs mere
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
