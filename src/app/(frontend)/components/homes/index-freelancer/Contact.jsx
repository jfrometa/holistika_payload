"use client";
import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="rainbow-contact-form-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title-2 text-start"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h2 className="title w-600 mb--20">Contact With Me.</h2>
            </div>
          </div>
        </div>
        <div className="row row--30 mt--40">
          <div className="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
            <form
              className="contact-form-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input
                  required
                  type="text"
                  name="fullname"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  required
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 order-1 oder-lg-2">
            <div className="thumbnail">
              <Image
                className="radius w-100"
                alt="Corporate"
                src="/assets/images/about/contact-image.jpg"
                width={615}
                height={560}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
