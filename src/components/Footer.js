import React from "react";
import addressIcon from "../assets/icons/Addresse.svg";
import phoneIcon from "../assets/icons/Phone.svg";
import emailIcon from "../assets/icons/Mail.svg";
import logo from "../assets/images/Logo_med_navn.png";
import arrowIcon from "../assets/icons/Long_arrow.svg";
import linkedin from "../assets/icons/Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary-lighter text-black py-10">
        <div className="flex justify-center px-4 md:mx-28 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-40 text-center md:text-left max-w-7xl w-full">
            {/* Om os */}
            <div>
              <div className="mb-4">
                <h4 className="font-title text-subtitle2 uppercase font-extrabold">Om os</h4>
                <div className="border-b-4 border-[#306b8d] w-8 mx-auto md:mx-0 mt-1"></div>
              </div>
              <p className="font-body max-w-xs mx-auto md:mx-0">
                Siden 1991 har Sund By Netværket været et aktivt medlem af WHO's Healthy Cities
                Network og er nu et af de største nationale netværk i dette globale fællesskab.
                <br />
                <br />
                Som medlem får din kommune/region værdifulde muligheder for at styrke det lokale
                folkesundhedsarbejde. Dog afhænger netværkets styrke af dets medlemmer.
              </p>
              <a
                href="https://sund-by-net.dk/who-healthy-cities/"
                className="flex items-center font-body justify-center md:justify-start text-primary underline mt-4 hover:text-primary-light transition-colors"
              >
                Læs mere om WHO <img src={arrowIcon} alt="Arrow" className="h-4 w-4 ml-2" />
              </a>
              <img src={logo} alt="Sund By Netværket Logo" className="mt-4 mx-auto md:mx-0" />
            </div>

            {/* Kontakt os */}
            <div>
              <div className="mb-4">
                <h4 className="font-title text-subtitle2 uppercase font-extrabold">Kontakt os</h4>
                <div className="border-b-4 border-[#306b8d] w-8 mx-auto md:mx-0 mt-1"></div>
              </div>
              <ul className="space-y-4 font-body">
                <li className="flex items-start justify-center md:justify-start">
                  <img src={addressIcon} alt="Address Icon" className="h-6 w-6 mr-4" />
                  <p>Weidekampsgade 10, 2300 København S</p>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <img src={phoneIcon} alt="Phone Icon" className="h-6 w-6 mr-4" />
                  <p>+45 33 70 33 75</p>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <img src={emailIcon} alt="Email Icon" className="h-6 w-6 mr-4" />
                  <a
                    href="mailto:post@sundbynetvaerket.dk"
                    className="text-primary underline hover:text-primary-light transition-colors"
                  >
                    post@sundbynetvaerket.dk
                  </a>
                </li>
              </ul>
            </div>

            {/* Følg os */}
            <div>
              <div className="mb-4">
                <h4 className="font-title text-subtitle2 uppercase font-extrabold">Følg os</h4>
                <div className="border-b-4 border-[#306b8d] w-8 mx-auto md:mx-0 mt-1"></div>
              </div>
              <ul className="space-y-4 font-body">
                <li className="flex items-start justify-center md:justify-start">
                  <img src={linkedin} alt="LinkedIn Icon" className="h-6 w-6 mr-4" />
                  <a
                    href="#"
                    className="text-primary underline hover:text-primary-light transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

        {/* Footer bottom (full-width div) */}
        <div className="bg-secondary-lighter border-t-2 border-[#306b8d] w-full">
          <div className="flex flex-col items-center justify-center py-4 px-4 md:flex-row md:justify-between md:px-16">
            <p className="text-primary-dark font-body mb-2 md:mb-0">© 2024 Sund By Netværket</p>
            <a
              href="https://linktr.ee/hannahpemclausen"
              className="text-primary-dark font-body hover:text-primary-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed af Hannah Clausen
            </a>
          </div>
        </div>

    </>
  );
};

export default Footer;
