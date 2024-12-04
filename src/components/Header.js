import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo_med_navn.png";
import menuIcon from "../assets/icons/Menu-icon.svg";
import closeMenuIcon from "../assets/icons/Close_menu-icon.svg";
import arrowIcon from "../assets/icons/Arrow.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Luk dropdown, hvis menuen lukkes
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Sund By Netværket" className="h-20 md:h-24 mr-4" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          {[
            { name: "Hjem", path: "/" },
            { name: "Temagrupper", path: "/temagrupper" },
            { name: "Metodeudvikling & innovation", path: "/metodeudvikling-og-innovation" },
            { name: "Partnerskaber", path: "/partnerskaber" },
            { name: "Materialer", path: "/materialer" },
            { name: "Kalender", path: "/kalender" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded font-body text-btn2 transition-transform duration-200 ${
                  isActive
                    ? "bg-[#0D3644] font-semibold text-white"
                    : "text-gray-800 hover:bg-[#0D3644] hover:text-white hover:scale-105"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dropdown for "Om os" */}
          <div className="relative group flex items-center cursor-pointer">
            <NavLink
              to="/om-os"
              className={({ isActive }) =>
                `px-3 py-2 rounded font-body text-btn2 transition-transform duration-200 flex items-center ${
                  isActive
                    ? "bg-[#0D3644] text-white font-semibold"
                    : "bg-white text-black hover:bg-[#0D3644] hover:text-white"
                }`
              }
            >
              Om os
              <img
                src={arrowIcon}
                alt="Dropdown arrow"
                className={`ml-2 h-4 w-4 transition-transform duration-200 transform ${
                  dropdownOpen ? "rotate-90 text-white" : "rotate-0 text-black"
                } group-hover:rotate-90 group-hover:text-white`}
              />
            </NavLink>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md group-hover:block hidden z-20">
              {[
                
                { name: "Organisation", path: "/om-os/organisation" },
                { name: "Medlemskab", path: "/om-os//medlemskab" },
                { name: "Samarbejdspartnere", path: "/om-os//samarbejdspartnere" },
                { name: "Strategi 2021-2030", path: "/om-os//strategi_2021_2030" },
                { name: "Vedtægter", path: "/om-os//vedtaegter" },
                { name: "WHO Healthy Crisis", path: "/om-os/who_healthy_crisis" },
              ].map((subLink) => (
                <NavLink
                  key={subLink.name}
                  to={subLink.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-gray-800 hover:bg-[#0D3644] hover:text-white ${
                      isActive ? "bg-[#0D3644] text-white font-semibold" : ""
                    }`
                  }
                >
                  {subLink.name}
                </NavLink>
              ))}
            </div>
          </div>



        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center z-30">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src={menuOpen ? closeMenuIcon : menuIcon}
              alt="Menu Icon"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col items-start p-6 space-y-4 overflow-y-auto"
          style={{ zIndex: 50 }}
        >
          {/* Logo and Close Button */}
          <div className="w-full flex justify-between items-center mb-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Sund By Netværket" className="h-16" />
            </NavLink>
            <button onClick={toggleMenu} className="focus:outline-none">
              <img src={closeMenuIcon} alt="Close Menu Icon" className="h-6 w-6" />
            </button>
          </div>

          {[
            { name: "Hjem", path: "/" },
            { name: "Temagrupper", path: "/temagrupper" },
            { name: "Metodeudvikling & innovation", path: "/metodeudvikling-og-innovation" },
            { name: "Partnerskaber", path: "/partnerskaber" },
            { name: "Materialer", path: "/materialer" },
            { name: "Kalender", path: "/kalender" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded text-left w-full ${
                  isActive
                    ? "bg-[#0D3644] text-white font-semibold"
                    : "text-gray-800 hover:bg-[#0D3644] hover:text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Dropdown for "Om os" */}
          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#0D3644] hover:text-white rounded flex justify-between items-center"
            >
              Om os
              <img
                src={arrowIcon}
                alt="Dropdown arrow"
                className={`h-4 w-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 space-y-2 px-6">
                {[
                  { name: "Organisation", path: "/om-os//organisation" },
                  { name: "Medlemskab", path: "/om-os//medlemskab" },
                  { name: "Samarbejdspartnere", path: "/om-os//samarbejdspartnere" },
                  { name: "Strategi 2021-2030", path: "/om-os//strategi_2021_2030" },
                  { name: "Vedtægter", path: "/om-os//vedtaegter" },
                  { name: "WHO Healthy Crisis", path: "/om-os//who_healthy_crisis" },
                ].map((subLink) => (
                  <li key={subLink.name}>
                    <NavLink
                      to={subLink.path}
                      className={({ isActive }) =>
                        `block text-gray-800 hover:bg-[#0D3644] hover:text-white rounded px-2 py-1 ${
                          isActive ? "bg-[#0D3644] text-white font-semibold" : ""
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {subLink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
