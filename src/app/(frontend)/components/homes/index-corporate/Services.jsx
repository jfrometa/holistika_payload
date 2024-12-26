import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services7 } from "@/data/service";
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
          {services7.map((card) => (
            <div
              key={card.id}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={card.delay}
            >
              <div className="card-box card-style-1 text-left">
                <div className="inner">
                  <div className="image">
                    <a href="#">
                      <Image
                        alt="card Images"
                        src={card.image}
                        width={590}
                        height={332}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title mb--20">
                      <a href="#">{card.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      {card.description}
                    </p>
                    <Link
                      className="btn-default btn-small btn-border"
                      href={`/service`}
                    >
                      Read More
                    </Link>
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
