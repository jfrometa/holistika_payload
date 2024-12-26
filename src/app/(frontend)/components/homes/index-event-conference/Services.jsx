import React from "react";
import Image from "next/image";
import { serviceData2 } from "@/data/service";
export default function Services() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
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
                <span className="theme-gradient">What we can do for you</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Main Goal Our Event Conference.
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {serviceData2.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={service.salDuration}
              data-sal-delay={service.salDelay || 0} // Default to 0 if not provided
            >
              <div className="service service__style--2 text-center">
                <div className="inner">
                  <div className="image">
                    <Image
                      alt="card Images"
                      src={service.imageSrc}
                      width={service.width}
                      height={service.height}
                      style={{ width: "fit-content" }}
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
