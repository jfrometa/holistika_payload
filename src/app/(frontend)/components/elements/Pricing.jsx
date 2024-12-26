import { pricingPlans, pricingPlans2 } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="main-content">
      {/* Start Pricing Style-1  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--40 mb_sm--0">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">Pricing Style One.</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div
                  className={`rainbow-pricing ${plan.isActive ? "active" : ""}`}
                >
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">{plan.title}</h4>
                      <div className="pricing">
                        <div className="price-wrapper">
                          <span className="currency">$</span>
                          <span className="price">{plan.price}</span>
                        </div>
                        <span className="subtitle">{plan.subtitle}</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <i className="feather-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className={`btn-default ${
                          plan.isActive ? "" : "btn-border"
                        }`}
                        href="#"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Pricing Style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Pricing Style-2  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--40 mb_sm--0">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">Pricing Style Two.</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div
                  className={`rainbow-pricing style-2 ${
                    plan.isActive ? "active" : ""
                  }`}
                >
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">{plan.title}</h4>
                      <div className="pricing">
                        <div className="price-wrapper">
                          <span className="currency">$</span>
                          <span className="price">{plan.price}</span>
                        </div>
                        <span className="subtitle">{plan.subtitle}</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <i className="feather-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className={`btn-default ${
                          plan.isActive ? "" : "btn-border"
                        }`}
                        href="#"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Pricing Style-2  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Pricing Style-3  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--40 mb_sm--0">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">Pricing Style Three.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="row row--0">
                {pricingPlans2.slice(0, 2).map((plan, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-12">
                    <div
                      className={`rainbow-pricing style-2 ${
                        plan.active ? "active" : ""
                      }`}
                    >
                      <div className="pricing-table-inner">
                        <div className="pricing-header">
                          <h4 className="title">{plan.title}</h4>
                          <div className="pricing">
                            <div className="price-wrapper">
                              <span className="currency">$</span>
                              <span className="price">{plan.price}</span>
                            </div>
                            <span className="subtitle">{plan.subtitle}</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <ul className="list-style--1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx}>
                                <i className="feather-check" /> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pricing-footer">
                          <a
                            className={`btn-default ${
                              plan.active ? "" : "btn-border"
                            }`}
                            href="#"
                          >
                            Purchase Now
                          </a>
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
      {/* End Pricing Style-3 */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Pricing Style-4  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="wrapper plr--100 plr_md--15 plr_sm--15">
          <div className="row mb--40 mb_sm--0">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">Pricing Style Four.</h2>
              </div>
            </div>
          </div>
          <div className="row row--0">
            {pricingPlans.map((plan, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div
                  className={`rainbow-pricing style-4 ${
                    plan.isActive ? "active" : ""
                  }`}
                >
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">{plan.title}</h4>
                      <div className="pricing">
                        <div className="price-wrapper">
                          <span className="currency">$</span>
                          <span className="price">{plan.price}</span>
                        </div>
                        <span className="subtitle">{plan.subtitle}</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <i className="feather-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className={`btn-default ${
                          plan.isActive ? "" : "btn-border"
                        }`}
                        href="#"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Pricing Style-4  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Pricing Style-5  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--40 mb_sm--0">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">Pricing Style Five.</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            {pricingPlans2.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div
                  className={`rainbow-pricing style-5 ${
                    plan.active ? "active" : ""
                  }`}
                >
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">{plan.title}</h4>
                      <div className="pricing">
                        <div className="price-wrapper">
                          <span className="currency">$</span>
                          <span className="price">{plan.price}</span>
                        </div>
                        <span className="subtitle">{plan.subtitle}</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="feather-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className={`btn-default ${
                          plan.active ? "" : "btn-border"
                        }`}
                        href="#"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Pricing Style-5  */}
    </div>
  );
}
