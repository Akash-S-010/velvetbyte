import React from "react";
import "./ClientSection.css";

const clients = [
  { name: "Fullmoon", logo: "/images/client_logos/Fullmoon.jpg" },
  { name: "Selorae", logo: "/images/client_logos/Selorae.png" },
  { name: "Blacmelo", logo: "/images/client_logos/Blacmelo.png" },
  { name: "Vikriti", logo: "/images/client_logos/Vkriti.avif" },
  { name: "PureMed", logo: "/images/client_logos/Puremed.png" },
  { name: "Soda", logo: "/images/client_logos/SODA.png" },
];

// Duplicate logos for seamless infinite loop
const repeatedClients = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="bg-white mb-20 relative overflow-hidden py-4 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-6 md:mb-10 text-center">
          Trusted By Leading
          <br />
          <span className="text-primary">Companies</span>
        </h2>

        {/* Sliding Logo Container */}
        <div className="logos-container">
          <div className="logo-track">
            {repeatedClients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="logo-item cursor-pointer">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
