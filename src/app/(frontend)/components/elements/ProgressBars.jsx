"use client";

import { progressData } from "@/data/progress";
import { useEffect } from "react";
import ProgressLine from "../common/ProgressLine";
import CirculerProgress from "../common/CirculerProgress";

export default function ProgressBars() {
  return (
    <div className="main-content">
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-1  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-left">
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Colors, percentage types.
                  </span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style One</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-progress-style-1 mt--10">
                {progressData.map((elm, i) => (
                  <div key={i} className="single-progress">
                    <h6 className="title">{elm.title}</h6>
                    <div className="progress">
                      <ProgressLine
                        progress={elm.value}
                        className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
                      />
                      <span className="progress-number">{elm.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-2  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-left">
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Theme Color, Round Types.
                  </span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style Two</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-progress-style-1 mt--10">
                {progressData.map((elm, i) => (
                  <div key={i} className="single-progress">
                    <h6 className="title">{elm.title}</h6>
                    <div className="progress">
                      <ProgressLine
                        progress={elm.value}
                        className={`progress-bar wow fadeInLeft `}
                      />
                      <span className="progress-number">{elm.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-2  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-gradient  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-left">
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Colors, percentage types.
                  </span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style Three</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-progress-style-1 mt--10">
                {progressData.map((elm, i) => (
                  <div key={i} className="single-progress">
                    <h6 className="title">{elm.title}</h6>
                    <div className="progress">
                      <ProgressLine
                        progress={elm.value}
                        className={`progress-bar wow fadeInLeft bar-gradiand`}
                      />
                      <span className="progress-number">{elm.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-gradient */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-large  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Colors, percentage types.
                  </span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style Four</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-progress-style-1 mt--10">
                {progressData.map((elm, i) => (
                  <div key={i} className="single-progress large-size no-radius">
                    <h6 className="title">{elm.title}</h6>
                    <div className="progress">
                      <ProgressLine
                        progress={elm.value}
                        className={`progress-bar wow fadeInLeft`}
                      />
                      <span className="progress-number">{elm.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-large  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-large  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Circle, Theme Color.</span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style Five</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 mt_dec--30">
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#059DFF"
                      tracColor="#0f0f11"
                      percent={80}
                    />

                    <div className="circle-info">
                      <h4 className="title">Design</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#059DFF"
                      tracColor="#0f0f11"
                      percent={60}
                    />
                    <div className="circle-info">
                      <h4 className="title">Photoshop</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#059DFF"
                      tracColor="#0f0f11"
                      percent={70}
                    />
                    <div className="circle-info">
                      <h4 className="title">Application</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#059DFF"
                      tracColor="#0f0f11"
                      percent={95}
                    />
                    <div className="circle-info">
                      <h4 className="title">Development</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-large  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start progress style-large  */}
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Circle, Theme Color.</span>
                </h4>
                <h2 className="title w-600 mb--20">Progressbar Style Six</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            <div className="col-lg-10 offset-lg-1">
              <div className="row mt_dec--30">
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-12 col-sm-6 mt--30">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#FB5343"
                      tracColor="#0f0f11"
                      percent={80}
                    />
                    <div className="circle-info">
                      <h4 className="title">Design</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-12 col-sm-6 mt--30">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#E33FA1"
                      tracColor="#0f0f11"
                      percent={60}
                    />
                    <div className="circle-info">
                      <h4 className="title">Photoshop</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-12 col-sm-6 mt--30">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#6549D5"
                      tracColor="#0f0f11"
                      percent={70}
                    />
                    <div className="circle-info">
                      <h4 className="title">Application</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
                {/* Start Single Progress Bar  */}
                <div className="col-lg-3 col-md-6 col-12 col-sm-6 mt--30">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor="#36C6F0"
                      tracColor="#0f0f11"
                      percent={95}
                    />
                    <div className="circle-info">
                      <h4 className="title">Development</h4>
                      <h6 className="subtitle">Presentation your skill</h6>
                    </div>
                  </div>
                </div>
                {/* End Single Progress Bar  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End progress style-large  */}
    </div>
  );
}
