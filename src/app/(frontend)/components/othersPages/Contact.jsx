"use client";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};
export default function Contact() {
  const [result, showresult] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", formRef.current, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then(
        (result) => {
          showresult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);
  return (
    <div className="main-content">
      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Contact Form</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Our Contact Address Here.
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-headphones" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Contact Phone Number</h4>
                        <p>
                          <a href="tel:+444555666777">+444 555 666 777</a>
                        </p>
                        <p>
                          <a href="tel:+222222222333">+222 222 222 333</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-mail" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Our Email Address</h4>
                        <p>
                          <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                        </p>
                        <p>
                          <a href="mailto:example@gmail.com">
                            example@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-map-pin" />
                      </div>
                      <div className="inner">
                        <h4 className="title">Our Location</h4>
                        <p>
                          5678 Bangla Main Road, cities 580 <br />
                          GBnagla, example 54786
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40 row--15">
            <div className="col-lg-7">
              <form
                ref={formRef}
                className="contact-form-1 rainbow-dynamic-form"
                onSubmit={sendEmail}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="btn-default btn-large rainbow-btn"
                  >
                    <span>Submit Now</span>
                  </button>
                </div>
                <div className="form-group">{result ? <Result /> : null}</div>
              </form>
            </div>
            <div className="col-lg-5 mt_md--30 mt_sm--30">
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
    </div>
  );
}
