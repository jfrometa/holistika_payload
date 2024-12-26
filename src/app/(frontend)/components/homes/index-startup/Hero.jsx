'use client';

import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import Link from 'next/link';
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
  const sliderData = [
    {
      id: 1,
      bgImageClass: 'bg_image--12',
      title: 'Startup Your\n Business Agency.',
      description:
        'We help our clients succeed by creating brand identities,\ndigital experiences, and print materials.',
    },
    {
      id: 2,
      bgImageClass: 'bg_image--18',
      title: 'Startup Your\n Creative Agency.',
      description:
        'We help our clients succeed by creating brand identities,\ndigital experiences, and print materials.',
    },
  ];

  return (
    <Slider
      {...options}
      className="slider-area slider-style-4 variation-2 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {sliderData.map(slider => (
        <div
          key={slider.id}
          className={`height-950 bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
          data-black-overlay={5}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h1 className="title">
                    {slider.title.split('\n')[0]}

                    <br />
                    {slider.title.split('\n')[1]}
                  </h1>
                  <p className="description">
                    {slider.description.split('\n')[0]}
                    <br />
                    {slider.description.split('\n')[1]}
                  </p>
                  <div className="button-group mt--30">
                    <Link className="btn-default btn-large round" href="/login">
                      Get started now
                    </Link>
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
