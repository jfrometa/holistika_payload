import React from "react";
import Image from "next/image";
export default function Services() {
  return (
    <div className="rainbow-advance-tab-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4 className="subtitle">
                <span className="theme-gradient">Our Service</span>
              </h4>
              <h2 className="title w-600 mb--20">Our Awesome Service.</h2>
            </div>
          </div>
        </div>
        <div className="row row--30">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active advance-tab-content-1"
                id="home-2"
                role="tabpanel"
                aria-labelledby="home-tab-2"
              >
                <div className="thumbnail">
                  <Image
                    alt="advance-tab-image"
                    src="/assets/images/advance-tab/tabs-04.jpg"
                    width={1000}
                    height={720}
                  />
                </div>
              </div>
              <div
                className="tab-pane fade advance-tab-content-1"
                id="profile-2"
                role="tabpanel"
                aria-labelledby="profile-tab-2"
              >
                <div className="thumbnail">
                  <Image
                    alt="advance-tab-image"
                    src="/assets/images/advance-tab/tabs-02.jpg"
                    width={1000}
                    height={720}
                  />
                </div>
              </div>
              <div
                className="tab-pane fade advance-tab-content-1"
                id="contact-2"
                role="tabpanel"
                aria-labelledby="contact-tab-2"
              >
                <div className="thumbnail">
                  <Image
                    alt="advance-tab-image"
                    src="/assets/images/advance-tab/tabs-03.jpg"
                    width={1000}
                    height={720}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
            <div className="advance-tab-button advance-tab-button-1 right-align">
              <ul
                className="nav nav-tabs tab-button-list"
                id="myTab-2"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    href="#"
                    className="nav-link tab-button active tabs__tab--selected"
                    id="home-tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#home-2"
                    role="tab"
                    aria-controls="home-2"
                    aria-selected="true"
                  >
                    <div className="tab">
                      <h4 className="title">Market Researce.</h4>
                      <p className="description">
                        Use Doob template you can build a corporate website a
                        short time.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#"
                    className="nav-link tab-button tabs__tab--selected"
                    id="profile-tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-2"
                    role="tab"
                    aria-controls="profile-2"
                    aria-selected="false"
                  >
                    <div className="tab">
                      <h4 className="title">Corporate Report.</h4>
                      <p className="description">
                        Use Doob template you can build a corporate website a
                        short time.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#"
                    className="nav-link tab-button tabs__tab--selected"
                    id="contact-tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-2"
                    role="tab"
                    aria-controls="contact-2"
                    aria-selected="false"
                  >
                    <div className="tab">
                      <h4 className="title">App Development.</h4>
                      <p className="description">
                        Use Doob template you can build a corporate website a
                        short time.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
