import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="slider-area slider-style-8 height-650">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span className="subtitle theme-gradient">
                Hello! This is WebAgency
              </span>
              <h1 className="title">
                Our Web <br />
                Agecny Plan.
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities,
                <br />
                digital experiences, and print materials.
              </p>
              <div className="button-group mt--30">
                <Link className="btn-default btn-large round" href="/login">
                  Explore Now
                </Link>
                <Link
                  className="btn-default btn-border btn-large round"
                  href={`/contact`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
