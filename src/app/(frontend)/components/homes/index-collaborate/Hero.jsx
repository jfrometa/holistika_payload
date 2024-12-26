import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="slider-area rainbow-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-sm-12 order-2 order-lg-1">
            <div className="inner collaborate text-left">
              <h1 className="display-two">
                Showcase. <br />
                Connect. <br />
                Collaborate.
              </h1>
              <p className="description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="button-group">
                <Link className="btn-default" href="/login">
                  Get Started
                </Link>
                <Link className="btn-default btn-border" href="/login">
                  Login Portal
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 order-1 order-lg-2">
            <div className="thumbnail">
              <Image
                alt="image-slider"
                src="/assets/images/about/banner-shape-image-02.png"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
