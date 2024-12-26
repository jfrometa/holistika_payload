import React from "react";
import Image from "next/image";
import { services8 } from "@/data/service";
export default function Service() {
  return (
    <div className="rainbow-service-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title-2 text-start"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h2 className="title w-600 mb--20">My Recent Works.</h2>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {services8.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={service.salDuration}
              data-sal-delay={service.salDelay}
            >
              <div className="service gallery-style text-left">
                <div className="inner">
                  <div className="content">
                    <h4 className="title">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p className="description">{service.description}</p>
                  </div>
                  <div className="image">
                    <Image
                      alt="card Images"
                      src={service.imageSrc}
                      width={service.width}
                      height={service.height}
                    />
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
