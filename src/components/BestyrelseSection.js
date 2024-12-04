import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PlaceholderImage from "../assets/icons/Person_uden_ansigt_med_cirkel_lys.svg";
import MailIkon from "../assets/icons/Mail_v2.svg"; 
import LinkedinIkon from "../assets/icons/Linkedin_v2.svg";

const members = [
  {
    name: "Uffe Nymark Breum",
    title: "Forperson",
    role: "Vejle Kommune: Leder af Sundhedsfremme og forebyggelse",
    image: "/images/Uffe Nymark Breum.png",
    mail: "uffe.breum@example.com",
    linkedin: "https://www.linkedin.com/in/uffe-nymark-breum",
  },
  {
    name: "Marie Kolind Laustrup",
    title: "Næstforperson",
    role: "Odder Kommune: Forebyggelseskonsulent",
    image: "/images/Marie Kolind Laustrup.png",
    mail: "marie.laustrup@example.com",
    linkedin: "https://www.linkedin.com/in/marie-kolind-laustrup",
  },
  {
    name: "Ann Møller Gram",
    title: "Suppleant",
    role: "Tønder Kommune: Projektkoordinator",
    image: "/images/Ann Møller Gram.png",
    mail: "ann.gram@example.com",
    linkedin: "https://www.linkedin.com/in/ann-moller-gram",
  },
  {
    name: "Astrid Christine Jensen-Kanstrup",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Chefkonsulent | Center for Social og Sundhed",
    image: "/images/Astrid Christine Jensen-Kanstrup.png",
    mail: "astrid.kanstrup@example.com",
    linkedin: "https://www.linkedin.com/in/astrid-christine-kanstrup",
  },
  {
    name: "Hanne Vibjerg",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Chefkonsulent | Forebyggelse og Ulighed",
    image: "/images/Hanne Vibjerg.png",
    mail: "hanne.vibjerg@example.com",
    linkedin: "https://www.linkedin.com/in/hanne-vibjerg",
  },
  {
    name: "Katrine Schjønning",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Københavns Kommune: Folkesundhedschef",
    image: "/images/Katrine Schjønning.png",
    mail: "katrine.schjonning@example.com",
    linkedin: "https://www.linkedin.com/in/katrine-schjonning",
  },
  {
    name: "Mads Borgstrøm-Hansen",
    title: "Bestyrelsesmedlem",
    role: "Aalborg Kommune: Chef for Center for Sundhedsfremme",
    image: "/images/Mads Borgstrøm-Hansen.png",
    mail: "mads.hansen@example.com",
    linkedin: "https://www.linkedin.com/in/mads-borgstrom-hansen",
  },
  {
    name: "Marianne Stannum",
    title: "Bestyrelsesmedlem",
    role: "Egedel Kommune: fysioterapeut og forebyggelseskoordinator",
    image: "/images/Marianne Stannum.png",
    mail: "marianne.stannum@example.com",
    linkedin: "https://www.linkedin.com/in/marianne-stannum",
  },
  {
    name: "Martin Marchman Andersen",
    title: "Bestyrelsesmedlem, observatørstatus og associate Professor",
    role: "Associate Professor | National Institute of Public Health / SDU",
    image: "/images/Martin Marchman Andersen.png",
    mail: "martin.andersen@example.com",
    linkedin: "https://www.linkedin.com/in/martin-marchman-andersen",
  },
  {
    name: "Mia Linda Møller",
    title: "Suppleant",
    role: "Sorø Kommune: Leder af Sorø Sundhedscenter",
    image: "/images/Mia Linda Møller.png",
    mail: "mia.moller@example.com",
    linkedin: "https://www.linkedin.com/in/mia-linda-moller",
  },
  {
    name: "Thomas I. Jensen",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Centerchef | Center for Sundheds- og Socialpolitik",
    image: PlaceholderImage,
    mail: "thomas.jensen@example.com",
    linkedin: "https://www.linkedin.com/in/thomas-i-jensen",
  },
  {
    name: "Tine Curtis",
    title: "Bestyrelsesmedlem, observatørstatus",
    role: "Leder af Center for Forebyggelse i Praksis hos KL og forskningschef i Aalborg Kommune for folkesundhed",
    image: PlaceholderImage,
    mail: "tine.curtis@example.com",
    linkedin: "https://www.linkedin.com/in/tine-curtis",
  },
];

const BestyrelseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center py-16 bestyrelse-section"
    >
      <h2 className="font-bold mb-4 font-title text-subtitle3">Bestyrelse</h2>
      <p className="text-black font-bodyMain">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl nisl. Integer facilisis mi
        ac risus sollicitudin, sit amet consequat tortor iaculis.
      </p>
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
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
              <a href={`mailto:${member.mail}`} aria-label="Send en mail">
                <img src={MailIkon} alt="Mail icon" className="w-6 h-6 hover:opacity-75" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profil"
              >
                <img src={LinkedinIkon} alt="LinkedIn icon" className="w-6 h-6 hover:opacity-75" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BestyrelseSection;

