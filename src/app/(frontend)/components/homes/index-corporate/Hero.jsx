import React from "react";
const listItems = [
  "Track your teams progress with mobile app.",
  "Lorem ipsum dolor sit amet consectetur adipisicing.",
  "Your teams progress with mobile app.",
];

export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-950 bg_image bg_image--5"
      data-black-overlay={2}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-left">
              <h4 className="subtitle">
                <span className="theme-gradient">
                  DIGITAL CONSULTING AGENCY
                </span>
              </h4>
              <h1 className="title display-one">Join Corporate Meeting.</h1>
              <ul className="list-icon">
                {listItems.map((item, index) => (
                  <li key={index}>
                    <span className="icon background-transparent">
                      <i className="feather-check" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="button-group mt--40 mt_sm--20">
                <a
                  className="btn-default btn-icon"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Purchase Now <i className="icon feather-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
