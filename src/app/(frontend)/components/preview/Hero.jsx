import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <div className="react-image mb--20 relative">
                <img
                  className="nextjs-svg"
                  src="\assets\images\logo\nextjs.svg"
                />
              </div>
              <h1 className="title display-two">
                Next-gen all-in-one <br />
                <span className="theme-gradient">Business</span> &amp;{" "}
                <span className="theme-gradient">Consulting</span>
                <br />
                Nextjs 14+ Template.
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-large round btn-icon smoth-animation"
                  href="#demo"
                >
                  View Demo <i className="feather-arrow-down" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
