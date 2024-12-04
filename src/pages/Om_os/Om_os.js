import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Organisation",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/organisation",
    image: "/path-to-image.jpg", // Update with the correct path
  },
  {
    title: "Samarbejdspartnere",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/samarbejdspartnere",
    image: "/path-to-image.jpg", // Update with the correct path
  },

  {
    title: "Strategi 2021 - 2030",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/strategi-2021-2030",
    image: "/path-to-image.jpg", // Update with the correct path
  },

  {
    title: "WHO healthy crisis",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/whohealthycrisis",
    image: "/path-to-image.jpg", // Update with the correct path
  },
  {
    title: "Vedtægter",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/vedtaegter",
    image: "/path-to-image.jpg", // Update with the correct path
  },
  {
    title: "Medlemskab",
    description: "Om Sund By Netværkets repræsentantskab, bestyrelse og sekretariat",
    link: "/om-os/medlemskab",
    image: "/path-to-image.jpg", // Update with the correct path
  },
];


const OverviewCards = () => {
  return (
    <section className="mb-16 bg-white">
      {/* Header Section */}
      <div
        className="relative text-center py-24 text-white bg-cover bg-center"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Fællesmøde_4nov/mogi_billede.JPG)`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 font-title">Om os</h1>
          <p className="text-lg font-body">
            Lorem ipsum dolor sit amet consectetur. Porttitor nibh vel vulputate facilisi.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg bg-white group hover:shadow-xl transition-shadow duration-300"
            style={{ height: '350px' }}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col justify-between p-4">
              {/* Normal State */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-sm text-white font-body">Est. 1990</p>
                <h2 className="text-xl font-bold text-white">{card.title}</h2>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-bold text-white">{card.title}</h2>
                <p className="text-sm text-gray-200 mb-4">{card.description}</p>
                <Link
                  to={card.link}
                  className="flex items-center text-white font-semibold mt-4 hover:underline"
                >
                  Læs mere
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="ml-2 w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h8m0 0-4-4m4 4-4 4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewCards;
