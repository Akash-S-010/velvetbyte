import React from "react";

const clients = [
  {
    name: "Fullmoon",
    logo: "/images/client_logos/Fullmoon.jpg",
  },
  {
    name: "Selorae",
    logo: "/images/client_logos/Selorae.png",
  },
  {
    name: "Blacmelo",
    logo: "/images/client_logos/Blacmelo.png",
  },
  {
    name: "Vikriti",
    logo: "/images/client_logos/Vikriti.avif",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-white mb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Trusted By Leading
          <br />
          <span className="text-primary">Companies</span>
        </h2>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:gap-x-14 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex justify-center grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="size-20 md:size-30 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
