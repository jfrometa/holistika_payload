import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="slider-area slider-style-3 height-850">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
            <div className="inner text-left">
              <h1 className="title theme-gradient">
                Trending <br />
                Business
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <div className="button-group mt--30 mt_sm--20">
                <a
                  className="btn-default btn-medium btn-icon"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Purchase Now <i className="icon feather-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 order-lg-2 col-lg-5">
            <div className="thumbnail">
              <Image
                alt="Banner Images"
                src="/assets/images/about/about-2.png"
                width={700}
                height={960}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
