import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  cardItems,
  services,
  services11,
  services12,
  servicesEight,
  servicesGallery,
  servicesStyle1,
} from "@/data/service";
export default function Service() {
  return (
    <div className="main-content">
      {/* Start Service__Style--1 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={index}
                data-sal="slide-up"
                data-sal-delay={service.delay}
                data-sal-duration={800}
              >
                <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      {service.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service__Style--1 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-2 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={index}
                data-sal="slide-up"
                data-sal-delay={service.delay}
                data-sal-duration={800}
              >
                <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border">
                  <div className="icon">
                    <i className={service.icon} />{" "}
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      {service.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service-2 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-3 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={item.salDelay}
              >
                <div className="card-box card-style-1 text-left">
                  <div className="inner">
                    <div className="image">
                      <a href="#">
                        <Image
                          alt={item.imgAlt}
                          src={item.imgSrc}
                          width={590}
                          height={332}
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h4 className="title mb--20">
                        <a href="#">{item.title}</a>
                      </h4>
                      <p className="description b1 color-gray mb--0">
                        {item.description}
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
      {/* End Service-3 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-4 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services11.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={service.salDelay}
              >
                <div className="service service__style--2 text-center">
                  <div className="inner">
                    <div className="image">
                      <Image
                        alt={service.imgAlt}
                        src={service.imgSrc}
                        width={service.imgWidth}
                        height={service.imgHeight}
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
      {/* End Service-4 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-5 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={index}
                data-sal="slide-up"
                data-sal-delay={service.delay}
                data-sal-duration={800}
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
                      {service.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Start Service-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-6 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services12.map((service, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={service.salDelay}
              >
                <div className="service service__style--1 icon-circle-style with-working-process text-center">
                  <div className="icon">
                    <div className="line" />
                    {service.number}
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
            ))}
          </div>
        </div>
      </div>
      {/* End Service-6 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-7 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {servicesGallery.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
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
                        src={service.imgSrc}
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
      {/* End Service-7 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Service-8 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 service-wrapper">
            {servicesEight.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={service.salDelay}
              >
                <div className="service service-eight text-left">
                  <div className="inner d-flex">
                    <div className="image">
                      <Image
                        alt="card Images"
                        src={service.imgSrc}
                        width={service.imgWidth}
                        height={service.imgHeight}
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">{service.title}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service-8 Area  */}
      {/* Start Service-8 Area  */}
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
                  Services provide for you.
                </h2>
                <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          {/* Start Feature Service  */}
          <div className="row g-5">
            {servicesStyle1.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              >
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className={service.iconClass} />
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
            {/* End Single Service  */}
          </div>
          {/* End Feature Service  */}
        </div>
      </div>
      {/* End Service-8 Area  */}
    </div>
  );
}
