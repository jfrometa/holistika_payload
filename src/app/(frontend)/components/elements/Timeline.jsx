import React from "react";
import Image from "next/image";
import Link from "next/link";
import { rainbowTimelines, timelines } from "@/data/process";
export default function Timeline() {
  return (
    <div className="main-content">
      {/* Start Timeline-Style-One  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Timeline</span>
                </h4>
                <h2 className="title w-600 mb--20">Working Process One.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rainbow-timeline-wrapper timeline-style-one position-relative">
                <div className="timeline-line" />
                {timelines.map((item, index) => (
                  <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                      <div className="time-line-circle" />
                    </div>
                    <div className="single-content">
                      <div className="inner">
                        <div className="row row--30 align-items-center">
                          <div className="col-lg-6 mt_md--40 mt_sm--40 order-2 order-lg-1">
                            <div className="content">
                              <span className="date-of-timeline">
                                {item.step}
                              </span>
                              <h2
                                className="title"
                                data-sal="slide-up"
                                data-sal-duration={700}
                                data-sal-delay={100}
                              >
                                {item.title}
                              </h2>
                              <p
                                className="description"
                                data-sal="slide-up"
                                data-sal-duration={700}
                                data-sal-delay={200}
                              >
                                {item.description}
                              </p>
                              <div className="row row--30">
                                {item.workingList.map((workItem, workIndex) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-12"
                                    key={workIndex}
                                  >
                                    <div className="working-list">
                                      <h5
                                        className="working-title"
                                        data-sal="slide-up"
                                        data-sal-duration={700}
                                        data-sal-delay={300}
                                      >
                                        {workItem.title}
                                      </h5>
                                      <p
                                        data-sal="slide-up"
                                        data-sal-duration={700}
                                        data-sal-delay={400}
                                      >
                                        {workItem.text}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div
                                className="read-morebtn"
                                data-sal="slide-up"
                                data-sal-duration={700}
                                data-sal-delay={300}
                              >
                                <Link
                                  className="btn-default btn-large round"
                                  href={`/contact`}
                                >
                                  <span>Get Started Now</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail">
                              <Image
                                className="w-100"
                                alt={item.imageAlt}
                                src={item.imageSrc}
                                width={1920}
                                height={2126}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-One  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Timeline-Style-Two  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Timeline</span>
                </h4>
                <h2 className="title w-600 mb--20">Working Process Two.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  {rainbowTimelines.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-3 rainbow-timeline-single"
                    >
                      <div className="rainbow-timeline">
                        <h6
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay}
                        >
                          {item.title}
                        </h6>
                        <div className="progress-line">
                          <div className="line-inner" />
                        </div>
                        <div className="progress-dot">
                          <div className="dot-level">
                            <div className="dot-inner" />
                          </div>
                        </div>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay + 100} // Slight delay for description
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-Two  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Timeline-Style-Three  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Timeline</span>
                </h4>
                <h2 className="title w-600 mb--20">Working Process Three.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  {rainbowTimelines.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-3 rainbow-timeline-single"
                    >
                      <div className="rainbow-timeline">
                        <h6
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay}
                        >
                          {item.title}
                        </h6>
                        <div className="progress-line">
                          <div className="line-inner" />
                        </div>
                        <div className="progress-dot">
                          <div className="dot-level">
                            <div className="dot-inner" />
                          </div>
                        </div>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay + 100} // Slight delay for description
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-Three  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Timeline-Style-Four  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Timeline</span>
                </h4>
                <h2 className="title w-600 mb--20">Working Process Four.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  {rainbowTimelines.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-3 rainbow-timeline-single no-gradient"
                    >
                      <div className="rainbow-timeline">
                        <h6
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay}
                        >
                          {item.title}
                        </h6>
                        <div className="progress-line">
                          <div className="line-inner" />
                        </div>
                        <div className="progress-dot">
                          <div className="dot-level">
                            <div className="dot-inner" />
                          </div>
                        </div>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay + 100} // Slight delay for description
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-Four  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Timeline-Style-Four  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Timeline</span>
                </h4>
                <h2 className="title w-600 mb--20">Working Process Five.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  {rainbowTimelines.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-3 rainbow-timeline-single dark-line"
                    >
                      <div className="rainbow-timeline">
                        <h6
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay}
                        >
                          {item.title}
                        </h6>
                        <div className="progress-line">
                          <div className="line-inner" />
                        </div>
                        <div className="progress-dot">
                          <div className="dot-level">
                            <div className="dot-inner" />
                          </div>
                        </div>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay + 100} // Slight delay for description
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-Four  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
    </div>
  );
}
