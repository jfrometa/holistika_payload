"use client";

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../common/SliderArrows";
import Image from "next/image";
import { testimonials, testimonials3 } from "@/data/testimonials";
export default function Testimonials() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />, // Use the custom component here
    nextArrow: <NextArrow />, // Use the custom component here
  };
  return (
    <div className="main-content">
      {/* Start Testimonial Style One  */}
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
                <h2 className="title w-600 mb--20">Testimonial Style One.</h2>
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
      {/* End Testimonial Style One  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Testimonial Style Two  */}
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
                <h2 className="title w-600 mb--20">Testimonial Style Two.</h2>
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
      {/* End Testimonial Style Two  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Testimonial Style Two  */}
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
                <h2 className="title w-600 mb--20">Testimonial Style Three.</h2>
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
                <div className="rainbow-box-card card-style-default testimonial-style-one style-two border-gradient">
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
      {/* End Testimonial Style Two  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Testimonial Style Three  */}
      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--20">
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
                <h2 className="title w-600 mb--20">Testimonial Style Four.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--30">
              <div className="testimonial-style-two">
                <div className="row align-items-center row--20">
                  <div className="col-lg-6 col-md-8 offset-lg-1 order-2 order-md-1">
                    <div className="content">
                      <span className="form">Poland</span>
                      <p className="description">
                        What I am primarily looking for with new projects is a
                        fit on both a visual and aesthetic level as well as on a
                        personal level with the client.
                      </p>
                      <div className="client-info">
                        <h4 className="title">John Due</h4>
                        <h6 className="subtitle">App Developer</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 order-1 order-md-2">
                    <div className="thumbnail">
                      <Image
                        className="w-100"
                        alt="Corporate Template"
                        src="/assets/images/testimonial/testimonial-dark-01.jpg"
                        width={918}
                        height={928}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial Style Three  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start testimonial Four */}
      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--20">
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
                <h2 className="title w-600 mb--20">Testimonial Style Five.</h2>
              </div>
            </div>
          </div>
          <Slider
            {...options}
            className="row rainbow-slick-dot rainbow-slick-arrow testimonial-activation"
          >
            {testimonials3.map((testimonial, index) => (
              <div className="col-lg-12" key={index}>
                {/* Start single Testimonial */}
                <div className="testimonial-style-two">
                  <div className="row align-items-center row--20">
                    <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                      <div className="content mt_sm--40">
                        <span className="form">{testimonial.location}</span>
                        <p className="description">{testimonial.description}</p>
                        <div className="client-info">
                          <h4 className="title">{testimonial.clientName}</h4>
                          <h6 className="subtitle">{testimonial.clientRole}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 order-md-2 col-lg-4 col-md-4">
                      <div className="thumbnail">
                        <Image
                          className="w-100"
                          alt={testimonial.imgAlt}
                          src={testimonial.imgSrc}
                          width={testimonial.imgWidth}
                          height={testimonial.imgHeight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End single Testimonial */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* End testimonial Four  */}
    </div>
  );
}
