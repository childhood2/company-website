import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ourExpertiseJumbo from "../assets/our_expertise/ourExpertise_jumbo.svg";
import one from "../assets/our_expertise/one.svg";
import two from "../assets/our_expertise/two.svg";
import three from "../assets/our_expertise/three.svg";
import four from "../assets/our_expertise/four.svg";
import five from "../assets/our_expertise/five.svg";

function OurExpertise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1>Our Expertise</h1>
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
          <img
            src={ourExpertiseJumbo}
            alt="ExpertiseJumbo"
            className="home__jumboImg"
          />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="expertise">
        <div className="expertise__grid">
          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Agile Software Development</h3>
            <div className="expertise__cardIcon">
              <img src={one} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Using pragmatic ways and continuously improving best engineering
              practices, we apply industry-proven Agile frameworks to
              iteratively develop and quickly deliver working software—focusing
              on quality, faster time to market and realistic ROI.
            </p>
            <span className="expertise__cardArrow" aria-hidden="true">→</span>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">AI-Powered Data Engines</h3>
            <div className="expertise__cardIcon">
              <img src={two} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We apply AI where it matters most: efficiency, detection and
              prediction. We use the Python AI ecosystem, TensorFlow and PyTorch
              to help customers uncover deeper problems and set sustainable,
              learning solutions.
            </p>
            <span className="expertise__cardArrow" aria-hidden="true">→</span>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Agile Product Delivery</h3>
            <div className="expertise__cardIcon">
              <img src={three} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We foster Social Enterprise Thinking and design products using
              Design Thinking and Human Centered Design to deliver valuable
              prototypes and practical solutions that create lasting change.
            </p>
            <span className="expertise__cardArrow" aria-hidden="true">→</span>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">DevOps and Automation Testing</h3>
            <div className="expertise__cardIcon">
              <img src={four} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We set up DevOps teams tailored to your needs—recommending tools,
              identifying metrics, automating tests and bridging the gap between
              IT operations and software development.
            </p>
            <span className="expertise__cardArrow" aria-hidden="true">→</span>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">IT Consulting</h3>
            <div className="expertise__cardIcon">
              <img src={five} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Experienced Agile practitioners delivering in-house and public
              trainings, Scrum and SAFe® certifications, and digital
              transformation—helping teams grow through Agile communities and
              Community of Practice.
            </p>
            <span className="expertise__cardArrow" aria-hidden="true">→</span>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default OurExpertise;
