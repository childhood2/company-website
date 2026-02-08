import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <img src={process.env.PUBLIC_URL + "/logo.png?v=3"} alt="Apollo Technology" />
        <p>Apollo Technology © 2020</p>
      </div>
      <div className="footer__row left">
        <div className="footer__smList">
          <LinkedInIcon className="footer__sm" fontSize="inherit" />
          <GitHubIcon className="footer__sm" fontSize="inherit" />
        </div>
        <p>About • Our Solutions • Services Offered • Contact Us</p>
      </div>
    </div>
  );
}

export default Footer;
