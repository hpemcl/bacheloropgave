import React, { useEffect, useState } from "react";
import axios from "axios";

const LinkedInSection = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    // LinkedIn API-kald for at hente de nyeste opslag
    const fetchLinkedInPosts = async () => {
      try {
        const response = await axios.get(
          "https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:<YOUR_ORGANIZATION_ID>",
          {
            headers: {
              Authorization: `Bearer <YOUR_ACCESS_TOKEN>`,
            },
          }
        );
        // Gem det nyeste opslag
        setLatestPost(response.data.elements[0]);
      } catch (error) {
        console.error("Error fetching LinkedIn posts:", error);
      }
    };

    fetchLinkedInPosts();
  }, []);

  return (
    <section className="bg-primary-dark text-white py-16">
      <div className="container mx-auto flex flex-col gap-24 md:flex-row items-center justify-between px-4 md:px-8">
        {/* Tekst */}
        <div className="md:w-1/2">
          <h2 className="font-title text-4xl font-bold mb-4">Følg os på LinkedIn</h2>
          <div className="border-b-4 border-secondary-light w-12 mb-4"></div>
          <p className="font-body text-bodyMain mb-4">
            Hold dig opdateret med de seneste nyheder, projekter og initiativer fra Sund By Netværket.
          </p>
          <p className="font-body text-bodyMain mb-8">
            Ved at følge os på LinkedIn bliver du en del af et engageret fællesskab, hvor vi deler indsigt og erfaringer,
            der bidrager til at skabe sundere og mere bæredygtige bymiljøer.
          </p>
          <a
            href="https://www.linkedin.com/company/sund-by-netv%C3%A6rket/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-light text-black px-12 py-3 rounded-sm font-body text-btn2 font-semibold shadow-md hover:bg-primary hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* LinkedIn Post */}
        <div className="md:w-1/2 bg-gray-300 h-auto flex items-center justify-center rounded-md">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7261684403821539328"
            height="400"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="Indlejret indlæg"
            className="rounded-md w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
