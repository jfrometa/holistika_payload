'use client';
import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { testimonials3 } from '@/data/testimonials';
export default function Testimonials() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />, // Use the custom component here
    nextArrow: <NextArrow />, // Use the custom component here
  };
  return (
    <div className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-lessdark-gradient bg-color-lessdark bg-lessdark-gradient theme-shape rbt-alignwide rainbow-section-gap radius">
              <div className="rbt-inner-alignwide">
                <div className="wrapper template-slider-wrapper">
                  <h2 className="theme-gradient">Testimonial</h2>
                  <h3 className="title">
                    Start with stylish templates that precisely fit your purpose
                  </h3>
                  <p className="description">
                    Templates are clean, neutral and easily adjusted to fit a particular company or
                    purpose. We crash-test designs by making test projects ourselves to ensure that
                    anyone can adapt them. Therefore, we don't use any custom graphics or misleading
                    design patterns.
                  </p>
                </div>
              </div>
              <div className="rbt-inner-alignwide">
                <Slider
                  {...options}
                  className="rainbow-slick-dot testimonial-activation rainbow-slick-arrow slick-arrow-alignwide mt--60"
                >
                  {/* Start single Testimonial */}

                  {/* End single Testimonial */}
                  {testimonials3.map((testimonial, index) => (
                    <div className="testimonial-style-two" key={index}>
                      <div className="row align-items-center row--20">
                        <div className="col-lg-4 col-md-4">
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
                        <div className="col-lg-6 col-md-8">
                          <div className="content mt_sm--40">
                            <span className="form">{testimonial.location}</span>
                            <p className="description">{testimonial.description}</p>
                            <div className="client-info">
                              <h4 className="title">{testimonial.clientName}</h4>
                              <h6 className="subtitle">{testimonial.clientRole}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End single Testimonial */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
