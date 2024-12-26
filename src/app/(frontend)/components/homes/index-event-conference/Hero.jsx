"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="slider-area slider-style-6 shape-left inheader-not-transparent height-750">
        <div className="container">
          <div className="row row--30 align-items-center">
            <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="inner text-left">
                <h1 className="title color-white">Doob event conference.</h1>
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
              <div className="video-btn">
                <div className="video-popup icon-center">
                  <div className="overlay-content">
                    <div className="thumbnail">
                      <Image
                        className="radius-small"
                        alt="Corporate Image"
                        src="/assets/images/about/about-6.png"
                        width={850}
                        height={653}
                      />
                    </div>
                    <div className="video-icon">
                      <a
                        className="btn-default rounded-player popup-video"
                        onClick={() => setOpen(true)}
                      >
                        <span>
                          <i className="feather-play" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="video-lightbox-wrapper" />
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
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="tj9-MGHCs38"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
