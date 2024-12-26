'use client';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import Slider from 'react-slick';
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
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
              <h2 className="title w-600 mb--20">Our Clients Feedback.</h2>
              <p className="description b1">
                We provide company and finance service for <br />
                startups and company business.
              </p>
            </div>
          </div>
        </div>
        <Slider
          {...options}
          className="rainbow-slick-dot rainbow-slick-arrow testimonial-activation mb--60"
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
  );
}
