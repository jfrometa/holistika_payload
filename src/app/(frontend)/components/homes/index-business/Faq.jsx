import React from "react";
import Image from "next/image";
export default function Faq() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-5">
            <div
              className="thumbnail"
              data-sal="slide-right"
              data-sal-duration={700}
            >
              <Image
                className="w-100"
                alt="About Images"
                src="/assets/images/about/about-1.png"
                width={543}
                height={642}
              />
            </div>
          </div>
          <div
            className="col-lg-7 mt_md--40 mt_sm--40"
            data-sal="slide-left"
            data-sal-duration={700}
          >
            <div className="content">
              <div className="section-title">
                <h4 className="subtitle">
                  <span className="theme-gradient">WORKFLOW INTEGRATION </span>
                </h4>
                <h2 className="title mb--40">Companies Platform.</h2>
              </div>
              <div className="rainbow-accordion-style accordion">
                <div className="accordion" id="accordionExamplea">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingOne"
                    >
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
                        You can run doob easily. First You'll need to have node
                        and npm on your machine. So Please open your command
                        prompt then check. Goes To Your your command prompt.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo"
                    >
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
                        After purchasing the product need you any support you
                        can be share with us with sending mail to
                        rainbowit10@gmail.com.
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
                        Yes, We will get update the Trydo. And you can get it
                        any time. Next time we will comes with more feature. You
                        can be get update for unlimited times. Our dedicated
                        team works for update.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How can I run doob html template?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        You can run doob easily. First You'll need to have node
                        and npm on your machine. So Please open your command
                        prompt then check your node -v and npm -v Version. Goes
                        To Your your command prompt: then First: npm install At
                        Last: npm run start. By the following way you can be run
                        your project easily.
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
