import React, { useEffect } from "react";
import iconAgile from "../assets/our_expertise/icon-agile.svg";
import iconAi from "../assets/our_expertise/icon-ai.svg";
import iconProduct from "../assets/our_expertise/icon-product.svg";
import iconDevops from "../assets/our_expertise/icon-devops.svg";
import iconConsulting from "../assets/our_expertise/icon-consulting.svg";
import iconCloud from "../assets/our_expertise/icon-cloud.svg";

function OurExpertise({ embedded }) {
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

        <div className="expertise__recommended">
          <h2 className="expertise__recommendedTitle">Recommended for you</h2>
          <div className="expertise__recommendedGrid">
            <a
              href="https://www.youtube.com/watch?v=as9IYFrTiKc"
              target="_blank"
              rel="noopener noreferrer"
              className="expertise__recommendedCard"
            >
              <div className="expertise__recommendedImgWrap">
                <img src={process.env.PUBLIC_URL + "/1.png"} alt="" />
              </div>
              <p className="expertise__recommendedDesc">
                This covers the Agile methodology and Scrum workflow step-by-step,
                which is the framework used by many software development teams in
                the USA and globally.
              </p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ggJaQ4I2h9w&utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="expertise__recommendedCard"
            >
              <div className="expertise__recommendedImgWrap">
                <img src={process.env.PUBLIC_URL + "/2.png"} alt="" />
              </div>
              <p className="expertise__recommendedDesc">
                This video explains typical responsibilities and activities of IT
                consultants, which can help you visualize consulting conversations.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default OurExpertise;
