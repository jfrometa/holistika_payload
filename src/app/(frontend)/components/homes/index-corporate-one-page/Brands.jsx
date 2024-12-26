'use client';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import Slider from 'react-slick';
import { testimonials3 } from '@/data/testimonials';
import { brandImages } from '@/data/brands';

export default function Brands() {
  const option = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    // adaptiveHeight: true,
    cssEase: 'linear',
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
  const options2 = {
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
    <div className="rainbow-brand-area rainbow-section-gap scrollSpySection" id="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">We’re excited about Doob Template.</h2>
              <p className="description b1">There are many variations of passages.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--40">
            <Slider {...option} className="advance-brand brand-carousel-init rainbow-slick-arrow">
              {brandImages.slice(0, 8).map((image, index) => (
                <li key={index}>
                  <a href="#">
                    <Image alt={image.alt} src={image.src} width={232} height={110} />
                  </a>
                </li>
              ))}
            </Slider>
          </div>
        </div>
        <Slider
          {...options2}
          className="row rainbow-slick-dot rainbow-slick-arrow testimonial-activation mt--60"
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
