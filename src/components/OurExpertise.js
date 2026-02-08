import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ourExpertiseJumbo from "../assets/our_expertise/ourExpertise_jumbo.svg";
import iconAgile from "../assets/our_expertise/icon-agile.svg";
import iconAi from "../assets/our_expertise/icon-ai.svg";
import iconProduct from "../assets/our_expertise/icon-product.svg";
import iconDevops from "../assets/our_expertise/icon-devops.svg";
import iconConsulting from "../assets/our_expertise/icon-consulting.svg";
import iconCloud from "../assets/our_expertise/icon-cloud.svg";

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
              <img src={iconAgile} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Using pragmatic ways and continuously improving best engineering
              practices, we apply industry-proven Agile frameworks to
              iteratively develop and quickly deliver working software, focusing
              on quality, faster time to market and realistic ROI.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">AI-Powered Data Engines</h3>
            <div className="expertise__cardIcon">
              <img src={iconAi} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We apply AI where it matters most: efficiency, detection and
              prediction. We use the Python AI ecosystem, TensorFlow and PyTorch
              to help customers uncover deeper problems and set sustainable,
              learning solutions.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Agile Product Delivery</h3>
            <div className="expertise__cardIcon">
              <img src={iconProduct} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We foster Social Enterprise Thinking and design products using
              Design Thinking and Human Centered Design to deliver valuable
              prototypes and practical solutions that create lasting change.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">DevOps and Automation Testing</h3>
            <div className="expertise__cardIcon">
              <img src={iconDevops} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We set up DevOps teams tailored to your needs, recommending tools,
              identifying metrics, automating tests and bridging the gap between
              IT operations and software development.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">IT Consulting</h3>
            <div className="expertise__cardIcon">
              <img src={iconConsulting} alt="" />
            </div>
            <p className="expertise__cardDesc">
              Experienced Agile practitioners delivering in-house and public
              trainings, Scrum and SAFe® certifications, and digital
              transformation, helping teams grow through Agile communities and
              Community of Practice.
            </p>
          </div>

          <div className="expertise__card">
            <h3 className="expertise__cardTitle">Cloud &amp; Infrastructure</h3>
            <div className="expertise__cardIcon">
              <img src={iconCloud} alt="" />
            </div>
            <p className="expertise__cardDesc">
              We design and manage cloud-native and hybrid infrastructure on
              AWS, GCP and Azure, helping you scale, secure and optimize costs
              with DevOps practices and automation.
            </p>
          </div>
        </div>

        <section className="expertise__customerSuccess" aria-label="Customer Success">
          <h2 className="expertise__customerSuccessTitle">Customer Success</h2>
          <p className="expertise__customerSuccessSubtitle">
            Trusted by leading organizations worldwide
          </p>
          <div className="expertise__customerSuccessLogos">
            <div className="expertise__customerSuccessLogo" title="BairesDev">
              <img src={process.env.PUBLIC_URL + "/customer-success/bairesdev.svg"} alt="BairesDev" />
            </div>
            <div className="expertise__customerSuccessLogo" title="Exomindset">
              <img src={process.env.PUBLIC_URL + "/customer-success/exomindset.svg"} alt="Exomindset" />
            </div>
            <div className="expertise__customerSuccessLogo" title="NKey">
              <img src={process.env.PUBLIC_URL + "/customer-success/nkey.svg"} alt="NKey" />
            </div>
            <div className="expertise__customerSuccessLogo" title="GLOBAL HITSS">
              <img src={process.env.PUBLIC_URL + "/customer-success/global-hitss.svg"} alt="GLOBAL HITSS" />
            </div>
            <div className="expertise__customerSuccessLogo" title="Tsuru.chat">
              <img src={process.env.PUBLIC_URL + "/customer-success/tsuru-chat.svg"} alt="Tsuru.chat" />
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
