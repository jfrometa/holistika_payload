import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--18"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-one">
                Holistika <br />
                <span className="theme-gradient">Innovation</span> {" "}
                <span className="theme-gradient">Consultancy</span>.
              </h1>
              <p className="description">
               Diseñamos empresas y marcas relevantes, capaces de prosperar frente al cambio constante.
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-medium btn-icon"
                  target="_blank"
                  href="https://tally.so/r/npAyyJ"
                >
                  Veamos tu proyecto <i className="feather-arrow-right" />
                </a>
                <Link
                  className="btn-default btn-medium btn-icon btn-border"
                  href={`/contact`}
                >
                  Hablemos <i className="feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
