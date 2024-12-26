import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="slider-area slider-bg-image slider-style-5 bg-overlay-solid height-850 bg_image bg_image--13"
      data-black-overlay={3}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-start">
              <h4 className="subtitle">MEET CONSULTING</h4>
              <h1 className="title display-one">
                Financial Analysis <br />
                Developing Meeting.
              </h1>
              <div className="button-group mt--40 mt_sm--20">
                <Link
                  className="btn-default"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  BUY DOOB NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
