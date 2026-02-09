import React, { useEffect, useState } from "react";
import iconAgile from "../assets/our_expertise/icon-agile.svg";
import iconAi from "../assets/our_expertise/icon-ai.svg";
import iconProduct from "../assets/our_expertise/icon-product.svg";
import iconDevops from "../assets/our_expertise/icon-devops.svg";
import iconConsulting from "../assets/our_expertise/icon-consulting.svg";
import iconCloud from "../assets/our_expertise/icon-cloud.svg";

const FAQ_ITEMS = [
  {
    question: "What We Do",
    answer: (
      <ul>
        <li>We deliver enterprise-grade, full-stack software solutions to organizations globally.</li>
        <li>We combine industry-leading and in-demand technologies with deep engineering expertise to build scalable microservices, cloud-native applications, AI-enabled platforms, and SaaS products that drive innovation, operational efficiency, and sustainable growth for our clients.</li>
      </ul>
    ),
  },
  {
    question: "Our Approach",
    answer: (
      <>
        <p>We follow a pragmatic and transparent development approach, focusing on clean architecture, scalability, security, and performance. Every project is handled with clear communication, structured processes, and a strong emphasis on quality and accountability.</p>
        <p>We work closely with our clients as a long-term technology partner, adapting to their needs and ensuring that solutions remain reliable as their businesses grow.</p>
      </>
    ),
  },
  {
    question: "Why Apollo Technology",
    answer: (
      <ul>
        <li>8+ years of professional software development experience</li>
        <li>Strong expertise in cloud and distributed systems</li>
        <li>Proven experience with SaaS and fintech platforms</li>
        <li>Focus on scalable, maintainable, and secure solutions</li>
        <li>Clear communication and reliable delivery</li>
      </ul>
    ),
  },
  {
    question: "Our Mission",
    answer: (
      <p>
        Our mission is to help organizations build and operate dependable software systems that support growth, efficiency, and innovation. We aim to deliver technology solutions that are not only technically strong, but also aligned with business goals.
      </p>
    ),
  },
];

function OurExpertise({ embedded }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  return (
    <div>
      {!embedded && (
        <>
          <div className="app__jumbotron">
            <div className="home__main">
              <div className="home__mainDesc">
                <h1>Our Expertise</h1>
              </div>
            </div>
          </div>
          <div className="app__spacer"></div>
        </>
      )}

      <div className="expertise">
        <h2 className="expertise__servicesTitle">Our expertise</h2>
        <div className="expertise__grid">
          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Backend &amp; Microservices</h3>
            <div className="expertise__cardIcon">
              <img src={iconAgile} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Node.js, TypeScript, Python, C#, NestJS, FastAPI, Django, Spring Boot; REST &amp; GraphQL APIs; scalable event-driven architectures with Kafka, RabbitMQ, Redis, PostgreSQL, MySQL, MongoDB.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Frontend &amp; Full-Stack Solutions</h3>
            <div className="expertise__cardIcon">
              <img src={iconAi} alt="" />
            </div>
            <p className="expertise__cardDesc">
              React, Next.js, Vue, Nuxt.js, Three.js for 3D web visualization, Material-UI, TailwindCSS, Zustand, Redux, TypeScript for type-safe, maintainable frontend applications.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Cloud &amp; DevOps</h3>
            <div className="expertise__cardIcon">
              <img src={iconProduct} alt="" />
            </div>
            <p className="expertise__cardDesc">
              AWS, GCP, Azure, Digital Ocean; Docker, Kubernetes, Terraform, GitHub Actions, CI/CD pipelines; monitoring &amp; observability with Prometheus, Grafana, ELK Stack.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">SaaS &amp; Digital Products</h3>
            <div className="expertise__cardIcon">
              <img src={iconDevops} alt="" />
            </div>
            <p className="expertise__cardDesc">
              End-to-end SaaS development for web and mobile platforms; subscription &amp; payment integration; AI/ML-powered dashboards and analytics; QR code and digital engagement tools.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Emerging Tech &amp; AI/ML</h3>
            <div className="expertise__cardIcon">
              <img src={iconConsulting} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Generative AI, NLP, computer vision, chatbots, automation tools, predictive analytics, and intelligent recommendation engines.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Remote Software Engineering</h3>
            <div className="expertise__cardIcon">
              <img src={iconCloud} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We work with businesses across APAC, EMEA, and the US, providing fully remote development services with strong collaboration across time zones. Our mission is to deliver reliable, scalable, and innovative software solutions that accelerate business growth and digital transformation.
            </p>
          </div>
        </div>

        <section className="expertise__customerSuccess" aria-label="Customer Success">
          <h2 className="expertise__customerSuccessTitle">Customer Success</h2>
          <p className="expertise__customerSuccessSubtitle">
            Trusted by leading organizations worldwide
          </p>
          <div className="expertise__customerSuccessLogos">
            <div className="expertise__customerSuccessItem">
              <div className="expertise__customerSuccessLogo" title="BairesDev">
                <img src={process.env.PUBLIC_URL + "/customer-success/bairesdev.svg"} alt="BairesDev" />
              </div>
              <p className="expertise__customerSuccessDesc">
                BairesDev: Developed and maintained microservices for Mastercard, Visa, and Amex with Node.js and C#.
              </p>
            </div>
            <div className="expertise__customerSuccessItem">
              <div className="expertise__customerSuccessLogo" title="Exomindset">
                <img src={process.env.PUBLIC_URL + "/customer-success/exomindset.png?v=2"} alt="Exomindset" />
              </div>
              <p className="expertise__customerSuccessDesc">
                Exomindset: Delivered scalable SaaS and digital solutions for clients worldwide.
              </p>
            </div>
            <div className="expertise__customerSuccessItem">
              <div className="expertise__customerSuccessLogo" title="NKey">
                <img src={process.env.PUBLIC_URL + "/customer-success/nkey.png?v=2"} alt="NKey" />
              </div>
              <p className="expertise__customerSuccessDesc">
                NKey: Led health platform development with Node.js and NestJS, supporting thousands of simultaneous connections.
              </p>
            </div>
            <div className="expertise__customerSuccessItem">
              <div className="expertise__customerSuccessLogo" title="GLOBAL HITSS">
                <img src={process.env.PUBLIC_URL + "/customer-success/global-hitss.png"} alt="GLOBAL HITSS" />
              </div>
              <p className="expertise__customerSuccessDesc">
                GLOBAL HITSS: Automated microservices for Bank of Brazil, reducing AWS costs by 20% with Grafana and Prometheus.
              </p>
            </div>
          </div>
        </section>

        <div className="app__spacer"></div>

        <div className="about__stayConnected">
          <h2 className="about__stayConnectedTitle">Stay connected</h2>
          <div className="about__stayConnectedLeft">
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
            <h3 className="about__stayConnectedSubtitle">Apollo Technology newsletter</h3>
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
              }}
            >
              <div className="about__stayConnectedField">
                <label htmlFor="expertise-newsletter-email">Business email</label>
                <input
                  id="expertise-newsletter-email"
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
                  placeholder="support@applotech.com"
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

        <div className="about__faq">
          <div className="about__faqHeader">
            <h2 className="about__faqTitle">Frequently Asked Questions</h2>
            <p className="about__faqTitleSub">Quick answers about what we do and how we work.</p>
          </div>
          <div className="about__faqGrid">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`about__faqItem ${openFaqIndex === index ? "about__faqItem--open" : ""}`}
              >
                <button
                  type="button"
                  className="about__faqQuestion"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="about__faqIcon" aria-hidden="true">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                  <span className="about__faqQuestionText">{item.question}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="about__faqAnswer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;
