import { pricingPlans } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="rainbow-pricing-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row mb--40 mb_sm--0">
          <div className="col-lg-12">
            <div
              className="section-title-2 text-start"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h2 className="title w-600 mb--20">My Pricing Plan.</h2>
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
  );
}
