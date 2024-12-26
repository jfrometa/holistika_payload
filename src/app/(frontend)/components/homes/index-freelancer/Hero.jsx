import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="slider-area slider-style-2 variation-3 height-850 slider-bg-image bg_image bg_image--22 bg_image_fixed theme-shape">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="inner text-left">
              <h1 className="title">
                Hi there, I am‍ <br />
                <span className="theme-gradient">Liam Noah!</span>
              </h1>
              <p className="description">
                I am an outstanding Product Designer from Lagos, Fatima. You
                will find me smiling almost every time while designing
                thoughtful products, and experiences that people love and
                businesses value.
              </p>
              <div className="button-group mt--40 mt_sm--20">
                <Link className="btn-default btn-border" href="/contact">
                  Click For Hire Me
                </Link>
                <Link className="btn-default btn-icon" href="/about">
                  About Me <i className="icon feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
