import React, { useState, useEffect } from "react";

function NavigationBar({ activeTab, setActiveTab }) {
  const [offsetY, setOffsetY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (offsetY > 0) {
        navbar.classList.add("onScroll");
      } else {
        navbar.classList.remove("onScroll");
      }
    }
  }, [offsetY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    if (setActiveTab) setActiveTab(tab);
    setMenuOpen(false);
  };

  const linkClass = (tab) =>
    `navbar__link${activeTab === tab ? " navbar__selected" : ""}`;

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__all">
        <button
          type="button"
          className="navbar__logo"
          onClick={() => handleNavClick("about")}
          aria-label="Apollo Tech Solutions home"
        >
          Apollo Tech Solutions
        </button>
        <div className="navbar__separator" aria-hidden="true" />
        <button
          type="button"
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
        </button>

        <ul className={`navbar__links${menuOpen ? " open" : ""}`}>
          <li>
            <button
              type="button"
              className={linkClass("about")}
              id="nav__about"
              onClick={() => handleNavClick("about")}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkClass("expertise")}
              id="nav__ourExpertise"
              onClick={() => handleNavClick("expertise")}
            >
              Our Expertise
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkClass("contact")}
              id="nav__contactUs"
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
