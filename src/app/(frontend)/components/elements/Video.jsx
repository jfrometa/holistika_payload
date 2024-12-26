"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
export default function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="main-content">
        <div className="rainbow-video-popup-area rainbow-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section-title text-center"
                  data-sal="slide-up"
                  data-sal-duration={400}
                  data-sal-delay={150}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">Popup Video</span>
                  </h4>
                  <h2 className="title w-600 mb--20">Video Popup Style.</h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <div className="col-lg-6 col-md-6 col-12 mt--30">
                <div className="video-popup icon-center">
                  <a className="thumbnail">
                    <Image
                      className="radius-small"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-03.jpg"
                      width={1270}
                      height={950}
                    />
                  </a>
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
              <div className="col-lg-6 col-md-6 col-12 mt--30">
                <div className="video-popup icon-center">
                  <div className="thumbnail">
                    <Image
                      className="radius-small"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-04.jpg"
                      width={1270}
                      height={950}
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
            </div>
          </div>
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
