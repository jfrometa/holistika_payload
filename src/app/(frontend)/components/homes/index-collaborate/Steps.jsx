import React from "react";
import Image from "next/image";
export default function Steps() {
  return (
    <div className="collaborate-card-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-left sal-animate">
              <h3 className="title mb--20">Say Hi, Doob or just 👋🏾</h3>
            </div>
          </div>
        </div>
        <div className="row row--10">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--20">
            <div className="service service__style--1 variation-2 variation-3 bg-lessdark-gradient radius text-left h-100">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 01</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Join our community</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations variations of passages of Lorem
                  Ipsum available, but the majority have suffered.
                </p>
                <ul className="social-icon social-default justify-content-start mt--30">
                  <li
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={200}
                    className="sal-animate"
                  >
                    <a href="https://www.facebook.com/">
                      <i className="feather-facebook" />
                    </a>
                  </li>
                  <li
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={300}
                    className="sal-animate"
                  >
                    <a href="https://www.twitter.com">
                      <i className="feather-twitter" />
                    </a>
                  </li>
                  <li
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={400}
                    className="sal-animate"
                  >
                    <a href="https://www.instagram.com/">
                      <i className="feather-instagram" />
                    </a>
                  </li>
                  <li
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={500}
                    className="sal-animate"
                  >
                    <a href="https://www.linkdin.com/">
                      <i className="feather-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 col-12 mt--20">
            <div className="service service__style--1 variation-2 variation-3 radius text-left h-100 bg_image bg_image--2">
              <div className="content" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 mt--20">
            <div className="service service__style--1 variation-2 variation-3 bg-lessdark-gradient radius text-left h-100">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 02</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Create a User</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations variations of passages of Lorem
                  Ipsum available, but the majority have suffered.
                </p>
                <div className="mt--30">
                  <Image
                    alt="Corporate React Template"
                    src="/assets/images/icons/shape-11.png"
                    width={987}
                    height={236}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-12 mt--20">
            <div className="service service__style--1 variation-2 variation-3 radius text-left h-100 bg_image bg_image--5">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 03</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Friendly Interface</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
