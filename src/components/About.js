import React, { useEffect, useRef, useState } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import BuildIcon from "@material-ui/icons/Build";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CodeIcon from "@material-ui/icons/Code";
import SendIcon from "@material-ui/icons/Send";

const PROJECTS_PER_PAGE = 3;

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
  const [currentPage, setCurrentPage] = useState(0);
  const experienceRef = useRef(null);
  const totalPages = Math.ceil(EXPERIENCE_PROJECTS.length / PROJECTS_PER_PAGE);
  const start = currentPage * PROJECTS_PER_PAGE;
  const projectsOnPage = EXPERIENCE_PROJECTS.slice(start, start + PROJECTS_PER_PAGE);

  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  // Keep "Our projects" in view when changing page (avoids scroll jumping to Our Expertise)
  useEffect(() => {
    if (experienceRef.current && totalPages > 1) {
      experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage, totalPages]);

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
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="About" className="home__jumboImg" />
            </div>
          </div>
          <div className="app__spacer"></div>
        </>
      )}

      <section className="about__testimonial" aria-label="Testimonial">
        <blockquote className="about__testimonialQuote">
          &ldquo;We continuously refine our processes. To be able to deliver products with impact on a global scale, we rely on best practices that we personalize taking into consideration feedback from our clients and our team members.&rdquo;
        </blockquote>
        <div className="about__testimonialAttribution">
          <p className="about__testimonialName">SÓSTENES APOLLO</p>
        </div>
      </section>

      <div className="app__spacer" />

      <section className="about__howWeDoIt" aria-label="How We Do It">
        <h2 className="about__howWeDoItTitle">How We Do It</h2>
        <p className="about__howWeDoItIntro">
          We combine technical knowledge with clear communication and trust. Here is how we work with you from idea to launch.
        </p>
        <ol className="about__howWeDoItSteps">
          <li className="about__howWeDoItStep">
            <span className="about__howWeDoItIconWrap" aria-hidden="true">
              <DescriptionIcon className="about__howWeDoItIcon" />
            </span>
            <div className="about__howWeDoItContent">
              <h3 className="about__howWeDoItHeading">Gathering Requirements</h3>
              <p className="about__howWeDoItDesc">
                What&apos;s the problem you want to solve? Who&apos;s your target audience? Together with our client we define the key elements, solution and design.
              </p>
            </div>
          </li>
          <li className="about__howWeDoItStep">
            <span className="about__howWeDoItIconWrap" aria-hidden="true">
              <BuildIcon className="about__howWeDoItIcon" />
            </span>
            <div className="about__howWeDoItContent">
              <h3 className="about__howWeDoItHeading">Product Design</h3>
              <p className="about__howWeDoItDesc">
                We work with Design Thinking Methodology and Double Diamond Framework in an agile workflow, focusing on user experience and best UX practices.
              </p>
            </div>
          </li>
          <li className="about__howWeDoItStep">
            <span className="about__howWeDoItIconWrap" aria-hidden="true">
              <AccountTreeIcon className="about__howWeDoItIcon" />
            </span>
            <div className="about__howWeDoItContent">
              <h3 className="about__howWeDoItHeading">Technical Assessment</h3>
              <p className="about__howWeDoItDesc">
                We research and decide the right blend of technologies to implement the solution. We propose a detailed software architecture and integrations with other systems.
              </p>
            </div>
          </li>
          <li className="about__howWeDoItStep">
            <span className="about__howWeDoItIconWrap" aria-hidden="true">
              <CodeIcon className="about__howWeDoItIcon" />
            </span>
            <div className="about__howWeDoItContent">
              <h3 className="about__howWeDoItHeading">Product Development</h3>
              <p className="about__howWeDoItDesc">
                We cover big data, powerful visualizations, AI, mobile, web, backend, cloud and infrastructure. Great user experience mixed with state of the art engineering to deliver the best software solution for your target audience in sprints that last 2 weeks.
              </p>
            </div>
          </li>
          <li className="about__howWeDoItStep">
            <span className="about__howWeDoItIconWrap about__howWeDoItIconWrap--launch" aria-hidden="true">
              <SendIcon className="about__howWeDoItIcon" />
            </span>
            <div className="about__howWeDoItContent">
              <h3 className="about__howWeDoItHeading">Launch!</h3>
              <p className="about__howWeDoItDesc">
                We guarantee a high-quality product through automated and manual testing solutions. We can do stress/load testing to ensure high availability and we then automate the deployment process and deliver the software product to your users.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <div className="app__spacer" />

      <div ref={experienceRef} className="about__experience">
        <h2 className="about__experienceTitle">Our projects</h2>
        <ul className="about__experienceList">
          {projectsOnPage.map((proj) => (
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
        {totalPages > 1 && (
          <nav className="about__experiencePagination" aria-label="Our projects pagination">
            <button
              type="button"
              className="about__experiencePaginationBtn"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              Previous
            </button>
            <div className="about__experiencePaginationPages">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`about__experiencePaginationPage ${i === currentPage ? "about__experiencePaginationPage--current" : ""}`}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Page ${i + 1}`}
                  aria-current={i === currentPage ? "page" : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="about__experiencePaginationBtn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default About;
