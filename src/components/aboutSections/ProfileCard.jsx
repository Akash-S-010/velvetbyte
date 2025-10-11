import React from "react";
import { FaLinkedin,  FaWhatsapp } from "react-icons/fa";
const ProfileCard = () => {
  const profiles = [
    {
      avatarUrl:
        "https://placehold.co/100x100/10b981/ffffff?text=A",
      name: "Arjun",
      title: "C E O",
      bio: "The CEO of the company",
      linkedinUrl: "https://linkedin.com/in/ravi-katiyar",
      whatsappUrl: "https://wa.me/911234567890",
      tools: ["Figma", "Framer", "Adobe XD"],
    },
    {
      avatarUrl: "https://placehold.co/100x100/10b981/ffffff?text=A",
      name: "Vishak",
      title: "C T O",
      bio: "The CTO of the company",
      linkedinUrl: "https://linkedin.com/in/anita-sharma",
      whatsappUrl: "https://wa.me/919876543210",
      tools: ["React", "Tailwind", "TypeScript"],
    },
    {
      avatarUrl: "https://placehold.co/100x100/6366f1/ffffff?text=K",
      name: "Akhil",
      title: "C O O",
      bio: "The COO of the company",
      linkedinUrl: "https://linkedin.com/in/karan-verma",
      whatsappUrl: "https://wa.me/919999999999",
      tools: ["React", "Tailwind", "TypeScript"],

    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-8 bg-background p-6 sm:p-10">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="relative w-full h-full  border border-primary/50 max-w-xs sm:max-w-sm overflow-hidden rounded-2xl  p-6 text-center transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
        >
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto mb-3 rounded-full border-2 border-primary/50 overflow-hidden">
            <img
              src={profile.avatarUrl}
              alt={`${profile.name}'s avatar`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/96x96/6366f1/white?text=${profile.name?.charAt(
                  0
                )}`;
              }}
            />
          </div>

          {/* Name & Title */}
          <h2 className="text-2xl font-semibold text-card-foreground">
            {profile.name}
          </h2>
          <p className="text-sm  text-primary font-medium mt-2">{profile.title}</p>

          {/* Bio */}
          <p className="mt-3 text-muted text-sm text-muted-foreground leading-relaxed">
            {profile.bio}
          </p>

          {/* Tools Section (only if tools provided) */}
          {profile.tools && profile.tools.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Tools & Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {profile.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/50 "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} className="text-gray-600 hover:text-blue-600 transition-colors"/>
              </a>
            )}

            {profile.whatsappUrl && (
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} className="text-gray-600 hover:text-green-600 transition-colors"/>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;