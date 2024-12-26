"use client";
import React from "react";
import CircularProgress from "../common/CirculerProgress";
import Slider from "react-slick";
import CounterComponent from "../common/Counter";

export default function Services() {
  const options = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    adaptiveHeight: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="service-feature-area rainbow-section-gapBottom rainbow-section-gap">
      <div className="container">
        <div className="col-lg-12">
          <div className="section-title text-center has-section-before-title">
            <h2
              className="title w-600 mb--20 text-light-white"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={300}
            >
              <span className="theme-gradient">TL;DR</span> of Doob
            </h2>
          </div>
        </div>
        <div className="row row--15">
          <div className="col-xl-3 col-md-6 col-12">
            <div className="single-service-box performance-box">
              <div className="inner">
                <div className="top-section">
                  <CircularProgress
                    barColor="#5AB26E"
                    tracColor="#BAF2C8"
                    textColor="#5AB26E"
                    percent={97}
                    width={120}
                    height={120}
                  />
                  <div className="badge">
                    <span className="text">A+</span>
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="bottom-section">
                  <div className="title">
                    Ultra High <span className="gray">Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <div className="single-service-box service-elements-box">
              <div className="title">
                <span className="gradient theme-gradient">
                  <span className="count counter">
                    <CounterComponent max={100} />
                  </span>
                  <span className="icon">+</span>
                </span>
                <span className="white">Elements</span>
                <span className="light-white">included.</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 col-12">
            <div className="single-service-box design-collection-box">
              <div className="title">
                <span className="light-white theme-gradient">
                  <i className="feather-zap" />
                </span>
                <span className="white">Huge Design</span>
                <span className="light-white">Collection</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--15 justify-content-center">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row row--15">
              <div className="col-md-6 col-sm-12 col-12">
                <div className="single-service-box support-box">
                  <div className="rotate-title">
                    <div className="title">
                      <span className="white">Fast &amp; Friendly</span>
                      <span className="white"> Support</span>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-01.png"
                      alt="Women"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="single-service-box author-box">
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-02.png"
                      alt="AWARDED"
                    />
                  </div>
                  <div className="bottom">
                    <div className="title">
                      <span className="light-white small mb--8">
                        Developed by
                      </span>
                      <span className="white">Elite Author.</span>
                      <span className="icon extra-small">
                        <img
                          src="/assets/images/featured-service/arrow-bottom.svg"
                          alt="arrow"
                        />
                      </span>
                      <span className="light-white extra-small">
                        Rainbow-Themes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-12">
                <div className="single-service-box creative-box-one">
                  <div className="bottom">
                    <div className="title">
                      <span className="gradient theme-gradient">Free</span>
                      <span className="white">Corporate</span>
                      <span className="light-white">Identity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row row--15">
              <div className="col-md-12">
                <div className="single-service-box banner-box">
                  <div className="dots-grp">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="logo">
                    <img
                      src="/assets/images/featured-service/logo.png"
                      alt=""
                    />
                  </div>
                  <ul className="feature-list">
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>{" "}
                      <span className="text">Free future template updates</span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>{" "}
                      <span className="text">Premium bundled plugins</span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>{" "}
                      <span className="text">Quality checked by Envato</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="single-service-box creative-box-two">
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/award.png"
                      alt="Top"
                    />
                  </div>
                  <div className="title d-flex">
                    <span className="white">Top</span>
                    <span className="light-white ml--10">New File</span>
                  </div>
                  <div className="icon-img">
                    <img
                      src="/assets/images/featured-service/themeforest.png"
                      alt="Themeforest"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="single-service-box creative-box-three">
                  <div className="icon-img">
                    <img
                      src="/assets/images/featured-service/image-05.png"
                      alt="Top"
                    />
                  </div>
                  <div className="title">
                    <span className="white">Start Selling</span>
                    <span className="light-white">Online</span>
                  </div>
                  <div className="cart-image">
                    <img
                      src="/assets/images/featured-service/cart-icon.png"
                      alt="Cart Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-7 col-sm-12 col-12">
            <div className="single-service-box slider-box">
              <Slider
                {...options}
                className="slider-section slick-grid-15 mobile-layout-activation"
              >
                <div className="single-slider slide-single-layout">
                  <div className="section-title text-left">
                    <div className="theme-gradient">All Devices</div>
                    <div className="title text-left">
                      <span className="white medium">
                        Mobile First <br />
                        Design
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-03.png"
                      alt="Mobile-Layout"
                    />
                  </div>
                </div>
                <div className="single-slider slide-single-layout">
                  <div className="section-title text-left">
                    <div className="theme-gradient">All Devices</div>
                    <div className="title text-left">
                      <span className="white medium">
                        Mobile First <br />
                        Design
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-03.png"
                      alt="Mobile-Layout"
                    />
                  </div>
                </div>
                <div className="single-slider slide-single-layout">
                  <div className="section-title text-left">
                    <div className="theme-gradient">All Devices</div>
                    <div className="title text-left">
                      <span className="white medium">
                        Mobile First <br />
                        Design
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-03.png"
                      alt="Mobile-Layout"
                    />
                  </div>
                </div>
                <div className="single-slider slide-single-layout">
                  <div className="section-title text-left">
                    <div className="theme-gradient">All Devices</div>
                    <div className="title text-left">
                      <span className="white medium">
                        Mobile First <br />
                        Design
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="/assets/images/featured-service/image-03.png"
                      alt="Mobile-Layout"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
