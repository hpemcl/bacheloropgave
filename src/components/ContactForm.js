import React, { useEffect, useState } from "react";
import axios from "axios";

const MembershipSection = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "http://localhost/bachelor/wp-json/wp/v2/posts?slug=bliv-medlem-nu"
        );
        if (response.data && response.data.length > 0) {
          setContent(response.data[0].content.rendered);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <section className="bg-primary-dark py-16 mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Section - Text and Form */}
          <div className="md:w-1/2 bg-white text-gray-900 p-10 rounded-lg shadow-lg">
            <h2 className="font-title text-4xl font-bold mb-6 text-center text-primary-dark">
              Bliv medlem nu
            </h2>
            <p className="font-body text-bodyMain text-gray-700 mb-8 text-center">
              Tag del i Sund By Netværket og vær med til at fremme sundhed og trivsel i bymiljøer. Udfyld dine oplysninger, og bliv en del af vores engagerede fællesskab i dag.
            </p>
            <div
              className="text-left"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>

          {/* Right Section - Placeholder Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-full h-64 md:h-80 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
              <p className="text-gray-600 font-body">Billedeplads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
