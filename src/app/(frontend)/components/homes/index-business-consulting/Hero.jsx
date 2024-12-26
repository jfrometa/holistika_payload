import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--3"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span className="subtitle">DIGITAL CONSULTING AGENCY</span>
              <h1 className="title display-one">
                Unique Business <span>Consulting</span>.
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-medium round btn-icon"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Purchase Now <i className="icon feather-arrow-right" />
                </a>
                <Link
                  className="btn-default btn-medium btn-border round btn-icon"
                  href={`/contact`}
                >
                  Contact Us <i className="icon feather-arrow-right"> </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
