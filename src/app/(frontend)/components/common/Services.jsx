import { services } from "@/data/service";
import React from "react";

export default function Services() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row row--15 service-wrapper">
          {services.map((service, index) => (
            <div
              key={index}
              data-sal="slide-up"
              data-sal-delay={service.delay}
              data-sal-duration={800}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
