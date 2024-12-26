import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
    <div className="rainbow-callto-action-area rainbow-section-gapBottom">
      <div className="wrapper">
        <div className="rainbow-callto-action clltoaction-style-default style-5">
          <div className="container">
            <div className="row row--0 align-items-center content-wrapper pb--0">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content text-center">
                    <h2
                      className="title sal-animate"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      Getting started <br />
                      takes less than 5 minutes
                    </h2>
                    <h6
                      className="subtitle sal-animate"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Finest choice for your home &amp; office
                    </h6>
                    <div
                      className="call-to-btn sal-animate button-group"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={350}
                    >
                      <a
                        className="btn-default btn-medium round btn-icon"
                        target="_blank"
                        href="#"
                      >
                        Try 14 days free trial{" "}
                        <i className="icon feather-arrow-right"></i>
                      </a>
                      <a
                        target="_blank"
                        className="btn-default btn-medium btn-border round btn-icon"
                        href={`https://themeforest.net/user/rainbow-themes/portfolio`}
                      >
                        Buy For Only $9.99{" "}
                        <i className="icon feather-arrow-right" />
                      </a>
                    </div>
                    <div className="image mt--50">
                      <a href="#">
                        <Image
                          alt="card Images"
                          src="/assets/images/advance-tab/tab-screen-03.png"
                          width={1200}
                          height={949}
                        />
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
