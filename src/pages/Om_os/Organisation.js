import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "../../components/Timeline";
import BestyrelseSection from "../../components/BestyrelseSection";
import Sekretariat from "../../components/Sekretariat";

const Organisation = () => {
  const sections = [
    {
      id: "vores-staasted",
      title: "Vores ståsted",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-subtitle3 font-bold mb-4 font-title">Vores ståsted</h2>
            <p className="text-gray-700 text-bodyMain">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis mi
              ac risus sollicitudin, sit amet consequat tortor iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Isbjerget-det-vi-overser.png`}
              alt="Illustration"
              className="w-full rounded shadow"
            />
          </div>
        </div>
      ),
    },
    {
      id: "tidslinje",
      title: "Sund By Netværkets tidslinje",
      content: (
        <div className="mt-8">
          <Timeline />
        </div>
      ),
    },
    {
      id: "bestyrelse",
      title: "Bestyrelse",
      content: (
        <div className="mt-8">
          <BestyrelseSection />
        </div>
      ),
    },
    {
      id: "sekretariat",
      title: "Sekretariat",
      content: (
        <div className="mt-8">
          <Sekretariat />
        </div>
      ),
    },
    {
      id: "medlemmer",
      title: "Medlemmer",
      content: (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Medlemmer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ),
    },
  ];

  const Section = ({ children, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        id={id}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        {children}
      </motion.div>
    );
  };

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
          <h1 className="text-4xl font-bold mb-4 font-title">Organisation</h1>
          <p className="text-lg font-body">
            Her kan du få et overblik over, hvordan Sund By Netværket er organiseret.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-6 py-3 border rounded font-body text-btn2 bg-primary text-white hover:bg-primary-light hover:text-black transition-all"
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Sections with Animation */}
        {sections.map((section) => (
          <Section key={section.id} id={section.id}>
            {section.content}
          </Section>
        ))}
      </div>
    </section>
  );
};

export default Organisation;
