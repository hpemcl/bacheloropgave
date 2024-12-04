import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LongArrow from '../assets/icons/short_arrow_white.svg';
import LogoUdenNavn from '../assets/images/Logo_uden_navn.png';

const Temagrupper = () => {
  const [temagroups, setTemagroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Hent data fra backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/temagroups') // API-endpoint fra din backend
      .then((response) => {
        setTemagroups(response.data); // Gem data i state
      })
      .catch((error) => {
        console.error('Error fetching temagroups:', error);
      });
  }, []);

  const handleCardClick = (group) => {
    setSelectedGroup(group);
  };

  const handleClosePopup = () => {
    setSelectedGroup(null);
  };

  return (
    <section className="pb-16 bg-white">
      {/* Header Image Section */}
      <div className="relative mb-16">
        <img
            src={`${process.env.PUBLIC_URL}/temagrupper_billeder/Temagruppe_billede.JPG`}
            alt="Header Background"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center py-24 bg-black bg-opacity-50">
            <h1 className="text-subtitle1 font-bold text-white mb-4 font-title">Temagrupper</h1>
            <p className="text-bodyAlt text-gray-200 font-body">
            Lorem ipsum dolor sit amet consectetur. Porttitor nibh vel vulputate facilisi.
            </p>
        </div>
        </div>

      {/* Temagroup Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
        {temagroups.map((group) => (
          <div
          key={group.id}
          className="relative cursor-pointer overflow-hidden rounded-lg group bg-white shadow-lg"
          onClick={() => handleCardClick(group)}
        >
          {/* Title and Est (Visible until hover) */}
          <div className="absolute bg-black bg-opacity-40 inset-0 flex flex-col justify-center items-center text-center p-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-bodySmall text-white font-body">Est. {group.est}</p>
            <h2 className="text-subtitle3 leading-tight font-bold text-white mb-2 font-title">{group.title}</h2>
            
          </div>
        
          {/* Background Image */}
          <img
            src={group.image_url}
            alt={group.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />

        
          {/* Overlay Content (Visible on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-start p-4">
            <h2 className="text-subtitle3 font-bold text-white mb-2 font-title">{group.title}</h2>
            <p className="text-bodyMain text-gray-200 mb-4 font-body">{group.description}</p>
            <button className="flex items-center text-white mt-8 text-btn2 hover:text-black font-body">
              Kontakt temagruppen <img src={LongArrow} alt="Arrow" className="ml-2" />
            </button>
          </div>
        </div>        
        
        ))}
      </div>

        {/* Popup Modal */}
        {selectedGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-8 rounded-lg w-full max-w-3xl relative">
            <button className="absolute top-4 right-4 text-3xl font-bold font-body" onClick={handleClosePopup}>
                &times;
            </button>
            <h2 className="text-3xl font-bold mb-2 font-title">{selectedGroup.title}</h2>
            <p className="mb-2 font-body">Kontakt temagruppen om {selectedGroup.title} enkeltvis eller samlet</p>
            <div className="w-12 h-1 bg-black mb-10"></div>

            {/* Individuelle kontakter */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {selectedGroup.contacts.map((contact, index) => (
                <div key={index} className="bg-secondary-lighter p-4 rounded-sm shadow">
                    <p className="font-semibold text-bodyAlt font-body">{contact.name}</p>
                    <p className="pb-1 text-bodySmall italic font-body">{contact.company}</p>
                    <p>{contact.email}</p>
                    <button
                    className="mt-10 bg-transparent font-body border border-primary-dark text-primary-dark px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border-white"
                    onClick={() => (window.location.href = `mailto:${contact.email}`)}
                    >
                    Kontakt {contact.name}
                    </button>
                </div>
                ))}
            </div>

            {/* Kontakt alle knap */}
            {selectedGroup.contacts.length > 0 && (
                <button
                className="font-body mt-10 bg-primary-dark text-white px-4 py-2 rounded-md hover:bg-black hover:text-white text-btn2"
                onClick={() => {
                    const allEmails = selectedGroup.contacts.map((contact) => contact.email).join(',');
                    window.location.href = `mailto:${allEmails}`;
                }}
                >
                Kontakt alle
                </button>
            )}

            {/* Logo in bottom-right corner */}
            <img
                src={LogoUdenNavn}
                alt="Logo"
                className="absolute bottom-4 right-4 w-16 h-16 opacity-80"
            />
            </div>
        </div>
        )}


    </section>
  );
};

export default Temagrupper;
