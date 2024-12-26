import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Tab() {
  return (
    <div className="main-content">
      {/* Start tab Style One  */}
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
                <h2 className="title w-600 mb--20">Tab Style One</h2>
              </div>
            </div>
          </div>
          <div className="row row row--30 align-items-center">
            <div className="col-lg-5">
              <Image
                className="radius-small"
                alt="Corporate Template"
                src="/assets/images/tab/tabs-01.jpg"
                width={1000}
                height={720}
              />
            </div>
            <div className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
              <div className="rainbow-default-tab">
                <ul className="nav nav-tabs tab-button" role="tablist">
                  <li className="nav-item tabs__tab" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Strategy
                    </button>
                  </li>
                  <li className="nav-item tabs__tab" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Reporting
                    </button>
                  </li>
                  <li className="nav-item tabs__tab" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Development
                    </button>
                  </li>
                </ul>
                <div className="rainbow-tab-content tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quibusdam ipsa, deleniti soluta minima minus asperiores
                      doloribus enim vitae obcaecati fuga assumenda laudantium
                      nemo odio provident nulla exercitationem tempore corrupti!
                      Nemo.
                    </p>
                    <p>
                      Quibusdam ipsa, deleniti soluta minima minus asperiores
                      doloribus enim vitae obcaecati fuga assumenda laudantium
                      nemo odio provident nulla exercitationem tempore corrupti!
                      Nemo.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <p>
                      Ipsum lorem dolor sit amet consectetur, adipisicing elit.
                      Quibusdam ipsa, deleniti soluta minima minus asperiores
                      doloribus enim vitae obcaecati fuga assumenda laudantium
                      nemo odio provident nulla exercitationem tempore corrupti!
                      Nemo.
                    </p>
                    <p>
                      Ipsa Quibusdam, deleniti soluta minima minus asperiores
                      doloribus enim vitae obcaecati fuga assumenda laudantium
                      nemo odio provident nulla exercitationem tempore corrupti!
                      Nemo.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <p>
                      Exercitationem Ipsum lorem dolor sit amet consectetur,
                      adipisicing elit. Quibusdam ipsa, deleniti soluta minima
                      minus asperiores doloribus enim vitae obcaecati fuga
                      assumenda laudantium nemo odio provident nulla tempore
                      corrupti! Nemo.
                    </p>
                    <p>
                      Ipsa Quibusdam, deleniti soluta minima minus asperiores
                      doloribus enim vitae obcaecati fuga assumenda laudantium
                      nemo odio provident nulla exercitationem tempore corrupti!
                      Nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start tab Style One  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start tab Style Two  */}
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
                <h2 className="title w-600 mb--20">Tab Style Two</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="row row row--30 align-items-center">
              <div className="col-lg-5 order-1 order-lg-2">
                <Image
                  className="radius-small"
                  alt="Corporate Template"
                  src="/assets/images/tab/tabs-02.jpg"
                  width={1000}
                  height={720}
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
                <div className="rainbow-default-tab style-two">
                  <ul className="nav nav-tabs tab-button" role="tablist">
                    <li className="nav-item tabs__tab" role="presentation">
                      <button
                        className="nav-link active"
                        id="irin-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#irin"
                        type="button"
                        role="tab"
                        aria-controls="irin"
                        aria-selected="true"
                      >
                        Strategy
                      </button>
                    </li>
                    <li className="nav-item tabs__tab" role="presentation">
                      <button
                        className="nav-link"
                        id="nipa-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nipa"
                        type="button"
                        role="tab"
                        aria-controls="nipa"
                        aria-selected="false"
                      >
                        Reporting
                      </button>
                    </li>
                    <li className="nav-item tabs__tab" role="presentation">
                      <button
                        className="nav-link"
                        id="supa-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#supa"
                        type="button"
                        role="tab"
                        aria-controls="supa"
                        aria-selected="false"
                      >
                        Development
                      </button>
                    </li>
                  </ul>
                  <div className="rainbow-tab-content tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="irin"
                      role="tabpanel"
                      aria-labelledby="irin-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quibusdam ipsa, deleniti soluta minima minus
                        asperiores doloribus enim vitae obcaecati fuga assumenda
                        laudantium nemo odio provident nulla exercitationem
                        tempore corrupti! Nemo.
                      </p>
                      <p>
                        Quibusdam ipsa, deleniti soluta minima minus asperiores
                        doloribus enim vitae obcaecati fuga assumenda laudantium
                        nemo odio provident nulla exercitationem tempore
                        corrupti! Nemo.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nipa"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <p>
                        Ipsum lorem dolor sit amet consectetur, adipisicing
                        elit. Quibusdam ipsa, deleniti soluta minima minus
                        asperiores doloribus enim vitae obcaecati fuga assumenda
                        laudantium nemo odio provident nulla exercitationem
                        tempore corrupti! Nemo.
                      </p>
                      <p>
                        Ipsa Quibusdam, deleniti soluta minima minus asperiores
                        doloribus enim vitae obcaecati fuga assumenda laudantium
                        nemo odio provident nulla exercitationem tempore
                        corrupti! Nemo.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="supa"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <p>
                        Exercitationem Ipsum lorem dolor sit amet consectetur,
                        adipisicing elit. Quibusdam ipsa, deleniti soluta minima
                        minus asperiores doloribus enim vitae obcaecati fuga
                        assumenda laudantium nemo odio provident nulla tempore
                        corrupti! Nemo.
                      </p>
                      <p>
                        Ipsa Quibusdam, deleniti soluta minima minus asperiores
                        doloribus enim vitae obcaecati fuga assumenda laudantium
                        nemo odio provident nulla exercitationem tempore
                        corrupti! Nemo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start tab Style Two  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start tab Style Three  */}
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
                <h2 className="title w-600 mb--20">Tab Style Three</h2>
              </div>
            </div>
          </div>
          <div className="row row--30 align-items-center">
            <div className="col-lg-12">
              <div className="rainbow-default-tab style-three">
                <ul className="nav nav-tabs tab-button" role="tablist">
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
                      Service
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
                      About
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
                      Contact
                    </button>
                  </li>
                </ul>
                <div className="rainbow-tab-content tab-content">
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
                              Lorem Ipsum available many variations variats of
                              passages of Lorem Ipsum available.
                            </p>
                            <div className="read-more">
                              <a className="btn-default btn-small" href="#">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 mt_md--30 mt_sm--30">
                          <div className="row row--15 mt_dec--30 service-wrapper">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="card-box card-style-1 text-left">
                                <div className="inner">
                                  <div className="image">
                                    <a href={`#`}>
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
                                      <a href={`#`}>Awarded Design</a>
                                    </h4>
                                    <p className="description b1 color-gray mb--0">
                                      There are many variations variats of
                                      passages of Lorem Ipsum available.
                                    </p>
                                    <a
                                      className="btn-default btn-small"
                                      href="#"
                                    >
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
                                      Passages there are many variatin Lorem
                                      Ipsum available have suffered.
                                    </p>
                                    <a
                                      className="btn-default btn-small"
                                      href="#"
                                    >
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
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Libero ea sint nihil corrupti!
                              Harum nemo eius odio.
                            </p>
                            <div className="read-more">
                              <a className="btn-default btn-small" href="#">
                                Read More
                              </a>
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
                                    <a
                                      className="btn-default btn-small"
                                      href="#"
                                    >
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
                                      Passages there are many variatin Lorem
                                      Ipsum available have suffered.
                                    </p>
                                    <a
                                      className="btn-default btn-small"
                                      href="#"
                                    >
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
                                    <a
                                      className="btn-default btn-small"
                                      href="#"
                                    >
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
                                      Passages there are many variatin Lorem
                                      Ipsum available have suffered.
                                    </p>
                                    <Link
                                      className="btn-default btn-small"
                                      href="#"
                                    >
                                      Read More
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <div className="card-box card-style-1 card-testimonial text-left">
                                <div className="inner">
                                  <div className="image">
                                    <Link href="#">
                                      <Image
                                        alt="card Images"
                                        src="/assets/images/services/serviice-01.jpg"
                                        width={590}
                                        height={332}
                                      />
                                    </Link>
                                  </div>
                                  <div className="content">
                                    <h4 className="title mb--20">
                                      <Link href="#">Business Design</Link>
                                    </h4>
                                    <p className="description b1 color-gray mb--0">
                                      Passages there are many variatin Lorem
                                      Ipsum available have.
                                    </p>
                                    <Link
                                      className="btn-default btn-small"
                                      href="#"
                                    >
                                      Read More
                                    </Link>
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
      {/* End tab Style Three  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Advance Tab-1  */}
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
                  <h3 className="title">
                    Your payments are secure, every time
                  </h3>
                  <p className="description">
                    Send, receive, and transform raw data or tokens with any
                    endpoint on the internet using our Reactor and Proxy
                    services.
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
      {/* End Advance Tab-1  */}
    </div>
  );
}
