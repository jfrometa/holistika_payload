import React from "react";
import Image from "next/image";
import { testimonials2 } from "@/data/testimonials";
export default function Collaborators() {
  return (
    <div className="collaborate-testimonial-area">
      <div className="container">
        <div className="bg-color-lessdark bg-lessdark-gradient theme-shape rbt-alignwide rainbow-section-gap radius">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <div className="section-title text-center sal-animate">
                  <h3 className="title mb--20">
                    Creators love us! ❤️ Hear what they have to say.
                  </h3>
                  <p>Read feedbacks from top creatives on Doob.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {testimonials2.map((elm, i) => (
                <div
                  key={i}
                  className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                  data-sal="slide-up"
                  data-sal-duration={elm.salDelay}
                >
                  <div className="rainbow-box-card card-style-default testimonial-style-one">
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
                        <h6 className="subtitle theme-gradient">
                          {elm.subtitle}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
