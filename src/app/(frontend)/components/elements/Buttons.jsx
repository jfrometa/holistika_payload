"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Buttons() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="main-content">
        {/* Start Button-1 Area  */}
        <div className="rainbow-button-area rainbow-section-gap">
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title mb--50">
                  <h4 className="subtitle">
                    <span className="theme-gradient">Easily switchable</span>
                  </h4>
                  <h2 className="title w-600">Button Sizes</h2>
                </div>
                <div className="button-group">
                  <a className="btn-default btn-small" href="#">
                    Button Solid
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default" href="#">
                    Button Solid
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-large" href="#">
                    Button Solid{" "}
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-extra-large" href="#">
                    Button Solid
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                <div className="section-title mb--50">
                  <h4 className="subtitle">
                    <span className="theme-gradient">Include Borders</span>
                  </h4>
                  <h2 className="title w-600">Outlined Buttons</h2>
                </div>
                <div className="button-group">
                  <a className="btn-default btn-small btn-border" href="#">
                    Button Solid
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-border" href="#">
                    Button Solid
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-large btn-border" href="#">
                    Button Solid
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a
                    className="btn-default btn-extra-large btn-border"
                    href="#"
                  >
                    Button Solid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Button-1 Area  */}
        {/* Start Seperator Area  */}
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        {/* End Seperator Area  */}
        {/* Start Button Icons Area  */}
        <div className="rainbow-button-area rainbow-section-gap">
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title mb--50">
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Easily switchable icon
                    </span>
                  </h4>
                  <h2 className="title w-600">Button Sizes</h2>
                </div>
                <div className="button-group">
                  <a className="btn-default btn-small" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-large" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-extra-large" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                <div className="section-title mb--50">
                  <h4 className="subtitle">
                    <span className="theme-gradient">Include Icon</span>
                  </h4>
                  <h2 className="title w-600">Outlined Buttons</h2>
                </div>
                <div className="button-group">
                  <a className="btn-default btn-small btn-border" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-border" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a className="btn-default btn-large btn-border" href="#">
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
                <div className="button-group mt--20">
                  <a
                    className="btn-default btn-extra-large btn-border"
                    href="#"
                  >
                    Button Solid <i className="feather-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Button Icons Area  */}
        {/* Start Seperator Area  */}
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        {/* End Seperator Area  */}
        {/* Start Button Variation Area  */}
        <div className="rainbow-button-area rainbow-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-left mb--50">
                  <h4 className="subtitle">
                    <span className="theme-gradient">Button Extra</span>
                  </h4>
                  <h2 className="title w-600">Button Variation</h2>
                </div>
                <div className="button-group">
                  <a className="btn-default text-underline" href="#">
                    <span>View More</span>
                  </a>
                  <a className="btn-read-more" href="#">
                    <span>View More</span>
                  </a>
                  <a className="btn-default round" href="#">
                    <span>View More</span>
                  </a>
                  <a className="btn-default square" href="#">
                    <span>View More</span>
                  </a>
                  <a
                    className="btn-default rounded-player popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <span>
                      <i className="feather-play" />
                    </span>
                  </a>
                  <a
                    className="btn-default rounded-player popup-video border"
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
        {/* End Button Variation Area  */}
      </div>{" "}
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
