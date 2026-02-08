import React, { useEffect, useState } from "react";
import barterphLogo from "../assets/our_craft/barter_ph.png";
import planetreviewsLogo from "../assets/our_craft/planet_reviews.png";

const pedegasLogo = process.env.PUBLIC_URL + "/experience/pedegas.ico";
const giftsqrLogo = process.env.PUBLIC_URL + "/experience/giftsqr.ico";

const EXPERIENCE_PROJECTS = [
  {
    id: "pedegas",
    name: "PedeGás",
    logo: pedegasLogo,
    description:
      "PedeGás is a complete management system for gas distribution companies in Brazil. Apollo Technology helped deliver a scalable platform that includes financial control, inventory management, WhatsApp bot integration for orders, and an online catalog, enabling distributors to run their operations efficiently from a single system.",
    metrics: [
      { value: "24/7", label: "support and system availability" },
      { value: "1", label: "unified platform for finance, inventory & orders" },
    ],
    linkUrl: "https://www.pedegas.com",
    linkText: "Visit PedeGás",
  },
  {
    id: "giftsqr",
    name: "Giftsqr",
    logo: giftsqrLogo,
    description:
      "Giftsqr is a platform for creating personalized digital surprises and generating QR codes to share them. Users can create relationship counters, birthday surprises, event photo galleries, gift lists, and more, with QR codes ready in under a minute. The platform has grown to serve thousands of users and gained traction on social media.",
    metrics: [
      { value: "1 min", label: "to generate a personalized QR surprise" },
      { value: "8,590+", label: "users and growing" },
    ],
    linkUrl: "https://www.giftsqr.com",
    linkText: "Visit Giftsqr",
  },
  {
    id: "barterph",
    name: "BarterPH",
    logo: barterphLogo,
    description:
      "BarterPH is a mobile app built to support free trading, helping farmers trade fresh goods for non-commercial items without spending money. Developed and launched in two months, the app is available to everyone for efficient, free trading. We continue to iterate based on user feedback to keep the platform free and useful.",
    metrics: [
      { value: "2", label: "months from concept to launch" },
      { value: "Free", label: "trading for everyone" },
    ],
    linkUrl: "https://play.google.com/store/apps/details?id=com.chamaeleon.barterapp",
    linkText: "Get BarterPH on Google Play",
  },
  {
    id: "planetreviews",
    name: "PlanetReviews",
    logo: planetreviewsLogo,
    description:
      "PlanetReviews is an in-development platform aimed at democratizing consumer reviews. The goal is to build a community of honest, reliable reviews so people can make better decisions and avoid wasting money on mediocre products and services. The ecosystem will reward contributors and help buyers find trustworthy information.",
    metrics: [
      { value: "100%", label: "focus on honest reviews" },
      { value: "Community", label: "driven and reward-based" },
    ],
    linkUrl: "https://www.theplanetreviews.com",
    linkText: "Learn about PlanetReviews",
  },
];

function About({ embedded }) {
  const [selectedProject, setSelectedProject] = useState(0);
  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  const project = EXPERIENCE_PROJECTS[selectedProject];

  return (
    <div>
      {!embedded && (
        <>
          <div className="app__jumbotron about__jumbotron">
            <div className="home__main">
              <div className="home__mainDesc">
                <h1>About Us</h1>
                <p>
                  Apollo Technology is an IT startup company
                  founded in June 2019 based in Brazil and
                  currently catering to clients in the banking, retail and online
                  retail industries.
                </p>
              </div>
              <img src={process.env.PUBLIC_URL + "/logo.png?v=3"} alt="About" className="home__jumboImg" />
            </div>
          </div>
          <div className="app__spacer"></div>
        </>
      )}

      <div className="about__experience">
        <h2 className="about__experienceTitle">Our projects</h2>
        <div className="about__experienceTabs">
          {EXPERIENCE_PROJECTS.map((proj, index) => (
            <button
              key={proj.id}
              type="button"
              className={`about__experienceTab ${index === selectedProject ? "about__experienceTab--active" : ""}`}
              onClick={() => setSelectedProject(index)}
              aria-pressed={index === selectedProject}
            >
              <img src={proj.logo} alt={proj.name} className="about__experienceTabLogo" />
            </button>
          ))}
        </div>
        <div className="about__experienceDetail">
          <h3 className="about__experienceDetailTitle">{project.name}</h3>
          <p className="about__experienceDetailDesc">{project.description}</p>
          <div className="about__experienceMetrics">
            {project.metrics.map((m, i) => (
              <div key={i} className="about__experienceMetric">
                <span className="about__experienceMetricValue">{m.value}</span>
                <span className="about__experienceMetricLabel">{m.label}</span>
              </div>
            ))}
          </div>
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about__experienceLink"
          >
            {project.linkText} →
          </a>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default About;
