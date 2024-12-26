import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="slider-area slider-style-1 variation-3 bg-transparent rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="display-two">
                You'll enjoy using this <br />
                website building tool.
              </h1>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Start Tab Area  */}
            <div className="rainbow-default-tab style-two rbt-alignwide">
              <div className="rbt-inner-alignwide pb--60">
                <ul
                  className="nav nav-tabs tab-button justify-content-center mb--50"
                  role="tablist"
                >
                  <li className="nav-item tabs__tab" role="presentation">
                    <button
                      className="nav-link"
                      id="irin-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#irin"
                      type="button"
                      role="tab"
                      aria-controls="irin"
                      aria-selected="false"
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
                      className="nav-link active"
                      id="supa-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#supa"
                      type="button"
                      role="tab"
                      aria-controls="supa"
                      aria-selected="true"
                    >
                      Development
                    </button>
                  </li>
                </ul>
                <div className="rainbow-tab-content tab-content text-center rainbow-no-padding">
                  <div
                    className="tab-pane fade active show"
                    id="irin"
                    role="tabpanel"
                    aria-labelledby="irin-tab"
                  >
                    <div className="thambnail">
                      <Image
                        className="radius"
                        alt="tab"
                        src="/assets/images/tab/tab-rbt-3.png"
                        width={1440}
                        height={849}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nipa"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="thambnail">
                      <Image
                        className="radius"
                        alt="tab"
                        src="/assets/images/tab/tab-rbt-2.png"
                        width={1440}
                        height={849}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="supa"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="thambnail">
                      <Image
                        className="radius"
                        alt="tab"
                        src="/assets/images/tab/tab-rbt-1.png"
                        width={1440}
                        height={849}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt--60 text-center">
                  <Link
                    className="btn-default btn-large btn-border"
                    href="/login"
                  >
                    Create your free account{" "}
                    <i className="feather-arrow-right" />
                  </Link>
                  <p className="mt--30 mb--0 text-white">
                    <b>DOOB</b> is free to use. It’s not a trial version.
                    <br />
                    No credit card is required
                  </p>
                </div>
              </div>
            </div>
            {/* End Tab Area  */}
          </div>
        </div>
      </div>
    </div>
  );
}
