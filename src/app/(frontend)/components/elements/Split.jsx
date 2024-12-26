import React from "react";
import Link from "next/link";
import Image from "next/image";
import { countersData, countersData2 } from "@/data/facts";
import CounterComponent from "../common/Counter";
export default function Split() {
  return (
    <div className="main-content">
      {/* Start Split Style-1 Area  */}
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Split</span>
                </h4>
                <h2 className="title w-600 mb--20">Split Style One</h2>
              </div>
            </div>
          </div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail image-left-content">
                    <Image
                      alt="split Images"
                      src="/assets/images/split/split-01.jpg"
                      width={945}
                      height={709}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      What is DOOB?
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Randomised words which don't look even slightly
                      believable. If you are to use a passage of Lorem Ipsum.
                      You need to be sure there isn't anything embarrassing
                      hidden in the middle of text. in some form, by injectedeed
                      bedhumour, or randomised even.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={350}
                    >
                      <li>- Doug DeMarco, Design Prototyping Manager</li>
                      <li>- 108 million paying subscribers</li>
                      <li>- Over 1.7 billion hours of music played monthly</li>
                      <li>- 4,000+ employees working across 16 offices</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={400}
                    >
                      <Link className="btn-default" href={`/contact`}>
                        Contact With Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Split Style-1 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Split Style-2 Area  */}
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Split</span>
                </h4>
                <h2 className="title w-600 mb--20">Split Style Two</h2>
              </div>
            </div>
          </div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      alt="split Images"
                      src="/assets/images/split/split-02.jpg"
                      width={945}
                      height={709}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      Continue Your Business With Us.
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Randomised words which don't look even slightly
                      believable. If you are to use a passage of Lorem Ipsum.
                      You need to be sure there isn't anything embarrassing
                      hidden in the middle of text. in some form, by injectedeed
                      bedhumour, or randomised even .
                    </p>
                    <div className="row">
                      {countersData2.map((elm, i) => (
                        <div
                          key={i}
                          className="col-lg-6 col-md-6 col-sm-6 col-12"
                        >
                          <div className="count-box counter-style-4 text-left">
                            <div>
                              <div className="count-number">
                                <span className="counter">
                                  {" "}
                                  <CounterComponent max={elm.number} />
                                </span>
                              </div>
                            </div>
                            <h5 className="counter-title">{elm.title}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Split Style-2 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Split Style-3 Area  */}
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Split</span>
                </h4>
                <h2 className="title w-600 mb--20">Split Style Three</h2>
              </div>
            </div>
          </div>
          <div className="rainbow-splite-style bg-color-blackest">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      alt="split Images"
                      src="/assets/images/split/split-03.jpg"
                      width={945}
                      height={709}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      Continue Your Business With Us.
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Randomised words which don't look even slightly
                      believable. If you are to use a passage of Lorem Ipsum.
                      You need to be sure there isn't anything embarrassing
                      hidden in the middle of text. in some form, by injectedeed
                      bedhumour, or randomised even .
                    </p>
                    <div className="row">
                      {countersData2.map((elm, i) => (
                        <div
                          key={i}
                          className="col-lg-6 col-md-6 col-sm-6 col-12"
                        >
                          <div className="count-box counter-style-4 text-left">
                            <div>
                              <div className="count-number">
                                <span className="counter">
                                  {" "}
                                  <CounterComponent max={elm.number} />
                                </span>
                              </div>
                            </div>
                            <h5 className="counter-title">{elm.title}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Split Style-3 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Split Style-4 Area  */}
      <div className="rainbow-split-area rainbow-section-gapTop">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Split</span>
                </h4>
                <h2 className="title w-600 mb--20">Split Style Four</h2>
              </div>
            </div>
          </div>
          <div className="rainbow-splite-style bg-color-blackest">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12 order-2 order-lg-1">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      Continue Your Business With Us.
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Randomised words which don't look even slightly
                      believable. If you are to use a passage of Lorem Ipsum.
                      You need to be sure there isn't anything embarrassing
                      hidden in the middle of text. in some form, by injectedeed
                      bedhumour, or randomised even .
                    </p>
                    <div className="row">
                      {countersData2.map((elm, i) => (
                        <div
                          key={i}
                          className="col-lg-6 col-md-6 col-sm-6 col-12"
                        >
                          <div className="count-box counter-style-4 text-left">
                            <div>
                              <div className="count-number">
                                <span className="counter">
                                  <CounterComponent max={elm.number} />
                                </span>
                              </div>
                            </div>
                            <h5 className="counter-title">{elm.title}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12 order-1 order-lg-2">
                  <div className="thumbnail">
                    <Image
                      alt="split Images"
                      src="/assets/images/split/split-03.jpg"
                      width={945}
                      height={709}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Split Style-4 Area  */}
    </div>
  );
}
