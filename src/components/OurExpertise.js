import React, { useEffect, useRef, useState } from "react";
import iconAgile from "../assets/our_expertise/icon-agile.svg";
import iconAi from "../assets/our_expertise/icon-ai.svg";
import iconProduct from "../assets/our_expertise/icon-product.svg";
import iconDevops from "../assets/our_expertise/icon-devops.svg";
import iconConsulting from "../assets/our_expertise/icon-consulting.svg";
import iconCloud from "../assets/our_expertise/icon-cloud.svg";

const CUSTOMER_REVIEWS = [
  { name: "BairesDev", logo: "/customer-success/bairesdev.svg", timeAgo: "a year ago", quote: "Apollo Technology delivered exceptional microservices work for our payments integrations. Professional, on time, and a pleasure to work with." },
  { name: "Exomindset", logo: "/customer-success/exomindset.png?v=2", timeAgo: "2 years ago", quote: "Their team brought real expertise to our SaaS platform and digital solutions. We'd recommend them to anyone looking for reliable partners." },
  { name: "NKey", logo: "/customer-success/nkey.png?v=2", timeAgo: "3 years ago", quote: "The health platform they built with Node.js and NestJS has been rock solid at scale. An excellent partnership from start to finish." },
  { name: "GLOBAL HITSS", logo: "/customer-success/global-hitss.png", timeAgo: "5 years ago", quote: "They helped us automate microservices and cut AWS costs significantly while improving monitoring. A highly skilled team." },
];

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
        <li>Professional software development experience</li>
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
  const customersTrackWrapRef = useRef(null);
  const scrollStep = 320;
  const oneSetWidth = 1264; // 4 cards * (300px + 1rem gap)

  useEffect(() => {
    if (!embedded) window.scrollTo(0, 0);
  }, [embedded]);

  useEffect(() => {
    const el = customersTrackWrapRef.current;
    if (!el) return;
    const step = 0.5;
    const interval = setInterval(() => {
      el.scrollLeft += step;
      if (el.scrollLeft >= oneSetWidth) el.scrollLeft -= oneSetWidth;
    }, 20);
    return () => clearInterval(interval);
  }, []);

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

        <section className="expertise__customerSuccess" aria-label="What our clients say about us">
          <h2 className="expertise__customerSuccessTitle">What our clients say about us</h2>
          <div className="expertise__customersCarouselWrap">
            <button
              type="button"
              className="expertise__customersCarouselBtn expertise__customersCarouselBtn--prev"
              onClick={() => {
                const el = customersTrackWrapRef.current;
                if (el) el.scrollBy({ left: -scrollStep, behavior: "smooth" });
              }}
              aria-label="Previous reviews"
            />
            <button
              type="button"
              className="expertise__customersCarouselBtn expertise__customersCarouselBtn--next"
              onClick={() => {
                const el = customersTrackWrapRef.current;
                if (el) el.scrollBy({ left: scrollStep, behavior: "smooth" });
              }}
              aria-label="Next reviews"
            />
            <div className="expertise__customersCarousel">
              <div className="expertise__customersSummaryCard expertise__customersSummaryCard--fixed" role="listitem">
                <div className="expertise__customersSummaryLogo">
                  <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" />
                </div>
                <h3 className="expertise__customersSummaryName">Apollo Technology</h3>
                <div className="expertise__customersSummaryRating">
                  <span className="expertise__customersSummaryScore">5.0</span>
                  <span className="expertise__customersStars" aria-hidden="true">★★★★★</span>
                </div>
                <p className="expertise__customersSummaryCount">Based on {CUSTOMER_REVIEWS.length} reviews</p>
                <p className="expertise__customersSummaryPowered">powered by <img src={process.env.PUBLIC_URL + "/google.svg"} alt="Google" className="expertise__customersGoogleIcon" /></p>
              </div>
              <div className="expertise__customersCarouselTrackWrap" ref={customersTrackWrapRef}>
                <div className="expertise__customersCarouselTrack" role="list">
                  {[0, 1].map((segment) => (
                    <React.Fragment key={segment}>
                      {CUSTOMER_REVIEWS.map((review, i) => (
                        <div key={`${segment}-${i}`} className="expertise__customersReviewCard" role="listitem">
                          <div className="expertise__customersReviewHeader">
                            <div className="expertise__customersReviewLogo">
                              <img src={process.env.PUBLIC_URL + review.logo} alt={review.name} />
                            </div>
                            <div className="expertise__customersReviewMeta">
                              <span className="expertise__customersReviewName">{review.name}</span>
                              <span className="expertise__customersReviewTime">{review.timeAgo}</span>
                            </div>
                            <span className="expertise__customersReviewGoogle" aria-hidden="true"><img src={process.env.PUBLIC_URL + "/google.svg"} alt="Google" className="expertise__customersGoogleIcon" /></span>
                          </div>
                          <div className="expertise__customersReviewStars" aria-hidden="true">★★★★★</div>
                          <p className="expertise__customersReviewText">{review.quote}</p>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="app__spacer"></div>

        <div className="about__stayConnected">
          <h2 className="about__stayConnectedTitle">Stay connected</h2>
          <div className="about__stayConnectedLeft">
            <div className="about__stayConnectedGraphic">
              <img
                src={process.env.PUBLIC_URL + "/2.png"}
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
