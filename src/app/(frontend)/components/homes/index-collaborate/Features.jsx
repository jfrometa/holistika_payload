"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
export default function Features() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*Start Section Two Area  */}
      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  alt="image-slider"
                  src="/assets/images/about/banner-shape-image-06.png"
                  width={531}
                  height={472}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">
                  Have all your <br />
                  projects in one place
                </h3>
                <p className="description">
                  One of the biggest challenges lab managers face when
                  renovating an occupied lab is protecting current operations.
                  Learn more about considerations for renovating a working lab
                  and six tips for success.
                </p>
                <div className="button-group">
                  <a
                    className="btn-collaborate-play popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <i className="feather-play" />
                    <span>See how it works</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Section Two Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/*Start Section Three Area  */}
      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">New Laboratory Startups</h3>
                <p className="description">
                  Through clinical laboratory tests, healthcare providers can
                  diagnose specific diseases or conditions, monitor patient
                  health, and make decisions for patient care.
                </p>
                <div className="button-group">
                  <a
                    className="btn-collaborate-play popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <i className="feather-play" />
                    <span>See how it works</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  alt="image-slider"
                  src="/assets/images/about/banner-shape-image-05.png"
                  width={531}
                  height={472}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Section Three Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/*Start Section Four Area  */}
      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  alt="image-slider"
                  src="/assets/images/about/banner-shape-image-04.png"
                  width={543}
                  height={641}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">
                  Successfully Renovating An Occupied Lab
                </h3>
                <p className="description">
                  While there are 18 areas of lab business that are most
                  targeted by the OIG, CMS, and DOJ for investigation, most lab
                  investigations will focus on one of the seven mentioned.
                </p>
                <div className="button-group">
                  <a
                    className="btn-collaborate-play popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <i className="feather-play" />
                    <span>See how it works</span>
                  </a>
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
      />
    </>
  );
}
