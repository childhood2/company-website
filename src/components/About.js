import React, { useEffect } from "react";

const pedegasLogo = process.env.PUBLIC_URL + "/experience/pedegas.png";
const giftsqrLogo = process.env.PUBLIC_URL + "/experience/giftsqr.png";
const tsuruChatLogo = process.env.PUBLIC_URL + "/experience/chatsuru.png";
const bankAwsLogo = process.env.PUBLIC_URL + "/experience/bank-aws.png";

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
    id: "tsuruchat",
    name: "Tsuru Chat",
    logo: tsuruChatLogo,
    description:
      "Tsuru Chat delivers automation and integrations for messaging platforms.",
    metrics: [
      { value: "•", label: "Built bots and crawlers with Node.js, Python, Puppeteer." },
      { value: "•", label: "Developed APIs for WhatsApp, Instagram, Facebook." },
      { value: "•", label: "Reduced external API usage by 70%." },
    ],
    linkUrl: "https://app.tsuru.chat/?utm_source=chatgpt.com",
    linkText: "Open Tsuru Chat",
  },
  {
    id: "bankaws",
    name: "Bank & AWS",
    logo: bankAwsLogo,
    description:
      "Cloud and microservices delivery for banking.",
    metrics: [
      { value: "•", label: "Automated microservices to reduce AWS costs (-20%)." },
      { value: "•", label: "Monitoring with Grafana, Prometheus." },
    ],
    linkUrl: "https://www.bb.com.br/",
    linkText: "Visit BB",
  },
];

function About({ embedded }) {
  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

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
        <ul className="about__experienceList">
          {EXPERIENCE_PROJECTS.map((proj) => (
            <li key={proj.id} className="about__experienceItem">
              <div className="about__experienceItemContent">
                <h3 className="about__experienceItemTitle">
                  <a
                    href={proj.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__experienceItemTitleLink"
                  >
                    {proj.name}
                  </a>
                </h3>
                <p className="about__experienceItemDesc">{proj.description}</p>
                <div className="about__experienceMetrics">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="about__experienceMetric">
                      <span className="about__experienceMetricValue">{m.value}</span>
                      <span className="about__experienceMetricLabel">{m.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={proj.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__experienceLink"
                >
                  {proj.linkText} →
                </a>
              </div>
              <div className="about__experienceItemImage">
                <a
                  href={proj.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__experienceItemImageLink"
                >
                  <img src={proj.logo} alt={proj.name} className="about__experienceItemImg" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default About;
