import React, { useEffect } from "react";
import homeJumbo from "../assets/home/home_jumbo.svg";
import About from "./About";
import OurExpertise from "./OurExpertise";
import ContactUs from "./ContactUs";

function SinglePage({ activeTab }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1 className="home__heroTitle">
              From concept to completion.
            </h1>
            <p className="home__heroText">
              Flexible pay. Global time zones. Work done right.
            </p>
          </div>
          <img src={homeJumbo} alt="" className="home__jumboImg" />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="single-page__tabs-content">
        {activeTab === "about" && <About embedded />}
        {activeTab === "expertise" && <OurExpertise embedded />}
        {activeTab === "contact" && <ContactUs />}
      </div>
    </div>
  );
}

export default SinglePage;
