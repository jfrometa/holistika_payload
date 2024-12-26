import React from 'react';
import Link from 'next/link';
import TyperComponent from '@/ui/common/TyperComponent';
export default function Faq() {
  return (
    <div className="rainbow-company-mission-are rainbow-section-gap">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-6">
            <div className="mission-title" data-sal="slide-up" data-sal-duration={800}>
              <h2 className="title">
                Unique Mission <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent strings={['Finance.', 'Consulting.', 'Agency.']} />
                  </span>
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quaerat dolore
                laboriosam ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit
                deserunt saepe, velit sapiente obcaecati? Vitae, iusto delectus?
              </p>
              <p>
                Consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos,
                laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente
                obcaecati? Vitae, iusto delectus?
              </p>
              <div className="read-more-btn mt--50">
                <Link className="btn-default btn-icon" href={`/about`}>
                  Learn More <i className="icon feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div
              className="rainbow-accordion-style accordion"
              data-sal="slide-up"
              data-sal-duration={800}
            >
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
                      You can run doob easily. First You'll need to have node and npm on your
                      machine. So Please open your command prompt then check your node.
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
                      After purchasing the product need you any support you can be share with us
                      with sending mail to rainbowit10@gmail.com.
                    </div>
                  </div>
                </div>
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I get update regularly and For how long do I get updates?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExamplea"
                  >
                    <div className="accordion-body card-body">
                      Yes, We will get update the Trydo. And you can get it any time. Next time we
                      will comes with more feature.
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
                      You can run doob easily. First You'll need to have node and npm on your
                      machine. So Please open your command prompt then check your node -v and npm -v
                      Version.
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
