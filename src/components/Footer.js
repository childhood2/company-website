import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <img src={process.env.PUBLIC_URL + "/favicon.svg"} alt="Apollo Technology" className="footer__logo" />
        <p>Apollo Technology © 2017</p>
      </div>
      <div className="footer__middle">
        <p className="footer__tagline">Building reliable software for businesses worldwide.</p>
        <p className="footer__sub">Remote-first team · Global delivery</p>
      </div>
      <div className="footer__row left">
        <div className="footer__smList">
          <a href="https://www.linkedin.com/company/apollo-technology-it-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer__smLink" aria-label="LinkedIn">
            <LinkedInIcon className="footer__sm" fontSize="inherit" />
          </a>
          <a href="https://github.com/sostenesapollo" target="_blank" rel="noopener noreferrer" className="footer__smLink" aria-label="GitHub">
            <GitHubIcon className="footer__sm" fontSize="inherit" />
          </a>
        </div>
        <p>About • Our Solutions • Services Offered • Contact Us</p>
      </div>
    </div>
  );
}

export default Footer;
