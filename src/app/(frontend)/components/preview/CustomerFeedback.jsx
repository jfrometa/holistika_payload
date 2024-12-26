import { testimonials } from "@/data/preview";
import Image from "next/image";
import React from "react";

export default function CustomerFeedback() {
  return (
    <div className="rainbow-testimonial-area rainbow-section-gap-bottom">
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">
                  OUR FANTASTIC ENVATO CUSTOMERS REVIEWS
                </span>
              </h4>
              <h2 className="title w-600 mb--20">Customer feedback</h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-one style-two border-gradient">
                <div className="inner">
                  <div className="content">
                    <div className="rating">
                      <Image
                        alt=""
                        src={testimonial.ratingSrc}
                        width={2048}
                        style={{ width: "fit-content" }}
                        height={547}
                      />
                    </div>
                    <p className="description">{testimonial.description}</p>
                    <h2 className="title">{testimonial.title}</h2>
                    <h6 className="subtitle theme-gradient">
                      {testimonial.subtitle}
                    </h6>
                    <div className="author-envato-image pb--10">
                      <Image
                        className="envato-white"
                        alt="Envato"
                        src={testimonial.envatoWhiteSrc}
                        width={758}
                        height={144}
                      />
                      <Image
                        className="envato-black"
                        alt="Envato"
                        src={testimonial.envatoBlackSrc}
                        width={2500}
                        height={474}
                      />
                    </div>
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
