import React from "react";
import { motion } from "framer-motion";
import PlaceholderImage from "../assets/icons/Person_uden_ansigt_med_cirkel_lys.svg";
import MailIkon from "../assets/icons/Mail_v2.svg"; 
import LinkedinIkon from "../assets/icons/Linkedin_v2.svg";

const members = [
  {
    name: "Charlotte Iisager Petersen",
    title: "Sekretariatchef",
    role: "Vejle Kommune: Leder af Sundhedsfremme og forebyggelse",
    image: PlaceholderImage,
    mail: "charlotte.petersen@example.com",
    linkedin: "https://www.linkedin.com/in/charlotte-iisager-petersen",
  },
  {
    name: "Jan Andersson",
    title: "Specialkonsulent",
    role: "Odder Kommune: Forebyggelseskonsulent",
    image: PlaceholderImage,
    mail: "jan.andersson@example.com",
    linkedin: "https://www.linkedin.com/in/jan-andersson",
  },
  {
    name: "Louise Dal",
    title: "Suppleant",
    role: "Tønder Kommune: Projektkoordinator",
    image: PlaceholderImage,
    mail: "louise.dal@example.com",
    linkedin: "https://www.linkedin.com/in/louise-dal",
  },
  {
    name: "Tine Thorsboe",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Chefkonsulent | Center for Social og Sundhed",
    image: PlaceholderImage,
    mail: "tine.thorsboe@example.com",
    linkedin: "https://www.linkedin.com/in/tine-thorsboe",
  },
  {
    name: "Ditte Kirkegaard Madsen",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Chefkonsulent | Forebyggelse og Ulighed",
    image: PlaceholderImage,
    mail: "ditte.madsen@example.com",
    linkedin: "https://www.linkedin.com/in/ditte-kirkegaard-madsen",
  },
  {
    name: "Linea Kjær Ramsdahl",
    title: "Studentmedhjælper, Praktikant",
    role: "Københavns Kommune: Folkesundhedschef",
    image: PlaceholderImage,
    mail: "linea.ramsdahl@example.com",
    linkedin: "https://www.linkedin.com/in/linea-kjaer-ramsdahl",
  },
  {
    name: "Hannah Clausen",
    title: "Studentmedhjælper",
    role: "Webudvikler/webdesigner",
    image: PlaceholderImage,
    mail: "hannah.clausen@example.com",
    linkedin: "https://www.linkedin.com/in/hannah-clausen",
  },
];

const BestyrelseSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center py-16 bestyrelse-section"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-bold mb-4 font-title text-subtitle3"
      >
        Sekretariat
      </motion.h2>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-black font-bodyMain"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis mi
        ac risus sollicitudin, sit amet consequat tortor iaculis.
      </motion.p>
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            className="member-card text-center p-4 rounded-lg bg-white shadow-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-72 h-72 object-cover rounded-full"
            />
            <h3 className="font-bold mt-4 px-10 font-title text-bodyAlt">{member.name}</h3>
            <p className="text-bodySmall mb-6 px-14 font-body italic">{member.title}</p>
            <p className="text-bodySmall px-16 font-body">{member.role}</p>
            <div className="mt-10 flex justify-center space-x-4">
              {/* Mail link */}
              <a href={`mailto:${member.mail}`} aria-label="Send en mail">
                <img
                  src={MailIkon}
                  alt="Mail icon"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              {/* LinkedIn link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profil"
              >
                <img
                  src={LinkedinIkon}
                  alt="LinkedIn icon"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BestyrelseSection;
