import { countersData, countersData2 } from "@/data/facts";
import React from "react";
import CounterComponent from "../common/Counter";

export default function Counter() {
  return (
    <div className="main-content">
      {/* Start Main Counter up-1 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
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
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData2.map((elm, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
              >
                <div className="count-box counter-style-1 text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Main Counter up-1 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Main Counter Up Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
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
                  <span className="theme-gradient">Clients Feedback.</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Global Clients Around the World.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="count-box counter-style-2 text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                  <p className="description">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter Up Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Main Counter up-3 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={200}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="count-box counter-style-2 color-variation text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                  <p className="description">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter up-3 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Main Counter up-4 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={200}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="count-box counter-style-2 border-style text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        {" "}
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                  <p className="description">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter up-4 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Main Counter up-5 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData2.map((elm, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <div className="count-box counter-style-4 text-center">
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
      {/* End Main Counter up-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Main Counter Up-6 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
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
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="count-box counter-style-2 text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        {" "}
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                  <p className="description">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter Up-6 Area  */}
    </div>
  );
}
