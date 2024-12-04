import React, { useState, useEffect } from "react";
import axios from "axios";
import arrowIcon from "../assets/icons/arrow_down_darkblue.svg";

const themeGroups = [
  "Alkohol",
  "Dokumentation og evaluering",
  "Det gode seniorliv",
  "Faldforbyggelse",
  "Forebyggelse af overvægt",
  "Fysisk Aktivitet",
  "Kultur og sundhed",
  "Ledernetværket",
  "Mental sundhed",
  "Mænds sundhed",
  "Natur, udeliv og sundhedsfremme",
  "Seksuel sundhed",
  "Strategisk lokalsamfundsudvikling",
  "Styrket samarbejde mellem regioner og kommuner",
  "Sunde arbejdspladser",
  "Tobak",
  "WHO netværket",
  
];

const projectGroups = [
  "ABC for mental sundhed",
  "Alkoholkursus om tidlig opsporing",
  "Byens rum – livet mellem husene 2018-2020",
  "Hybridseminar og mental sundhed",
  "Krop og bevægelse i naturens rige",
  "Kulturens rige",
  "LAKS",
  "Naturens rige",
  "Naturfriske fællesskaber",
  "Netværk for fællesskabsagenter",
  "Netværk for innovationsagenter",
  "Nu er ansvaret dit ",
  "Overvægt og afstigmatisering – en formidlingsguide",
  "Rekruttering til evidensbaseret rygestop",
  "Rygestop på dit sprog",
  "Socio-økonomi",
  "Sundhedsfremme på erhvervs- og produktionsskoler",
  "Sundheds-konsekvensvurdering",
  "Sunde borgere – fra kommune til kommune",
];

const Materialer = () => {
  const [materials, setMaterials] = useState([]);
  const [groupedMaterials, setGroupedMaterials] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedMaterial, setExpandedMaterial] = useState(null);
  const [sortType, setSortType] = useState("newest");
  const [selectedType, setSelectedType] = useState("Temagrupper");
  const [selectedGroup, setSelectedGroup] = useState("Alle");

  useEffect(() => {
    // Hent materialer fra WordPress Media Library
    axios
      .get("http://localhost/bachelor/wp-json/wp/v2/media")
      .then((response) => {
        const formattedMaterials = response.data.map((media) => {
          // Bestem typen af medie
          let fileType = "Ukendt";
          if (media.media_type === "image") {
            fileType = "Billede";
          } else if (media.mime_type.includes("video")) {
            fileType = "Video";
          } else if (media.mime_type.includes("pdf")) {
            fileType = "PDF";
          }

          return {
            id: media.id,
            title: media.title.rendered,
            date: media.date,
            description: media.caption?.rendered || "Ingen beskrivelse tilgængelig",
            image: media.media_details?.sizes?.medium
              ? media.media_details.sizes.medium.source_url
              : media.source_url,
            type: fileType,
            link: media.source_url,
          };
        });

        // Gruppér materialer baseret på temagrupper eller projekter
        const grouped = (selectedType === "Temagrupper" ? themeGroups : projectGroups).reduce(
          (acc, group) => {
            acc[group] = formattedMaterials.filter(
              (material) =>
                material.title.toLowerCase().includes(group.toLowerCase()) ||
                material.description.toLowerCase().includes(group.toLowerCase())
            );
            return acc;
          },
          {}
        );

        setMaterials(formattedMaterials);
        setGroupedMaterials(grouped);
      })
      .catch((error) => console.error("Fejl ved hentning af materialer:", error));
  }, [selectedType]);

  // Håndter søgning
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Håndter sortering
  const handleSort = (type) => {
    setSortType(type);
    const sortedMaterials = [...materials].sort((a, b) => {
      if (type === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
    setMaterials(sortedMaterials);
  };

  // Toggle udvidet materiale
  const toggleMaterial = (id) => {
    setExpandedMaterial((prev) => (prev === id ? null : id));
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
          <h1 className="text-4xl font-bold mb-4 font-title">Materialer</h1>
          <p className="text-lg font-body">
            Lorem ipsum dolor sit amet consectetur. Porttitor nibh vel vulputate facilisi.
          </p>
        </div>
      </div>

    {/* Filter Section */}
    <div className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 my-4 px-4 md:px-1">
    <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className={`border border-gray-300 px-4 py-3 mx-2 w-full sm:w-3/4 md:w-4/12 font-body rounded-sm ${
        selectedType ? "bg-primary-dark text-white" : "bg-white text-gray-800"
        }`}
    >
        <option value="Temagrupper">Temagrupper</option>
        <option value="Projekter">Metodeudvikling og innovation</option>
    </select>
    <select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
        className={`border border-gray-300 px-4 py-3 mx-2 w-full sm:w-3/4 md:w-4/12 font-body rounded-sm ${
        selectedGroup !== "Alle" ? "bg-primary-dark text-white" : "bg-white text-gray-800"
        }`}
    >
        <option value="Alle">Alle</option>
        {(selectedType === "Temagrupper" ? themeGroups : projectGroups).map((group) => (
        <option key={group} value={group}>
            {group}
        </option>
        ))}
    </select>
    <input
        type="text"
        placeholder="Søg"
        value={searchQuery}
        onChange={handleSearch}
        className="border border-gray-300 px-4 rounded-sm py-3 mx-2 w-full sm:w-3/4 md:w-3/12 font-body"
    />
    </div>

        {/* Material List per Group */}
        {Object.keys(groupedMaterials).map((group) => {
            if (selectedGroup !== "Alle" && selectedGroup !== group) return null;
            return (
                <div key={group} className="mb-12 px-8 md:px-24 py-5">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-title">{group}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {groupedMaterials[group].length > 0 ? (
                    groupedMaterials[group]
                        .filter((material) =>
                        material.title.toLowerCase().includes(searchQuery)
                        )
                        .map((material) => (
                        <div
                            key={material.id}
                            className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => toggleMaterial(material.id)}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                            {material.type === "Billede" && (
                                <img
                                src={material.image}
                                alt={material.title}
                                className="w-full md:w-1/3 object-contain"
                                />
                            )}
                            {material.type === "Video" && (
                                <video
                                src={material.link}
                                className="w-full md:w-1/3 object-contain"
                                controls
                                />
                            )}
                            <div className="p-4 text-center md:text-left w-full md:w-2/3">
                                <h3 className="text-xl font-bold mb-2 font-title">{material.title}</h3>
                                <p className="text-gray-600 text-sm font-body">
                                {new Date(material.date).toLocaleDateString()}
                                </p>
                                <hr className="my-2 w-10 border-2 rounded border-primary-dark mx-auto md:mx-0" />
                                <p className="text-gray-700 font-body">
                                  {material.description.replace(/<\/?[^>]+(>|$)/g, "").length > 75
                                    ? `${material.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 75)}...`
                                    : material.description.replace(/<\/?[^>]+(>|$)/g, "")}
                                </p>

                            </div>
                            <img
                                src={arrowIcon}
                                alt="Arrow Icon"
                                className={`w-5 h-5 mb-5 md:mb-0 mr-5 md:mr-10 ml-auto transition-transform ${
                                expandedMaterial === material.id ? "rotate-180" : ""
                                }`}
                            />
                            </div>
                            {expandedMaterial === material.id && (
                            <div className="bg-white p-4">
                                <div
                                className="grid gap-4"
                                style={{
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                }}
                                >
                                <a
                                    href={material.link}
                                    className="block text-center font-body text-[#0D3644] font-semibold border border-gray-300 py-2 px-4 rounded hover:bg-[#0D3644] hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download materiale
                                </a>
                                </div>
                            </div>
                            )}
                        </div>
                        ))
                    ) : (
                    <p className="text-center text-gray-600 font-body body-medium">
                        Der er ikke blevet uploaded materiale - bare rolig, det kommer.
                    </p>
                    )}
                </div>
                </div>
            );
        })}


    </section>
  );
};

export default Materialer;
