import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  const profiles = [
    {
      avatarUrl: "/images/crew/Arjun.png",
      name: "Arjun",
      title: "C E O",
      bio: "The Chief Executive Officer of the company",
      linkedinUrl: "https://www.linkedin.com/in/arjunworks96/",
      tools: ["Shopify", "WordPress", "React"],
    },
    {
      avatarUrl: "https://placehold.co/100x100/10b981/ffffff?text=V",
      name: "Visakh",
      title: "C T O",
      bio: "The Chief Technical Officer of the company",
      linkedinUrl: "https://www.linkedin.com/in/visakh-ck/",
      tools: ["Shopify", "WordPress", "React"],
    },
    {
      avatarUrl: "/images/crew/Akhil.png",
      name: "Akhil Das",
      title: "C O O",
      bio: "The Chief Operating Officer of the company",
      linkedinUrl: "https://linkedin.com/in/karan-verma",
      tools: ["Photoshop", "Illustrator", "Coreldraw"],
    },
    {
      avatarUrl: "/images/crew/Gopika.jpeg",
      name: "Gopika K G",
      title: "Social Media Head",
      bio: "Digital marketer who specialize in SEO, Google Ads, and social media marketing to build brand visibility and drive real results.",
      linkedinUrl: "https://www.linkedin.com/in/gopika-k-g-5b057b2a5/",
      tools: ["SMM", "SEM", "B2B", "B2C"],
    },
    {
      avatarUrl: "/images/crew/Jumaila.jpeg",
      name: "Jumaila M",
      title: "Social Media Executive",
      bio: "Digital marketer who specialize in SEO, Google Ads, and social media marketing to build brand visibility and drive real results.",
      linkedinUrl: "https://www.linkedin.com/in/jumaila-marketing/",
      tools: ["SMM", "SEO", "Google Ads"],
    },
    {
      avatarUrl: "/images/crew/Abi.jpeg",
      name: "Abhinav",
      title: "Graphic Designer",
      bio: "Graphic Designer who specialize in creating visually stunning and engaging designs that communicate your brand's message effectively.",
      linkedinUrl: "https://www.linkedin.com/in/jumaila-marketing/",
      tools: ["Photoshop", "Illustrator"],
    },
    {
      avatarUrl: "/images/crew/Dhanya.jpeg",
      name: "Dhanya K P",
      title: "Social Media Executive",
      bio: "Digital marketer who creating and executing effective online strategies, helping brands expand their reach and achieve their objectives.",
      linkedinUrl: "https://www.linkedin.com/in/dhanya-k-p-3ba63a363/",
      tools: ["SMM", "Content Creation", "SEO"],
    },
    {
      avatarUrl: "/images/crew/Rubitha.jpeg",
      name: "Rubitha T A",
      title: "Graphic Designer",
      bio: "Graphic Designer who specialize in creating visually stunning and engaging designs that communicate your brand's message effectively.",
      linkedinUrl: "https://www.linkedin.com/in/dhanya-k-p-3ba63a363/",
      tools: ["Photoshop", "Illustrator"],
    },
    {
      avatarUrl: "/images/crew/Shaija.jpeg",
      name: "Shaija Karunakaran",
      title: "Digital Marketer",
      bio: "Digital marketer who specialize in SEO, Google Ads, and social media marketing to build brand visibility and drive real results.",
      linkedinUrl: "https://www.linkedin.com/in/shaija-karunakaran-1b2624136/",
      tools: ["Content Creation", "SEO", "Email Marketing"],
    },
    {
      avatarUrl: "/images/crew/Reshma.jpeg",
      name: "Reshma Sam",
      title: "Full Stack Developer",
      bio: "Full stack developer, crafting seamless web solutions with expertise in frontend and backend Technologies.",
      linkedinUrl: "https://www.linkedin.com/in/reshma-vijayan-sr/",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Akash.jpeg",
      name: "Akash S",
      title: "Frontend Developer",
      bio: "Creative frontend developer, designing stunning UIs, collaborating with backend for seamless integration.",
      linkedinUrl: "https://www.linkedin.com/in/akash-s-mahe/",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Anshifa.png",
      name: "Anshifa",
      title: "Full Stack Developer",
      bio: "Full stack developer, crafting seamless web solutions with expertise in frontend and backend Technologies.",
      linkedinUrl: "https://www.linkedin.com/in/",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Rifa.jpeg",
      name: "Rifa Rouf",
      title: "Graphic Designer & Video Editor",
      bio: "Graphic designer and video editor, crafting stunning visuals and engaging content for brands and campaigns.",
      linkedinUrl: "https://www.linkedin.com/in",
      tools: ["Photoshop", "Illustrator", "Premiere Pro"],
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-8 bg-background p-6 sm:p-10">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl bg-white border border-primary/40 shadow-md hover:shadow-xl cursor-pointer transition duration-300 ease-in-out"
        >
          {/* 🔹 Top section with background image */}
          <div
            className="relative h-24 bg-cover bg-right"
            style={{
              backgroundImage: `url("/images/crew/profile_background.png")`,
            }}
          >
            {/* 🔹 Avatar positioned bottom-left, overlapping the banner */}
            <div className="absolute left-6 bottom-[-2.5rem] w-20 h-20 rounded-full border-2 border-primary/50 overflow-hidden shadow-lg">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name}'s avatar`}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/96x96/ffffff/000?text=${profile.name?.charAt(
                    0
                  )}`;
                }}
              />
            </div>
          </div>
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="absolute top-27 right-4 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          )}

          {/* 🔹 Bottom content section (left-aligned) */}
          <div className="pt-14 pb-6 px-6 text-black text-left">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-primary font-semibold mt-1">
              {profile.title}
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {profile.bio}
            </p>

            {profile.tools?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Tools & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 border border-primary/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
