import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function FeaturesTab() {
  return (
    <div className="rainbow-tab-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">You can Change Easily</span>
              </h4>
              <h2 className="title w-600 mb--20">Centralized Distribution</h2>
            </div>
          </div>
        </div>
        <div className="row row--30 align-items-center">
          <div className="col-lg-12">
            <div className="rainbow-default-tab style-three">
              <ul
                className="nav nav-tabs tab-button d-flex justify-content-center"
                role="tablist"
              >
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link active"
                    id="service-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#service"
                    type="button"
                    role="tab"
                    aria-controls="service"
                    aria-selected="true"
                  >
                    Smart integrations
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-controls="about"
                    aria-selected="false"
                  >
                    Share the load
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="contact2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact2"
                    type="button"
                    role="tab"
                    aria-controls="contact2"
                    aria-selected="false"
                  >
                    Capture anywhere
                  </button>
                </li>
              </ul>
              <div className="rainbow-tab-content tab-content bg-color-blackest radius pb--0">
                <div
                  className="tab-pane fade show active"
                  id="service"
                  role="tabpanel"
                  aria-labelledby="service-tab"
                >
                  <div className="inner">
                    <div className="row align-items-center g-5">
                      <div className="col-lg-5 col-md-12">
                        <div className="section-title">
                          <h5>
                            <span className="theme-gradient">Our Clients</span>
                          </h5>
                          <h2 className="title">How can we help you?</h2>
                          <p>
                            There are many variations variats of passages of
                            Lorem Ipsum available many variations variats of
                            passages of Lorem Ipsum available.
                          </p>
                          <div className="read-more">
                            <Link
                              className="btn-default btn-small"
                              href="/about"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-6 col-12">
                        <div className="card-box">
                          <div className="inner">
                            <div className="image">
                              <a href="#">
                                <Image
                                  alt="card Images"
                                  src="/assets/images/advance-tab/tab-screen-01.png"
                                  width={1200}
                                  height={877}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="about"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                >
                  <div className="inner">
                    <div className="inner">
                      <div className="row align-items-center row--30">
                        <div className="col-lg-5 col-md-12">
                          <div className="section-title">
                            <h5>
                              <span className="theme-gradient">
                                Our Clients
                              </span>
                            </h5>
                            <h2 className="title">How can we help you?</h2>
                            <p>
                              There are many variations variats of passages of
                              Lorem Ipsum available many variations variats of
                              passages of Lorem Ipsum available.
                            </p>
                            <div className="read-more">
                              <Link
                                className="btn-default btn-small"
                                href="/about"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-6 col-12">
                          <div className="card-box">
                            <div className="inner">
                              <div className="image">
                                <a href="#">
                                  <Image
                                    alt="card Images"
                                    src="/assets/images/advance-tab/tab-screen-01.png"
                                    width={1200}
                                    height={877}
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact2"
                  role="tabpanel"
                  aria-labelledby="contact2-tab"
                >
                  <div className="inner">
                    <div className="row align-items-center row--30">
                      <div className="col-lg-5 col-md-12">
                        <div className="section-title">
                          <h5>
                            <span className="theme-gradient">Our Clients</span>
                          </h5>
                          <h2 className="title">How can we help you?</h2>
                          <p>
                            There are many variations variats of passages of
                            Lorem Ipsum available many variations variats of
                            passages of Lorem Ipsum available.
                          </p>
                          <div className="read-more">
                            <Link
                              className="btn-default btn-small"
                              href="/about"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-6 col-12">
                        <div className="card-box">
                          <div className="inner">
                            <div className="image">
                              <a href="#">
                                <Image
                                  alt="card Images"
                                  src="/assets/images/advance-tab/tab-screen-01.png"
                                  width={1200}
                                  height={877}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
