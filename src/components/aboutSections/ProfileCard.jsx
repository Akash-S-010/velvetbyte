import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
const ProfileCard = () => {
  const profiles = [
    {
      avatarUrl: "/images/crew/Arjun.png",
      name: "Arjun",
      title: "C E O",
      bio: "The Chief Executive Officer of the company",
      linkedinUrl: "https://www.linkedin.com/in/arjunworks96/",
      whatsappUrl: "https://wa.me/918921658090",
      tools: ["Shopify", "WordPress", "React"],
    },
    {
      avatarUrl: "/images/crew/Visak.png",
      name: "Visakh C K",
      title: "C T O",
      bio: "The Chief Technical Officer of the company",
      linkedinUrl: "https://www.linkedin.com/in/visakh-ck/",
      whatsappUrl: "https://wa.me/917025841398",
      tools: ["Shopify", "WordPress", "React"],
    },
    {
      avatarUrl: "https://placehold.co/100x100/6366f1/ffffff?text=K",
      name: "Akhil Das",
      title: "C O O",
      bio: "The Chief Operating Officer of the company",
      linkedinUrl: "https://linkedin.com/in/karan-verma",
      whatsappUrl: "https://wa.me/919539118807",
      tools: ["React", "Tailwind", "TypeScript"],
    },
    {
      avatarUrl: "/images/crew/Gopika.jpeg",
      name: "Gopika K G",
      title: "Social Media Head",
      bio: "Digital marketer who specialize in SEO, Google Ads, and social media marketing to build brand visibility and drive real results.",
      linkedinUrl: "https://www.linkedin.com/in/gopika-k-g-5b057b2a5/",
      whatsappUrl: "https://wa.me/",
      tools: ["SMM", "SEM", "B2B", "B2C"],
    },
    {
      avatarUrl: "/images/crew/Jumaila.jpeg",
      name: "Jumaila M",
      title: "Social Media Executive",
      bio: "Digital marketer who specialize in SEO, Google Ads, and social media marketing to build brand visibility and drive real results.",
      linkedinUrl: "https://www.linkedin.com/in/jumaila-marketing/",
      whatsappUrl: "https://wa.me/",
      tools: ["SMM", "SEO", "Google Ads"],
    },
    {
      avatarUrl: "/images/crew/Abi.jpeg",
      name: "Abhinav",
      title: "Graphic Designer",
      bio: "Graphic Designer who specialize in creating visually stunning and engaging designs that communicate your brand's message effectively.",
      linkedinUrl: "https://www.linkedin.com/in/jumaila-marketing/",
      whatsappUrl: "https://wa.me/",
      tools: ["SMM", "SEO", "Google Ads"],
    },
    {
      avatarUrl: "/images/crew/Dhanya.jpeg",
      name: "Dhanya K P",
      title: "Social Media Executive",
      bio: "Digital marketer who creating and executing effective online strategies, helping brands expand their reach and achieve their objectives.",
      linkedinUrl: "https://www.linkedin.com/in/dhanya-k-p-3ba63a363/",
      whatsappUrl: "https://wa.me/",
      tools: ["SMM", "Content Creation", "SEO"],
    },
    {
      avatarUrl: "/images/crew/Rubitha.jpeg",
      name: "Rubitha T A",
      title: "Graphic Designer",
      bio: "Graphic Designer who specialize in creating visually stunning and engaging designs that communicate your brand's message effectively.",
      linkedinUrl: "https://www.linkedin.com/in/dhanya-k-p-3ba63a363/",
      whatsappUrl: "https://wa.me/",
      tools: ["Photoshop", "Illustrator"],
    },
    {
      avatarUrl: "/images/crew/Shaija.jpeg",
      name: "Shaija Karunakaran",
      title: "Graphic Designer",
      bio: "Graphic Designer who specialize in creating visually stunning and engaging designs that communicate your brand's message effectively.",
      linkedinUrl: "https://www.linkedin.com/in/shaija-karunakaran-1b2624136/",
      whatsappUrl: "https://wa.me/",
      tools: ["Photoshop", "Illustrator"],
    },
    {
      avatarUrl: "/images/crew/Reshma.jpeg",
      name: "Reshma Sam",
      title: "Full Stack Developer",
      bio: "Full stack developer, crafting seamless web solutions with expertise in frontend and backend Technologies.",
      linkedinUrl: "https://www.linkedin.com/in/reshma-vijayan-sr/",
      whatsappUrl: "https://wa.me/",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Akash.jpeg",
      name: "Akash S",
      title: "Frontend Developer",
      bio: "Creative frontend developer, designing stunning UIs, collaborating with backend for seamless integration.",
      linkedinUrl: "https://www.linkedin.com/in/akash-s-mahe/",
      whatsappUrl: "https://wa.me/918606727349",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Anshifa.png",
      name: "Anshifa",
      title: "Full Stack Developer",
      bio: "Full stack developer, crafting seamless web solutions with expertise in frontend and backend Technologies.",
      linkedinUrl: "https://www.linkedin.com/in/",
      whatsappUrl: "https://wa.me/918606778787",
      tools: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      avatarUrl: "/images/crew/Rifa.jpeg",
      name: "Rifa Rouf",
      title: "Graphic Designer & Video Editor",
      bio: "Graphic designer and video editor, crafting stunning visuals and engaging content for brands and campaigns.",
      linkedinUrl: "https://www.linkedin.com/in",
      whatsappUrl: "https://wa.me/918600000000",
      tools: ["Photoshop", "Illustrator", "Premiere Pro"],
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
              className="w-full h-full object-cover object-top"
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
          <p className="text-sm  text-primary font-medium mt-2">
            {profile.title}
          </p>

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
                <FaLinkedin
                  size={30}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                />
              </a>
            )}

            {profile.whatsappUrl && (
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp
                  size={30}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
