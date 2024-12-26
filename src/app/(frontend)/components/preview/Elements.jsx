import React from "react";

export default function Elements() {
  return (
    <div className="rn-gallery-area rainbow-section-gapBottom ">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center text-white">
            <h2
              className="title sal-animate"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={200}
            >
              Say Hello To <br />
              <span className="theme-gradient">Doob Elements</span>
            </h2>
            <p
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={300}
              className="sal-animate"
            >
              Total design freedom for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt--20 mt_sm--20">
        <div className="col-lg-12">
          <div className="thumbnai">
            <img
              className="w-100"
              src="/assets/images/bg/gallery.png"
              alt="Gallery Images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
