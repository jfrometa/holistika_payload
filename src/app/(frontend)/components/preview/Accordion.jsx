import Image from "next/image";
import React from "react";

export default function Accordion() {
  return (
    <div
      className="rainbow-accordion-area preview-accordion-area rainbow-section-gap pb--60"
      id="faqs"
    >
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row row--30">
          <div className="col-lg-8 col-sm-12">
            <div
              className="section-title text-start mb--60"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <div className="client-image mb--20">
                <Image
                  alt="Group Images"
                  src="/assets/images/icons/group-image.png"
                  width={168}
                  height={52}
                />
              </div>
              <h4 className="subtitle">
                <span className="theme-gradient">Have a Question?</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Check out our FAQ section <br />
                to see if we can help.
              </h2>
            </div>
            <div className="rainbow-accordion-style accordion">
              <div className="accordion" id="accordionExamplea">
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Doob ? How does it work?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      Welcome to Doob Portfolio and Multi Purpose Template Built
                      With React Nextjs. It works too much faster loading speed
                      and you can works too much comfortability.Doob create your
                      website so much faster, use to use and Well Documented
                      Codes for your customization.
                    </div>
                  </div>
                </div>
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can I get the customer support?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      After purchasing the product need you any support you can
                      be share with us with sending mail to{" "}
                      <a href="https://support.rainbowit.net/support/login">
                        https://support.rainbowit.net/support/login
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I get update regularly and For how long do I get
                      updates?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      Yes, We will get update the Histudy. And you can get it
                      any time. Next time we will comes with more feature. You
                      can be get update for unlimited times. Our dedicated team
                      works for update.
                    </div>
                  </div>
                </div>
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I change any Elements as I like?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      Yes, You can change any Elements as you like. And By the
                      way you can build your website which you are choose.
                    </div>
                  </div>
                </div>
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I build a complete project with this template?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      Yes, Why not. You can build a project and complete website
                      as you are like.More component are available include in
                      this templete. And you can be use it following
                      documentation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt--80 mt_md--40 mt_sm--40">
            {/* Start Single Service Box  */}
            <div className="service service__style--1 bg-color-blackest radius text-start rbt-border-none">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="content">
                <h4 className="title w-600">
                  <a href="#">Online Documentation</a>
                </h4>
                <p className="description b1 color-gray mb--20">
                  Well organized and up to date
                </p>
                <div className="doc-btn">
                  <a className="btn-default btn-small btn-border" href="#">
                    Online Documentation
                  </a>
                </div>
              </div>
            </div>
            {/* End Single Service Box  */}
            {/* Start Single Service Box  */}
            <div className="service service__style--1 bg-color-blackest radius text-start rbt-border-none mt--30 support">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-headphones"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="content">
                <h4 className="title w-600">
                  <a
                    target="_blank"
                    href="https://support.rainbowit.net/support/login"
                  >
                    Dedicated Support
                  </a>
                </h4>
                <p className="description b1 color-gray mb--20">
                  Need support ? Submit a ticket. We will be happy to assist
                  you.
                </p>
                <div className="doc-btn">
                  <a
                    className="btn-default btn-small btn-border"
                    target="_blank"
                    href="https://support.rainbowit.net/support/login"
                  >
                    Get Support
                  </a>
                </div>
                <ul className="liststyle">
                  <li>
                    <span>Support Time:</span> Monday – Friday
                  </li>
                  <li>
                    <span>Response Time:</span> Maximum 24 hours
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Service Box  */}
          </div>
        </div>
      </div>
    </div>
  );
}
