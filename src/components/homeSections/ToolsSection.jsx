import React from "react";
import {
  FaWordpress,
  FaShopify,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaSearch,
  FaEnvelope,
  FaChartLine,
  FaGoogle,
  FaPaintBrush,
  FaImage,
  FaSwift,
  FaInstagram 
} from "react-icons/fa";
import { SiExpress, SiFlutter, SiKotlin } from "react-icons/si";

// Card Components
const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="rounded-lg border bg-gray-800 bg-opacity-70 text-white shadow-sm hover:shadow-xl hover:scale-[1.01] hover:border-gray-600 transition-all duration-300"
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex flex-col space-y-1.5 p-6" {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef((props, ref) => (
  <h3
    ref={ref}
    className="text-2xl font-semibold leading-none tracking-tight text-white"
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef((props, ref) => (
  <p ref={ref} className="text-sm text-gray-400" {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className="p-6 pt-0" {...props} />
));
CardContent.displayName = "CardContent";

const FeatureGrid = ({
  features,
  sectionTitle,
  sectionSubtitle,
  className,
}) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section
      className={`py-16 sm:py-24 bg-black text-white ${className}`}
      role="region"
      aria-label={sectionTitle ? `Expertise: ${sectionTitle}` : "Our Expertise"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(sectionTitle || sectionSubtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {sectionTitle && (
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p className="mt-4 text-lg text-gray-400">{sectionSubtitle}</p>
            )}
          </div>
        )}

        <div className="space-y-30" role="list">
          {/* Web Development */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Web Development
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((feature) =>
                  [
                    "wordpress",
                    "shopify",
                    "reactjs",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "htmlcss",
                  ].includes(feature.id)
                )
                .map((feature) => (
                  <Card
                    key={feature.id}
                    className="flex flex-col h-full p-4 bg-gray-500/20 rounded-xl"
                    role="listitem"
                  >
                    <CardHeader className="p-0 pb-3">
                      <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900 text-white border border-gray-950">
                        <feature.icon
                          className="h-6 w-6"
                          aria-hidden={true}
                        />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Digital Marketing
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((feature) =>
                  [
                    "seo",
                    "socialmedia",
                    "emailmarketing",
                    "contentmarketing",
                    "googleanalytics",
                    "googleads",
                  ].includes(feature.id)
                )
                .map((feature) => (
                  <Card
                    key={feature.id}
                    className="flex flex-col h-full p-4 bg-gray-500/20 rounded-xl"
                    role="listitem"
                  >
                    <CardHeader className="p-0 pb-3">
                      <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900 text-white border border-gray-950">
                        <feature.icon
                          className="h-6 w-6"
                          aria-hidden={true}
                        />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Graphic Design */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Graphic Design
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((feature) =>
                  ["photoshop", "illustrator", "branding"].includes(feature.id)
                )
                .map((feature) => (
                  <Card
                    key={feature.id}
                    className="flex flex-col h-full p-4 bg-gray-500/20 rounded-xl"
                    role="listitem"
                  >
                    <CardHeader className="p-0 pb-3">
                      <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900 text-white border border-gray-950">
                        <feature.icon
                          className="h-6 w-6"
                          aria-hidden={true}
                        />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Mobile App Development */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Mobile App Development
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter((feature) =>
                  ["reactnative", "flutter", "swift"].includes(feature.id)
                )
                .map((feature) => (
                  <Card
                    key={feature.id}
                    className="flex flex-col h-full p-4 bg-gray-500/20 rounded-xl"
                    role="listitem"
                  >
                    <CardHeader className="p-0 pb-3">
                      <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-gray-400 via-gray-600 to-gray-900 text-white border border-gray-950">
                        <feature.icon
                          className="h-6 w-6"
                          aria-hidden={true}
                        />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mockFeatures = [
  {
    id: "wordpress",
    icon: FaWordpress,
    title: "WordPress",
    description: "Custom solutions for dynamic website creation.",
  },
  {
    id: "shopify",
    icon: FaShopify,
    title: "Shopify",
    description: "Robust e-commerce platforms for online stores.",
  },
  {
    id: "htmlcss",
    icon: FaHtml5,
    title: "HTML5 & CSS3",
    description: "Stylish and responsive web design solutions.",
  },
  {
    id: "reactjs",
    icon: FaReact,
    title: "React.js",
    description: "Interactive UI development with modern frameworks.",
  },
  {
    id: "nodejs",
    icon: FaNodeJs,
    title: "Node.js",
    description: "Scalable backend development for applications.",
  },
  {
    id: "expressjs",
    icon: SiExpress,
    title: "Express.js",
    description: "Efficient web application framework support.",
  },
  {
    id: "mongodb",
    icon: FaDatabase,
    title: "MongoDB",
    description: "Flexible NoSQL database for data management.",
  },
  {
    id: "seo",
    icon: FaSearch,
    title: "SEO",
    description: "Boost visibility with optimized search rankings.",
  },
  {
    id: "socialmedia",
    icon: FaInstagram,
    title: "Social Media Marketing",
    description: "Drive engagement with effective social media strategies.",
  },
  {
    id: "emailmarketing",
    icon: FaEnvelope,
    title: "Email Marketing",
    description: "Engage audiences with targeted email campaigns.",
  },
  {
    id: "contentmarketing",
    icon: FaChartLine,
    title: "Content Marketing",
    description: "Create compelling content for brand growth.",
  },
  {
    id: "googleanalytics",
    icon: FaGoogle,
    title: "Google Analytics",
    description: "Track performance with detailed analytics tools.",
  },
  {
    id: "googleads",
    icon: FaGoogle,
    title: "Google Ads",
    description: "Drive traffic with effective ad campaigns.",
  },
  {
    id: "photoshop",
    icon: FaPaintBrush,
    title: "Adobe Photoshop",
    description: "Professional image editing and design tools.",
  },
  {
    id: "illustrator",
    icon: FaImage,
    title: "Adobe Illustrator",
    description: "Vector graphics for stunning visual designs.",
  },
  {
    id: "branding",
    icon: FaPaintBrush,
    title: "Branding",
    description: "Craft unique identities for your business.",
  },
  {
    id: "reactnative",
    icon: FaReact,
    title: "React Native",
    description: "Cross-platform mobile app development solutions.",
  },
  {
    id: "flutter",
    icon: SiFlutter,
    title: "Flutter",
    description: "Build beautiful apps with single codebase.",
  },
  {
    id: "swift",
    icon: FaSwift,
    title: "Swift (iOS)",
    description: "Native iOS app development with speed.",
  },
];

const ToolsSection = () => {
  return (
    <FeatureGrid
      features={mockFeatures}
      sectionTitle="Our Expertise"
      sectionSubtitle="Explore our diverse skill set and tools."
      className="border-t border-b"
    />
  );
};

export default ToolsSection;
