"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="rainbow-video-area rainbow-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="rainbow-gallery icon-center video-gallery-content slider-bg-image bg-image4"
                data-black-overlay={7}
              >
                <div className="overlay-content">
                  <a
                    className="btn-default rounded-player sm-size popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <span>
                      {" "}
                      <i className="feather-play" />{" "}
                    </span>
                  </a>
                  <h3 className="title">
                    Watch the creative process behind <br />
                    the digital marketing.
                  </h3>
                </div>
                <div className="video-lightbox-wrapper" />
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
