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
      <section ref={sectionAboutRef} id="section-about" className="single-page__section" aria-label="About Us">
        <About embedded />
      </section>
      <div className="app__spacer" aria-hidden="true" />

      <section ref={sectionExpertiseRef} id="section-expertise" className="single-page__section" aria-label="Our Expertise">
        <OurExpertise embedded />
      </section>
      <div className="app__spacer app__spacer--small" aria-hidden="true" />

      <section ref={sectionContactRef} id="section-contact" className="single-page__section" aria-label="Contact Us">
        <ContactUs />
      </section>
    </div>
  );
}

export default SinglePage;
