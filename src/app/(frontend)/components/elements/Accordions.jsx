import React from "react";

export default function Accordions() {
  return (
    <div className="main-content">
      {/* Start Accordion-1 Area  */}
      <div className="rainbow-accordion-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Accordion</span>
                </h4>
                <h2 className="title w-600 mb--20">Customize All</h2>
              </div>
            </div>
          </div>
          <div className="row mt--35 row--20">
            <div className="col-lg-10 offset-lg-1">
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
                        prompt then check your node -v and npm -v Version. Goes
                        To Your your command prompt: then First: npm install At
                        Last: npm run start. By the following way you can be run
                        your project easily.
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
      {/* End Accordion-1 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Accordion-2 Area  */}
      <div className="rainbow-accordion-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Accordion</span>
                </h4>
                <h2 className="title w-600 mb--20">Customize All</h2>
              </div>
            </div>
          </div>
          <div className="row mt--35 row--20">
            <div className="col-lg-10 offset-lg-1">
              <div className="rainbow-accordion-style rainbow-accordion-02 accordion">
                <div className="accordion" id="accordionExampleb">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingFive"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        What is Doob ? How does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExampleb"
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
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingSix"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How can I get the customer support?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExampleb"
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
                      id="headingSeven"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Can I get update regularly and For how long do I get
                        updates?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExampleb"
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
                      id="headingEight"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        How can I run doob html template?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExampleb"
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
      {/* End Accordion-2 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Accordion-3 Area  */}
      <div className="rainbow-accordion-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Accordion</span>
                </h4>
                <h2 className="title w-600 mb--20">Customize All</h2>
              </div>
            </div>
          </div>
          <div className="row mt--35 row--20">
            <div className="col-lg-10 offset-lg-1">
              <div className="rainbow-accordion-style rainbow-accordion-03 accordion">
                <div className="accordion" id="accordionExamplec">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingNine"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="true"
                        aria-controls="collapseNine"
                      >
                        What is Doob ? How does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionExamplec"
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
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTen"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        How can I get the customer support?
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionExamplec"
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
                      id="headingEleven"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                        Can I get update regularly and For how long do I get
                        updates?
                      </button>
                    </h2>
                    <div
                      id="collapseEleven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEleven"
                      data-bs-parent="#accordionExamplec"
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
                      id="headingTwelve"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwelve"
                        aria-expanded="false"
                        aria-controls="collapseTwelve"
                      >
                        How can I run doob html template?
                      </button>
                    </h2>
                    <div
                      id="collapseTwelve"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwelve"
                      data-bs-parent="#accordionExamplec"
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
      {/* End Accordion-3 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Accordion-4 Area  */}
      <div className="rainbow-accordion-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Accordion</span>
                </h4>
                <h2 className="title w-600 mb--20">Customize All</h2>
              </div>
            </div>
          </div>
          <div className="row mt--35 row--20">
            <div className="col-lg-10 offset-lg-1">
              <div className="rainbow-accordion-style rainbow-accordion-04 accordion">
                <div className="accordion" id="accordionExampled">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingFive"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        What is Doob ? How does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExampled"
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
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingSix"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How can I get the customer support?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExampled"
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
                      id="headingSeven"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Can I get update regularly and For how long do I get
                        updates?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExampled"
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
                      id="headingEight"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        How can I run doob html template?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExampled"
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
      {/* End Accordion-4 Area  */}
    </div>
  );
}
