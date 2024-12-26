"use client";
import { demoItems } from "@/data/preview";
import Image from "next/image";
import Link from "next/link";
import { NextArrow, PrevArrow } from "../common/SliderArrows";
import Slider from "react-slick";

export default function InnerPages2() {
  const options = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    // adaptiveHeight: false,
    cssEase: "linear",
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className="rainbow-demo-area rainbow-section-gapBottom "
      id="inner-pages"
    >
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-color-lessdark bg-lessdark-gradient theme-shape rbt-alignwide pt--80 pb--60 radius">
              <div className="rbt-inner-alignwide">
                <div className="wrapper template-slider-wrapper mb--60">
                  <div className="section-title text-center">
                    <h4
                      className="subtitle d-block sal-animate"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      <span className="theme-gradient">Inner Pages</span>
                    </h4>
                    <h2
                      className="title w-600 mb--20 sal-animate"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Complete set of inner pages.
                    </h2>
                    <p
                      className="b1 sal-animate"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={400}
                    >
                      Have a nice inner pages include in doob Theme.
                    </p>
                  </div>
                </div>
                {/* Start main Template Slider  */}
                <Slider
                  {...options}
                  className="single-demo-slider rainbow-slick-arrow slick-grid-15 rainbow-slick-dot slick-initialized slick-slider slick-dotted"
                >
                  {demoItems.map((item, index) => (
                    <div className="slide-single-layout" key={index}>
                      <div className="single-demo">
                        <Link target="_blank" href={item.href}>
                          <div className="thumbnail">
                            <Image
                              className="image-dark"
                              alt={`${item.title} Image`}
                              src={item.imgDark}
                              width={570}
                              height={555}
                            />
                            <Image
                              className="image-light"
                              alt={`${item.title} Light Image`}
                              src={item.imgLight}
                              width={570}
                              height={555}
                            />
                            {item.isNew && (
                              <span className="label-badge">New</span>
                            )}
                          </div>
                        </Link>
                        <h4 className="title">
                          <Link target="_blank" href={item.href}>
                            {item.title}
                          </Link>
                        </h4>
                        <div className="dots">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                {/* <div className="row row--15 service-wrapper rbt-inner-alignwide pt--90">
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                    data-sal="slide-up"
                    data-sal-duration={700}
                  >
                    <div className="service service__style--1 radius text-center plr--40">
                      <div className="icon">
                        <i className="feather-target" />
                      </div>
                      <div className="content">
                        <h5 className="title w-600">
                          Selectively Import Content
                        </h5>
                        <p className="description b1 color-gray mb--0">
                          Import only the necessary content without replacing
                          your current pages or configurations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={100}
                  >
                    <div className="service service__style--1 radius text-center plr--40">
                      <div className="icon">
                        <i className="feather-edit-2" />
                      </div>
                      <div className="content">
                        <h5 className="title w-600">
                          Global Fonts &amp; Colors
                        </h5>
                        <p className="description b1 color-gray mb--0">
                          With our Design System, you have the flexibility to
                          easily tailor any demonstration.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={200}
                  >
                    <div className="service service__style--1 radius text-center plr--40">
                      <div className="icon">
                        <i className="feather-download-cloud" />
                      </div>
                      <div className="content">
                        <h5 className="title w-600">Easy Setup</h5>
                        <p className="description b1 color-gray mb--0">
                          Easily set up your project structure and components in
                          one click with prebuilt demos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* End main Template Slider  */}
              </div>
              {/* Start Service Area  */}

              {/* End Service Area  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
