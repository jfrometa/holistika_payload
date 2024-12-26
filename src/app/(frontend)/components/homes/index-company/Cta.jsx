import React from "react";

export default function Cta() {
  return (
    <div className="service-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <h3 className="title" data-sal="slide-up" data-sal-duration={700}>
                We are creative digital agency working for our company brands.
              </h3>
            </div>
          </div>
          <div className="col-lg-6" data-sal="slide-up" data-sal-duration={700}>
            <p className="mb--10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quis. Ullam accusantium dignissimos repellendus nemo fugiat
              numquam, nisi odio adipisci. Veniam neque itaque expedita officiis
              rem ipsa! Ratione, rem reiciendis?
            </p>
            <div className="readmore-btn">
              <a className="btn-read-more" href="#">
                <span>View More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
