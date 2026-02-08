import React, { useEffect, useRef } from "react";
import About from "./About";
import OurExpertise from "./OurExpertise";
import ContactUs from "./ContactUs";

function SinglePage({ activeTab }) {
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <div className="single-page">
      <div className="app__jumbotron single-page__hero">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1 className="home__heroTitle">
              From concept to completion.
            </h1>
            <p className="home__heroText">
              Flexible pay. Global time zones. Work done right.
            </p>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>

      <div
        ref={tabContentRef}
        id="tab-content"
        className="single-page__tabs-content"
        role="region"
        aria-label={`${activeTab === "about" ? "About Us" : activeTab === "expertise" ? "Our Expertise" : "Contact Us"} content`}
      >
        {activeTab === "about" && <About embedded />}
        {activeTab === "expertise" && <OurExpertise embedded />}
        {activeTab === "contact" && <ContactUs />}
      </div>
    </div>
  );
}

export default SinglePage;
