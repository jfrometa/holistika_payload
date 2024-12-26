import React from "react";
import Image from "next/image";
export default function CaseStudies() {
  return (
    <div className="rainbow-advance-tab-area rainbow-section-gap">
      <div className="container">
        {/* Start Section Title  */}
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title text-center sal-animate">
              <h4 className="subtitle">
                <span className="theme-gradient">Case Study</span>
              </h4>
              <h2 className="title w-600">
                Use your data without touching it.
              </h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Title  */}
        {/* Start tab  */}
        <div
          className="advance-tab-four bg-color-blackest theme-shape"
          data-tabs="true"
        >
          <div className="row row--30 gy-5">
            {/* Start tab Button  */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 d-flex flex-column justify-content-between order-2 order-lg-1">
              <div className="advance-tab-top">
                <h5 className="subtitle">
                  <span className="theme-gradient">Step 01</span>
                </h5>
                <h3 className="title">Your payments are secure, every time</h3>
                <p className="description">
                  Send, receive, and transform raw data or tokens with any
                  endpoint on the internet using our Reactor and Proxy services.
                </p>
              </div>
              <div className="advance-tab-bottom">
                <div className="advance-tab-button advance-tab-button-1">
                  <ul
                    className="nav nav-tabs tab-button-list"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button tab-with-icon bg-color-white-off active"
                        id="case-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#case"
                        role="tab"
                        aria-controls="case"
                        aria-selected="true"
                      >
                        <div className="tab">
                          <div className="icon">
                            <i className="feather-zap" />
                          </div>
                          <div className="content">
                            <h4 className="title">Online Verification</h4>
                            <p className="description">
                              Use Doob template you can build a corporate
                              website a short time.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button tab-with-icon bg-color-white-off"
                        id="casetabtwo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#casetabtwo"
                        role="tab"
                        aria-controls="casetabtwo"
                        aria-selected="false"
                      >
                        <div className="tab">
                          <div className="icon">
                            <i className="feather-zap" />
                          </div>
                          <div className="content">
                            <h4 className="title">Homescreen Widget</h4>
                            <p className="description">
                              Use Doob template you can build a corporate
                              website a short time.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End tab Button  */}
            {/* Start tab Content  */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
              <div className="tab-content">
                <div
                  className="tab-pane fade show advance-tab-content-1 bg-primary-gradient radius active"
                  id="case"
                  role="tabpanel"
                  aria-labelledby="case-tab"
                >
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      alt="advance-tab-image"
                      src="/assets/images/advance-tab/tab-4.png"
                      width={1000}
                      height={1060}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade advance-tab-content-1 bg-primary-gradient radius"
                  id="casetabtwo"
                  role="tabpanel"
                  aria-labelledby="casetabtwo-tab"
                >
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      alt="advance-tab-image"
                      src="/assets/images/advance-tab/tab-5.png"
                      width={1000}
                      height={1060}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End tab Content  */}
          </div>
        </div>
        {/* End tab  */}
        {/* Start Service Box  */}
        <div className="row row--20">
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration={700}
          >
            <div className="service service__style--1 bg-color-blackest radius mt--40 text-left overflow-hidden">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 02</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Friendly Interface</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations variations of passages of Lorem
                  Ipsum available, but the majority have suffered.
                </p>
              </div>
              <div className="service-thumbnail-offset bg-primary-gradient mt--40">
                <Image
                  alt="image"
                  src="/assets/images/advance-tab/tab-7.png"
                  width={575}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration={700}
          >
            <div className="service service__style--1 bg-color-blackest radius mt--40 text-left overflow-hidden">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 03</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Powerful Settings</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div className="service-thumbnail-offset bg-primary-gradient mt--40">
                <Image
                  alt="image"
                  src="/assets/images/advance-tab/tab-6.png"
                  width={575}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Box  */}
      </div>
    </div>
  );
}
