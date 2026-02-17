import React, { useEffect, useRef, useState } from "react";

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
  const [testimonialInView, setTestimonialInView] = useState(false);
  const experienceRef = useRef(null);
  const testimonialRef = useRef(null);
  const totalPages = Math.ceil(EXPERIENCE_PROJECTS.length / PROJECTS_PER_PAGE);
  const start = currentPage * PROJECTS_PER_PAGE;
  const projectsOnPage = EXPERIENCE_PROJECTS.slice(start, start + PROJECTS_PER_PAGE);

  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  // Testimonial quote: animate in every time user passes the section (scroll up or down)
  useEffect(() => {
    const el = testimonialRef.current;
    if (!el) return;
    let rafId = null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            rafId = requestAnimationFrame(() => {
              requestAnimationFrame(() => setTestimonialInView(true));
            });
          } else {
            setTestimonialInView(false);
          }
          break;
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

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
                  established in 2024, based in Brazil and
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

      <div className="about__testimonialWrapper">
        <section ref={testimonialRef} className={`about__testimonial${testimonialInView ? " about__testimonial--inView" : ""}`} aria-label="About Us">
          <div className="about__testimonialContent">
            <h2 className="about__testimonialTitle">Who We Are</h2>
            <div className="about__testimonialText">
              <p>
                Our journey began with a simple yet powerful principle: <strong>&ldquo;Delivering Superior Customer Satisfaction Through Top-Notch Services And Quality.&rdquo;</strong> Apollo Technology was established in 2024 by seasoned professionals based on technology development, sales, marketing, and first-rate customer service.
              </p>
              <p>
                The core principles of our success have been integrity, transparency, and dependability, values that our founders envisioned for our business. We combine industry-leading technologies with deep engineering expertise to build scalable microservices, cloud-native applications, AI-enabled platforms, and SaaS products that drive innovation, operational efficiency, and sustainable growth for our clients.
              </p>
              <p>
                We work closely with our clients as a long-term technology partner, adapting to their needs and ensuring that solutions remain reliable as their businesses grow. Our mission is to help organizations build and operate dependable software systems that support growth, efficiency, and innovation.
              </p>
            </div>
          </div>
          <div className="about__testimonialImageColumn">
            <div className="about__testimonialImageWrap">
              <img src={`${process.env.PUBLIC_URL}/1.png?v=3`} alt="Sóstenes Apollo, Founder" className="about__testimonialImage" />
            </div>
            <div className="about__testimonialQuoteBelow">
              <blockquote className="about__testimonialQuoteSmall">
                &ldquo;Continuously refining processes to deliver globally impactful products using best practices informed by client feedback.&rdquo;
              </blockquote>
              <p className="about__testimonialNameSmall">SÓSTENES APOLLO, Founder</p>
            </div>
          </div>
        </section>
      </div>

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
