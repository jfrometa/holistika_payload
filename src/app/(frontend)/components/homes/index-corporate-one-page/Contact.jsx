"use client";
import React from "react";

export default function Contact() {
  return (
    <div
      className="rainbow-contact-area rainbow-section-gap scrollSpySection"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Our Contact Address Here.</h2>
              <p className="description b1">
                There are many variations of passages.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-7">
            <form
              className="contact-form-1 rainbow-dynamic-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="contact-email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="contact-message"
                  id="contact-message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn-default btn-large rainbow-btn round"
                >
                  <span>Submit Now</span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="google-map-style-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd"
                width={600}
                height={550}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
