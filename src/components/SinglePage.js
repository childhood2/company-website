import React, { useEffect, useRef } from "react";
import About from "./About";
import OurExpertise from "./OurExpertise";
import ContactUs from "./ContactUs";

function SinglePage({ activeTab }) {
  const sectionAboutRef = useRef(null);
  const sectionExpertiseRef = useRef(null);
  const sectionContactRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const ref = activeTab === "about" ? sectionAboutRef : activeTab === "expertise" ? sectionExpertiseRef : sectionContactRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <section ref={sectionAboutRef} id="section-about" className="single-page__section" aria-label="About Us">
        <h2 className="single-page__sectionTitle">About Us</h2>
        <p className="single-page__sectionOverview">
          Building enterprise-grade, full-stack software solutions for organizations worldwide.
          <br />
          Delivering scalable cloud-native systems, microservices, AI-enabled platforms, and SaaS products using modern, in-demand technologies and deep engineering expertise, while driving innovation, improving operational efficiency, and supporting sustainable long-term growth.
        </p>
        <About embedded />
      </section>
      <div className="app__spacer" aria-hidden="true" />

      <section ref={sectionExpertiseRef} id="section-expertise" className="single-page__section" aria-label="Our Expertise">
        <h2 className="single-page__sectionTitle">Our Expertise</h2>
        <OurExpertise embedded />
      </section>
      <div className="app__spacer" aria-hidden="true" />

      <section ref={sectionContactRef} id="section-contact" className="single-page__section" aria-label="Contact Us">
        <ContactUs />
      </section>
    </div>
  );
}

export default SinglePage;
