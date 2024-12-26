import React from "react";
import Image from "next/image";
import { serviceData } from "@/data/service";
export default function Service() {
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
              <h2 className="title w-600 mb--20">Services provide for you.</h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {serviceData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              key={index}
            >
              <div className="service gallery-style text-left">
                <div className="inner">
                  <div className="content">
                    <h4 className="title">
                      <a href="#">{item.title}</a>
                    </h4>
                    <p className="description">{item.description}</p>
                  </div>
                  <div className="image">
                    <Image
                      alt=""
                      src={item.imageSrc}
                      width={1600}
                      height={992}
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
