"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../common/SliderArrows";
import { brandImages } from "@/data/brands";
export default function Brands() {
  const option = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="main-content">
      {/* Start Brand Style-1  */}
      <div className="rainbow-brand-area rainbow-section-gap">
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
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
                <h2 className="title w-600 mb--20">Brand Style One.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--40">
              <ul className="brand-list brand-style-1">
                {brandImages.slice(0, 8).map((image, index) => (
                  <li key={index}>
                    <a href="#">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        width={232}
                        height={110}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-2  */}
      <div className="rainbow-brand-area rainbow-section-gap">
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
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
                <h2 className="title w-600 mb--20">Brand Style Two.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2">
                {brandImages.map((image, index) => (
                  <li key={index}>
                    <a href="#">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        width={232}
                        height={110}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Style-2  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-3  */}
      <div className="rainbow-brand-area rainbow-section-gap">
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
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
                <h2 className="title w-600 mb--20">Brand Style Three.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2">
                {brandImages.slice(0, 9).map((image, index) => (
                  <li key={index}>
                    <a href="#">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        width={232}
                        height={110}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Style-3  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-4  */}
      <div className="rainbow-brand-area rainbow-section-gap">
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
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
                <h2 className="title w-600 mb--20">Brand Style Four.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2 variation-2">
                {brandImages.slice(0, 7).map((image, index) => (
                  <li key={index}>
                    <a href="#">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        width={232}
                        height={110}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Style-4  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-3  */}
      <div className="rainbow-brand-area rainbow-section-gap">
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
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
                <h2 className="title w-600 mb--20">Brand Style Three.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <Slider
                {...option}
                className="brand-list brand-carousel-activation rainbow-slick-arrow rainbow-slick-dot mb--40"
              >
                {brandImages.slice(0, 8).map((image, index) => (
                  <li key={index}>
                    <a href="#">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        width={232}
                        height={110}
                      />
                    </a>
                  </li>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Style-3  */}
    </div>
  );
}
