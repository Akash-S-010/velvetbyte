import React from "react";

const clients = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-white mb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Trusted By Leading
          <br />
          <span className="text-primary">Companies</span>
        </h2>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
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
