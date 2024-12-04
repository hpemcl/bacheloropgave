import React from "react";

const Newsletter = () => {
  // Funktionshåndtering for knappen
  const handleSubscription = () => {
    alert(
      "Tak fordi du tilmeldte dig vores nyhedsbrev! Du vil modtage en email med en bekræftelse."
    );
  };

  return (
    <section className="bg-white border-t-4 border-neutral pt-16 mb-16 shadow-lg">
      <div className="container mx-auto text-center px-4 md:px-8">
        {/* Titel */}
        <p className="font-body text-bodySmall text-black uppercase mb-2">
          Nyhedsbrev
        </p>
        <h2 className="font-title text-4xl font-bold mb-4">
          Tilmeld dig til vores nyhedsbrev
        </h2>
        <p className="font-body text-bodyMain text-gray-700 mb-8">
          Få de seneste nyheder, opdateringer og inspiration fra Sund By
          Netværket direkte i din indbakke. Tilmeld dig nu og vær blandt de
          første, der hører om vores kommende projekter og initiativer.
        </p>
        {/* Knappen */}
        <button
          onClick={handleSubscription}
          className="bg-primary text-white px-12 py-3 rounded-sm font-body text-btn2 font-semibold shadow-md hover:bg-secondary-light hover:text-black transition-colors"
        >
          Tilmeld dig nu
        </button>
      </div>

        {/* Baggrundsbølge */}
        <div className="relative mt-12 mb-0 shadow-lg rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full h-auto"
            >
                <path
                fill="#96C9E8"
                fillOpacity="1"
                d="M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,96C672,107,768,149,864,176C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    </section>
  );
};

export default Newsletter;
