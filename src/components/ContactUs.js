import React, { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contactUs">
      <div className="cus__title big">
        <h1>Contact Us</h1>
        <p>
          We'd be delighted to hear from you. Add another sentence here. Add
          another sentence here.
        </p>
      </div>

      <form className="cus__form" onSubmit={(e) => e.preventDefault()}>
        <div className="cus__field">
          <label htmlFor="cus-name">NAME:</label>
          <input
            type="text"
            id="cus-name"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div className="cus__field">
          <label htmlFor="cus-email">EMAIL ADDRESS:</label>
          <input
            type="email"
            id="cus-email"
            name="email"
            placeholder="you@email.com"
          />
        </div>
        <div className="cus__field">
          <label htmlFor="cus-subject">SUBJECT:</label>
          <input
            type="text"
            id="cus-subject"
            name="subject"
            placeholder="How can we help?"
          />
        </div>
        <div className="cus__field cus__field--message">
          <label htmlFor="cus-message">YOUR MESSAGE:</label>
          <textarea
            id="cus-message"
            name="message"
            rows={5}
            placeholder="Tell us about your project or question..."
          />
        </div>
        <button type="submit" className="cus__submit">
          SEND MESSAGE
        </button>
      </form>

      <div className="contactUs__mapWrap">
        <h2 className="contactUs__mapTitle">Find us</h2>
        <div className="contactUs__map">
          <iframe
            title="Apollo Technology - Caxias, MA, Brazil"
            src="https://www.google.com/maps?q=Caxias,+Maranh%C3%A3o,+Brazil&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default ContactUs;
