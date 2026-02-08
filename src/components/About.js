import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="app__jumbotronSmall">
        <div className="about__desc">
          <h1>Our Experience</h1>
          <p>
            Our background includes developing and maintaining mission-critical
            systems for global payment platforms, supporting technologies used
            by Mastercard, Visa, and American Express, as well as delivering
            projects for financial institutions and high-traffic digital
            platforms.
            <br></br>
            <br></br>
            We have also built and scaled multiple SaaS products, applying
            real-world experience in product development, system design, and
            long-term maintenance.
          </p>
          <p>
            <a
              href="https://www.pedegas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedegas.com
            </a>
            {" · "}
            <a
              href="https://www.giftsqr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Giftsqr.com
            </a>
          </p>
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
    </div>
  );
}

export default About;
