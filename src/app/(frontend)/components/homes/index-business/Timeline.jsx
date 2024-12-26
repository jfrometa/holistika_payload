import { rainbowTimelines } from "@/data/process";
import React from "react";

export default function Timeline() {
  return (
    <div className="rainbow-timeline-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Timeline</span>
              </h4>
              <h2 className="title w-600 mb--20">Working Process.</h2>
              <p className="description b1">
                We help our clients succeed by creating brand identities,
                <br />
                digital experiences, and print materials.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mt--50">
            <div className="timeline-style-two bg-color-blackest">
              <div className="row row--0">
                {rainbowTimelines.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-3 rainbow-timeline-single dark-line"
                  >
                    <div className="rainbow-timeline">
                      <h6
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={item.delay}
                      >
                        {item.title}
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner" />
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner" />
                        </div>
                      </div>
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={item.delay + 100} // Slight delay for description
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
