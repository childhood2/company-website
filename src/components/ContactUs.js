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
            placeholder="you@company.com"
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

      <div className="app__spacer"></div>
    </div>
  );
}

export default ContactUs;
