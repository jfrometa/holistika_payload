'use client';

import { NextArrow, PrevArrow } from '@/ui/common/SliderArrows';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
export default function About() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="about-area about-style-4 rainbow-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <div className="section-title">
                  <h4 className="subtitle">
                    <span className="theme-gradient">Security, Simplicity, Easiness</span>
                  </h4>
                  <h2 className="title mb--25 w-600">
                    Doob specializes in small
                    <span className="theme-gradient">Application Services.</span>
                  </h2>
                </div>
                <div className="about-inner">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here,
                  </p>
                </div>
                <div className="about-btn mt--30">
                  <Link className="btn-default" href="/about">
                    About Our Doob
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="about-app-thumbnail">
              <Slider
                {...options}
                className="about-app-activation rainbow-slick-dot rainbow-slick-arrow"
              >
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/advance-tab/phone-01.png"
                    width={550}
                    height={576}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/advance-tab/phone-02.png"
                    width={550}
                    height={576}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    className="radius-small"
                    alt="Corporate Image"
                    src="/assets/images/advance-tab/phone-03.png"
                    width={550}
                    height={576}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
