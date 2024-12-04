import React, { useState } from "react";
import { Link } from "react-router-dom";
import longArrowIcon from "../assets/icons/short_arrow_black.svg";


const projectData = {
  ongoing: [
    {
      title: "ABC for mental sundhed",
      duration: "2014 - nu",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/ABC_for_mental_sundhed",
      status: "Igangværende projekt",
    },
    {
      title: "Alkoholkursus om tidlig opsporing",
      duration: "XXXX - XXXX",
      description: "Sed amet scelerisque ullamcorper donec sagittis arcu.",
      link: "/Metodeudvikling_og_innovation/Alkoholkursus_om_tidlig_opsporing",
      status: "Igangværende projekt",
    },
    {
      title: "Hybridseminar og mental sundhed",
      duration: "XXXX - XXXX",
      description: "Sed amet scelerisque ullamcorper donec sagittis arcu.",
      link: "/Metodeudvikling_og_innovation/Hybridseminar_og_mental_sundhed",
      status: "Igangværende projekt",
    },
    {
      title: "Krop og bevægelse i naturens rige",
      duration: "XXXX - XXXX",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Krop_og_bevaegelse_i_naturens_rige",
      status: "Igangværende projekt",
    },
    {
      title: "Kulturens rige",
      duration: "XXXX - XXXX",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Kulturens_rige",
      status: "Igangværende projekt",
    },
  ],
  completed: [
    {
      title: "Byens rum – livet mellem husene 2018-2020",
      duration: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Byens_rum_livet_mellem_husene_2018_2020",
      status: "Afsluttet projekt",
    },
    {
      title: "LAKS",
      duration: "XXXX - XXXX",
      description: "Sed amet scelerisque ullamcorper donec sagittis arcu.",
      link: "/Metodeudvikling_og_innovation/LAKS",
      status: "Afsluttet projekt",
    },
    {
      title: "Netværk for fællesskabsagenter",
      duration: "XXXX - XXXX",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Netvaerk_for_faellesskabsagenter",
      status: "Afsluttet projekt",
    },
    {
      title: "Netværk for innovationsagenter",
      duration: "XXXX - XXXX",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Netvaerk_for_innovationsagenter",
      status: "Afsluttet projekt",
    },
    {
      title: "Sundhedsfremme på erhvervs- og produktionsskoler",
      duration: "XXXX - XXXX",
      description: "Lorem ipsum dolor sit amet consectetur.",
      link: "/Metodeudvikling_og_innovation/Sundhedsfremme_paa_erhvervs_og_produktionsskoler",
      status: "Afsluttet projekt",
    },
  ],
};

const MetodeudviklingOgInnovation = () => {
  const [filter, setFilter] = useState("all");

  const getFilteredProjects = () => {
    if (filter === "all") {
      return [...projectData.ongoing, ...projectData.completed];
    }
    if (filter === "ongoing") {
      return projectData.ongoing;
    }
    if (filter === "completed") {
      return projectData.completed;
    }
    return [];
  };

  const projects = getFilteredProjects();

  return (
    <section className="pb-16 bg-white">
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
          <h1 className="text-4xl font-bold mb-4 font-title">Metodeudvikling & Innovation</h1>
          <p className="text-lg font-body">
            Lorem ipsum dolor sit amet consectetur. Porttitor nibh vel vulputate facilisi.
          </p>
        </div>
      </div>


      {/* Filter Buttons */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-4 md:space-y-0 items-center mx-8 my-8">
        <button
          onClick={() => setFilter("all")}
          className={`w-80 md:w-auto px-4 py-2 rounded border ${
            filter === "all"
              ? "bg-[#0D3644] font-semibold text-white"
              : "text-gray-800 border-black hover:bg-[#0D3644] hover:text-white hover:scale-105 font-body"
          }`}
        >
          Alle
        </button>
        <button
          onClick={() => setFilter("ongoing")}
          className={`w-80 md:w-auto px-4 py-2 rounded border ${
            filter === "ongoing"
              ? "bg-[#0D3644] font-semibold text-white"
              : "text-gray-800 border-black hover:bg-[#0D3644] hover:text-white hover:scale-105 font-body"
          }`}
        >
          Igangværende projekter
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`w-80 md:w-auto px-4 py-2 rounded border ${
            filter === "completed"
              ? "bg-[#0D3644] font-semibold text-white"
              : "text-gray-800 border-black hover:bg-[#0D3644] hover:text-white hover:scale-105 font-body"
          }`}
        >
          Afsluttede projekter
        </button>
      </div>


      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg group bg-secondary-lighter shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-sm text-gray-600 mb-2 italic font-body">{project.status}</p>
              <p className="text-sm text-gray-600 mb-4 font-body">{project.duration}</p>
              <h2 className="text-subtitle3 font-bold text-gray-800 mb-2 font-title">{project.title}</h2>
              <p className="text-gray-700 font-body">{project.description}</p>
              <Link
                to={project.link}
                className="flex items-center text-[#0D3644] font-semibold hover:underline mt-4 inline-block font-body"
              >
                Læs mere
                <img
                  src={longArrowIcon}
                  alt="Arrow Icon"
                  className="ml-2 w-3 h-3"
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Ingen projekter at vise</p>
        )}
      </div>
    </section>
  );
};

export default MetodeudviklingOgInnovation;

