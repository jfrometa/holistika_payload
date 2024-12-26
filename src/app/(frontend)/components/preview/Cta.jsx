import React from "react";

export default function Cta() {
  return (
    <div className="rainbow-callto-action rainbow-call-to-action content-wrapper rainbow-section-gap">
      <div className="container">
        <div className="row row--0 align-items-center">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <div className="react-image mb--20 relative">
                  <img
                    className="nextjs-svg"
                    src="\assets\images\logo\nextjs.svg"
                  />
                </div>
                <h2 className="title display-two">
                  Grab Doob now{" "}
                  <span className="theme-gradient">
                    before
                    <br />
                    price increase
                  </span>
                </h2>
                <h6 className="subtitle">
                  Purchase the Doob annd make your site super faster and easy.
                </h6>
                <div className="call-to-btn text-center mt--30">
                  <a
                    className="btn-default btn-icon"
                    target="_blank"
                    href="https://themeforest.net/user/rainbow-themes/portfolio"
                  >
                    Purchase Doob <i className="icon feather-arrow-right"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
