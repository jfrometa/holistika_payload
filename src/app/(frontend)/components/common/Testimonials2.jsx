import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
export default function Testimonials2() {
  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
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
                <span className="theme-gradient">Client Feedback</span>
              </h4>
              <h2 className="title w-600 mb--20">What People Are Saying.</h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {testimonials.map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={elm.salDelay}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-one style-two">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      alt="Corporate Template"
                      src={elm.imgSrc}
                      width={645}
                      height={645}
                    />
                  </div>
                  <div className="content">
                    <p className="description">{elm.description}</p>
                    <h2 className="title">{elm.title}</h2>
                    <h6 className="subtitle theme-gradient">{elm.subtitle}</h6>
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
