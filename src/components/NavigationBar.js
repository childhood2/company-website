import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [offsetY, setOffsetY] = useState(0);
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

    const hamburger = document.querySelector(".navbar__hamburger");
    const navLinks = document.querySelector(".navbar__links");
    const logo = document.querySelector(".navbar__logo");
    const ourExpertise = document.querySelector("#nav__ourExpertise");
    const about = document.querySelector("#nav__about");
    const contactUs = document.querySelector("#nav__contactUs");

    const clearNavSelection = () => {
      if (ourExpertise) ourExpertise.classList.remove("navbar__selected");
      if (about) about.classList.remove("navbar__selected");
      if (contactUs) contactUs.classList.remove("navbar__selected");
    };
    const closeMobileMenu = () => {
      if (navLinks) navLinks.classList.remove("open");
      if (hamburger) hamburger.classList.remove("open");
    };

    if (logo) {
      logo.addEventListener("click", () => {
        clearNavSelection();
      });
    }

    if (ourExpertise) {
      ourExpertise.addEventListener("click", () => {
        clearNavSelection();
        ourExpertise.classList.add("navbar__selected");
        closeMobileMenu();
      });
    }

    if (about) {
      about.addEventListener("click", () => {
        clearNavSelection();
        about.classList.add("navbar__selected");
        closeMobileMenu();
      });
    }

    if (contactUs) {
      contactUs.addEventListener("click", () => {
        clearNavSelection();
        contactUs.classList.add("navbar__selected");
        closeMobileMenu();
      });
    }

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__all">
        <Link to="/" className="navbar__logo">
          Apollo Tech Solutions
        </Link>
        <div className="navbar__separator" aria-hidden="true" />
        <div className="navbar__hamburger">
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
        </div>

        <ul className="navbar__links">
          <li>
            <Link
              to="/our-expertise"
              className="navbar__link"
              id="nav__ourExpertise"
            >
              Our Expertise
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__link" id="nav__about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="navbar__link" id="nav__contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
