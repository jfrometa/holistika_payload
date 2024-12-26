'use client';

import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import Slider from 'react-slick';
const sliderData = [
  {
    id: 1,
    title: 'Digital Agency.',
    description:
      'We help our clients succeed by creating brand identities, digital experiences, and print materials.',
    bgImageClass: 'bg_image--6',
  },
  {
    id: 2,
    title: 'Creative Agency.',
    description:
      'We help our clients succeed by creating brand identities, digital experiences, and print materials.',
    bgImageClass: 'bg_image--14',
  },
  {
    id: 3,
    title: 'Startup Agency.',
    description:
      'We help our clients succeed by creating brand identities, digital experiences, and print materials.',
    bgImageClass: 'bg_image--15',
  },
];

export default function Hero() {
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
    <Slider
      {...options}
      className="rainbow-testimonial-area slider-style-4 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {sliderData.map(slider => (
        <div
          key={slider.id}
          className={`single-rainbow-slider height-950 slider-bg-image bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7">
                <div className="inner text-left">
                  <h1 className="title">{slider.title}</h1>
                  <p className="description">{slider.description}</p>
                  <div className="button-group mt--30">
                    <a
                      className="btn-default"
                      target="_blank"
                      href="https://themeforest.net/user/rainbow-themes/portfolio"
                    >
                      PURCHASE NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
