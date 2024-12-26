import { pricingPlans2 } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="rainbow-pricing-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--20 mb_sm--0">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Take a Plan</span>
              </h4>
              <h2 className="title w-600 mb--0">Our Pricing Plan.</h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {pricingPlans2.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
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
  );
}
