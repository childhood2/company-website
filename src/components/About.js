import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      "PedeGás is a complete management system for gas distribution companies in Brazil. Apollo Tech Solutions helped deliver a scalable platform that includes financial control, inventory management, WhatsApp bot integration for orders, and an online catalog—enabling distributors to run their operations efficiently from a single system.",
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
      "Giftsqr is a platform for creating personalized digital surprises and generating QR codes to share them. Users can create relationship counters, birthday surprises, event photo galleries, gift lists, and more—with QR codes ready in under a minute. The platform has grown to serve thousands of users and gained traction on social media.",
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
      "BarterPH is a mobile app built to support free trading—helping farmers trade fresh goods for non-commercial items without spending money. Developed and launched in two months, the app is available to everyone for efficient, free trading. We continue to iterate based on user feedback to keep the platform free and useful.",
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

function About() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = EXPERIENCE_PROJECTS[selectedProject];

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1>About Us</h1>
            <p>
              Apollo Tech Solutions is an IT startup company
              founded in June 2019 based in the Philippines and Singapore and
              currently catering clients in the banking, retail and online
              retail industries.
            </p>
            <Link to="/contact-us">
              <input
                type="button"
                className="btn__blue"
                value="Contact Us   →"
              />
            </Link>
          </div>
          <img src={process.env.PUBLIC_URL + "/logo.png?v=apollo"} alt="About" className="home__jumboImg" />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="about__experience">
        <h2 className="about__experienceTitle">Smarter business. Real impact.</h2>
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

      <div className="app__jumbotronSmall about__sectionPanels">
        <div className="about__sectionItem">
          <h2>What We Do</h2>
          <p>
            We provide end-to-end software development and technology
            consulting services, including:
          </p>
          <ul>
            <li>SaaS product development and maintenance</li>
            <li>Cloud-native applications and microservices</li>
            <li>Payment systems and fintech platforms</li>
            <li>AI-enabled and data-driven solutions</li>
            <li>Web and mobile application development</li>
            <li>Cloud infrastructure, DevOps, and cost optimization</li>
          </ul>
          <p>
            Our technical expertise includes Python, Node.js, C#, AWS, GCP,
            Docker, Kubernetes, PostgreSQL, MySQL, Redis, Kafka, and modern
            frontend frameworks such as React, Next.js, and Vue.js.
          </p>
        </div>
        <div className="about__sectionItem">
          <h2>Our Approach</h2>
          <p>
            We follow a pragmatic and transparent development approach,
            focusing on clean architecture, scalability, security, and
            performance. Every project is handled with clear communication,
            structured processes, and a strong emphasis on quality and
            accountability.
          </p>
          <p>
            We work closely with our clients as a long-term technology partner,
            adapting to their needs and ensuring that solutions remain reliable
            as their businesses grow.
          </p>
        </div>
        <div className="about__sectionItem">
          <h2>Why Apollo Tech Solutions</h2>
          <ul>
            <li>8+ years of professional software development experience</li>
            <li>Strong expertise in cloud and distributed systems</li>
            <li>Proven experience with SaaS and fintech platforms</li>
            <li>Focus on scalable, maintainable, and secure solutions</li>
            <li>Clear communication and reliable delivery</li>
          </ul>
        </div>
        <div className="about__sectionItem">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help organizations build and operate dependable
            software systems that support growth, efficiency, and innovation.
            We aim to deliver technology solutions that are not only technically
            strong, but also aligned with business goals.
          </p>
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="about__stayConnected">
        <div className="about__stayConnectedLeft">
          <h2 className="about__stayConnectedTitle">Stay connected</h2>
          <div className="about__stayConnectedGraphic">
            <img
              src={process.env.PUBLIC_URL + "/experience/stay-connected.png"}
              alt=""
              width="320"
              height="auto"
            />
          </div>
        </div>
        <div className="about__stayConnectedRight">
          <h3 className="about__stayConnectedSubtitle">Apollo Tech Solutions newsletter</h3>
          <p className="about__stayConnectedDesc">
            Subscribe to stay on top of product updates, tech insights, and
            how we help businesses build reliable software.
          </p>
          <form
            className="about__stayConnectedForm"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              if (!email.trim()) {
                setEmailError("Email is required");
                return;
              }
              setEmailError("");
              // Placeholder: wire to your newsletter backend or Mailchimp etc.
            }}
          >
            <div className="about__stayConnectedField">
              <label htmlFor="about-newsletter-email">Business email</label>
              <input
                id="about-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onBlur={() => {
                  if (submitted && !email.trim()) setEmailError("Email is required");
                }}
                className={`about__stayConnectedInput ${emailError ? "about__stayConnectedInput--error" : ""}`}
                placeholder="you@company.com"
                autoComplete="email"
              />
              {emailError && (
                <span className="about__stayConnectedError">{emailError}</span>
              )}
            </div>
            <p className="about__stayConnectedPrivacy">
              You can unsubscribe at any time. We respect your privacy and
              will not share your email with third parties.
            </p>
            <button type="submit" className="about__stayConnectedSubmit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default About;
