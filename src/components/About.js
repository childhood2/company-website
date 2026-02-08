import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aucyn from "../assets/members/aucyn.svg";
import gene from "../assets/members/gene.svg";
import audezza from "../assets/members/audezza.svg";
import carlo from "../assets/members/carlo.svg";
import ariel from "../assets/members/ariel.svg";
import anne from "../assets/members/anne.svg";
import rampel from "../assets/members/rampel.svg";
import zed from "../assets/members/zed.svg";
import kez from "../assets/members/kez.svg";
import marielet from "../assets/members/marielet.svg";

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

      <div className="about__team">
        <div className="about__teamDesc">
          <h1>Team</h1>
          <p>
            Our team is a lean startup composed of IT hustlers with over two
            decades of professional IT experiences and diverse expertise in the
            fields of IT project management, business analysis, system design,
            software development and cloud implementation services for
            enterprise systems.
          </p>
        </div>
        <div className="app__spacer"></div>
        <div className="about__member">
          <img src={aucyn} alt="aucyn" />
          <h3>Aucyn Fabilonia</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="about__teamMembers">
          <div className="about__member">
            <img src={gene} alt="gene" />
            <h3>Gene D.</h3>
            <p>Co-Founder & CTO</p>
          </div>
          <div className="about__member">
            <img src={audezza} alt="audezza" />
            <h3>Audezza Fabilonia</h3>
            <p>Corporate Secretary</p>
          </div>
          <div className="about__member">
            <img src={rampel} alt="rampel" />
            <h3>Rampel O.</h3>
            <p>Head of Mobile Development</p>
          </div>
          <div className="about__member">
            <img src={ariel} alt="ariel" />
            <h3>Ariel M.</h3>
            <p>Head of Software Development</p>
          </div>
          <div className="about__member">
            <img src={anne} alt="anne" />
            <h3>Anne P.</h3>
            <p>Head of Product Design</p>
          </div>
          <div className="about__member">
            <img src={carlo} alt="carlo" />
            <h3>Prince Carlo Juguilon</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="about__member">
            <img src={kez} alt="kez" />
            <h3>Kez C.</h3>
            <p>Quality Engineer</p>
          </div>
          <div className="about__member">
            <img src={marielet} alt="marielet" />
            <h3>Marielet G.</h3>
            <p>Data Scientist</p>
          </div>
          <div className="about__member">
            <img src={zed} alt="zed" />
            <h3>Zedrick V.</h3>
            <p>Head of Web Development</p>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default About;
