'use client';

import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import React from 'react';
import Slider from 'react-slick';

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
  const slidersData = [
    {
      id: 1,
      backgroundImage: 'bg_image--7',
      title: 'Summer Season.',
      description:
        'We help our clients succeed by creating brand identities,\n digital experiences, and print materials.',
    },
    {
      id: 2,
      backgroundImage: 'bg_image--8',
      title: 'Winter Season.',
      description:
        'We help our clients succeed by creating brand identities,\n digital experiences, and print materials.',
    },
    {
      id: 3,
      backgroundImage: 'bg_image--9',
      title: 'Travel Agency.',
      description:
        'We help our clients succeed by creating brand identities,\n digital experiences, and print materials.',
    },
  ];

  return (
    <Slider
      {...options}
      className="slider-area slider-activation slider-style-4 slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {slidersData.map(slider => (
        <div
          key={slider.id}
          className={`height-850 bg_image ${slider.backgroundImage} d-flex align-items-center`}
          data-black-overlay={5}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h1 className="title">{slider.title}</h1>
                  <p className="description">
                    {slider.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
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
      {/* End Single Slider  */}
    </Slider>
  );
}
