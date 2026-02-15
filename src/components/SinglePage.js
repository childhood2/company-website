import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import OurExpertise from "./OurExpertise";
import ContactUs from "./ContactUs";

// Hero image: replace public/hero-bg.jpg with your image. Bump version to force reload.
const HERO_IMAGE_VERSION = 4;
const heroBgUrl = `${process.env.PUBLIC_URL || ""}/hero-bg.jpg?v=${HERO_IMAGE_VERSION}`;

function SinglePage({ activeTab }) {
  const sectionAboutRef = useRef(null);
  const sectionExpertiseRef = useRef(null);
  const sectionContactRef = useRef(null);
  const heroCopyRef = useRef(null);
  const [heroCopyInView, setHeroCopyInView] = useState(false);
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

  // Hero text: entrance animation runs every time user passes the section (scroll up or down)
  useEffect(() => {
    const el = heroCopyRef.current;
    if (!el) return;
    let rafId = null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            rafId = requestAnimationFrame(() => {
              requestAnimationFrame(() => setHeroCopyInView(true));
            });
          } else {
            setHeroCopyInView(false);
          }
          break;
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="single-page">
      <div className="app__jumbotron single-page__hero" style={{ backgroundImage: `url(${heroBgUrl})` }}>
        <div className="home__main">
          <div ref={heroCopyRef} className={`home__heroCopy${heroCopyInView ? " home__heroCopy--inView" : ""}`}>
            <h1 className="home__heroTitle">
              From concept
              <br />
              <span className="home__heroTitleLine2">to completion.</span>
            </h1>
            <p className="home__heroText">
              Competitive pricing. Global availability.
              <br />
              Work done right.
            </p>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>

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
