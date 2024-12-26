import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="slider-perosonal-portfolio height-750 slider-bg-image bg-image11"
      data-black-overlay={1}
    >
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-12">
            <div className="inner text-center">
              <h1 className="title">
                Hey! I'm <br />
                <span className="theme-gradient">Jonnin Arra</span>
              </h1>
              <div className="button-group mt--30">
                <Link
                  className="btn-default round btn-border btn-large"
                  href={`/contact`}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
