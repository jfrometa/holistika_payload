import React from "react";

export default function SpeedScroreSection() {
  return (
    <div className="gt-matrik-score-areass rainbow-section-gapBottom bg_color--1  rainbow-section-gap splash-speed">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="inner">
              <div className="section-title text-white">
                <h2
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration={400}
                  data-sal-delay={200}
                >
                  Ultra <br />
                  Performance
                </h2>
                <p
                  data-sal="slide-up"
                  data-sal-duration={400}
                  data-sal-delay={300}
                >
                  Doob Page speed is so faster and takes byte times for load
                  each page. It's is very easy to use, loads faster and provides
                  better performance for your wedsite.
                </p>
                <a
                  target="_blank"
                  href="#"
                  className="rbt-button btn-default btn-border btn-medium mt--30"
                  data-sal="slide-up"
                  data-sal-duration={400}
                  data-sal-delay={400}
                >
                  <span className="button-text">View GTmetrix Report</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="progressbar_inner">
              <div className="progress-wrapper  overflow-hidden">
                <h3 className="heading">Gtmetrix Scores</h3>
                {/* Start Single Progress Charts */}
                <div className="rn-progress-charts progress-bar--3">
                  <h6 className="heading heading-h6">PageSpeed</h6>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay=".3s"
                      role="progressbar"
                      style={{
                        width: "99%",
                        visibility: "visible",
                        animationDuration: "0.5s",
                        animationDelay: "0.3s",
                        // animationName: "fadeInLeft",
                      }}
                      aria-valuenow={99}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="percent-label">99%</span>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Charts */}
                {/* Start Single Progress Charts */}
                <div className="rn-progress-charts progress-bar--3 mt--40">
                  <h6 className="heading heading-h6">YSlow</h6>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.7s"
                      data-wow-delay=".5s"
                      role="progressbar"
                      style={{
                        width: "92%",
                        visibility: "visible",
                        animationDuration: "0.7s",
                        animationDelay: "0.5s",
                        animationName: "fadeInLeft",
                      }}
                      aria-valuenow={92}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="percent-label">92%</span>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Charts */}
                {/* Start Single Progress Charts */}
                <div className="rn-progress-charts progress-bar--3 mt--40">
                  <h6 className="heading heading-h6">1.9s Fully Loaded</h6>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.8s"
                      data-wow-delay=".8s"
                      role="progressbar"
                      style={{
                        width: "100%",
                        visibility: "visible",
                        animationDuration: "0.8s",
                        animationDelay: "0.8s",
                        animationName: "fadeInLeft",
                      }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="percent-label">100%</span>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Charts */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="shape-images">
        <img src="/assets/images/icons/wave-icon.png" alt="Wave Images">
    </div> */}
    </div>
  );
}
