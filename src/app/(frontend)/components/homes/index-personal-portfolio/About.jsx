import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="about-style-5 rainbow-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <Image
                    alt="About Images"
                    src="/assets/images/about/about-5.png"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="content">
                  <div className="inner">
                    <h4 className="title">I'm Web Dedeloper</h4>
                    <p>
                      Web designer and developer working for envato.com in
                      Paris, France.
                    </p>
                    <ul className="contact-address">
                      <li>
                        <i className="feather-file" /> Web designer &amp;
                        developer
                      </li>
                      <li>
                        <i className="feather-phone" /> +01916395965
                      </li>
                      <li>
                        <i className="feather-map-pin" /> Dhaka, Bangladesh
                      </li>
                    </ul>
                    <div className="download-button mt--20">
                      <a className="btn-read-more" href="#">
                        <span>Download My CV</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
