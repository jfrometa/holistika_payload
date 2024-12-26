import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
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
                <span className="theme-gradient">Business Stratagy</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Our Business Stratagy Here.
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--30 align-items-center">
          <div className="col-lg-12">
            <div className="rainbow-default-tab style-three">
              <ul className="nav nav-tabs tab-button" id="myTab" role="tablist">
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
                    Stategy
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
                    Development
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
                    Reporting
                  </button>
                </li>
              </ul>
              <div
                className="rainbow-tab-content tab-content"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="service"
                  role="tabpanel"
                  aria-labelledby="service-tab"
                >
                  <div className="inner">
                    <div className="row align-items-center row--30">
                      <div className="col-lg-4">
                        <div className="section-title">
                          <h4 className="title">How can we help you?</h4>
                          <p>
                            There are many variations variats of passages of
                            Lorem Ipsum available variations variats of passages
                            of Lorem Ipsum available.
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
                      <div className="col-lg-8 mt_md--30 mt_sm--30">
                        <div className="row row--15 mt_dec--30 service-wrapper">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-01.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">Awarded Design</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    There are many variations variats of
                                    passages of Lorem Ipsum available.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-02.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">Design &amp; Creative</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    Passages there are many variatin Lorem Ipsum
                                    available have suffered.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
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
                <div
                  className="tab-pane fade"
                  id="about"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                >
                  <div className="inner">
                    <div className="row align-items-center row--30">
                      <div className="col-lg-4">
                        <div className="section-title">
                          <h4 className="title">Whice Service Provided?</h4>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Libero ea sint nihil corrupti! Harum nemo eius
                            odio.
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
                      <div className="col-lg-8 mt_md--30 mt_sm--30">
                        <div className="row row--15 mt_dec--30 service-wrapper">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 card-testimonial text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-01.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">App Development</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    There are many variations variats of
                                    passages of Lorem Ipsum available.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 card-testimonial text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-02.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">Business Design</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    Passages there are many variatin Lorem Ipsum
                                    available have suffered.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
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
                <div
                  className="tab-pane fade"
                  id="contact2"
                  role="tabpanel"
                  aria-labelledby="contact2-tab"
                >
                  <div className="inner">
                    <div className="row align-items-center row--30">
                      <div className="col-lg-12">
                        <div className="row row--15 mt_dec--30 service-wrapper">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 card-testimonial text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-02.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">App Development</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    There are many variations variats of
                                    passages of Lorem Ipsum available.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 card-testimonial text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-02.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">Business Design</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    Passages there are many variatin Lorem Ipsum
                                    available have suffered.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-box card-style-1 card-testimonial text-left">
                              <div className="inner">
                                <div className="image">
                                  <a href="#">
                                    <Image
                                      alt="card Images"
                                      src="/assets/images/services/serviice-01.jpg"
                                      width={590}
                                      height={332}
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4 className="title mb--20">
                                    <a href="#">Business Design</a>
                                  </h4>
                                  <p className="description b1 color-gray mb--0">
                                    Passages there are many variatin Lorem Ipsum
                                    available have.
                                  </p>
                                  <a className="btn-default btn-small" href="#">
                                    Read More
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
      </div>
    </div>
  );
}
