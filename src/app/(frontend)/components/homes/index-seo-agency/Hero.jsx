import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="slider-area slider-style-6 shape-right height-750">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
            <div className="inner text-start">
              <h1 className="title color-white">
                Trending <br />
                Business
              </h1>
              <p className="description color-white">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <div className="button-group mt--30 mt_sm--20">
                <a
                  className="btn-default btn-medium btn-icon btn-border"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Purchase Now <i className="icon feather-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail">
              <Image
                alt="Banner Images"
                src="/assets/images/banner/banenr-image-02.png"
                width={745}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shape-image">
        <Image
          alt="Banner Images"
          src="/assets/images/banner/white-shape.svg"
          width={608}
          height={760}
        />
      </div>
    </div>
  );
}
