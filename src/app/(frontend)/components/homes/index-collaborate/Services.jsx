import { services5, services6 } from "@/data/service";
import React from "react";

export default function Services() {
  return (
    <div className="rbt-feature-area rainbow-section-gap">
      <div className="container">
        {/* Start Feature Header Top  */}
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title max-width-800 text-left sal-animate">
              <h2 className="title w-600 mb--20">
                Creators think we're the <br />
                new <i>Cool</i>. Here's why;
              </h2>
            </div>
          </div>
        </div>
        {/* End Feature Header Top  */}
        {/* Start Feature Service  */}
        <div className="row g-5">
          {/* Start Single Service  */}
          {services6.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              key={index}
            >
              <div className="service service__style--1 text-left service-bg-transparent">
                <div className="icon">
                  <i className={`${service.iconClass} theme-gradient`} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href={service.href}>{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Service  */}
        </div>
        {/* End Feature Service  */}
      </div>
    </div>
  );
}
