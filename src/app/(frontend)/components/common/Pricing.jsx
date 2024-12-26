import { pricingPlans } from "@/data/pricing";
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
                <span className="theme-gradient">Pricing</span>
              </h4>
              <h2 className="title w-600 mb--20">Our Pricing Plan.</h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
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
        <div className="row mt--80">
          <div className="col-lg-6 offset-lg-3 text-center">
            <p className="b3">
              <strong>Note!</strong> Prices may vary from location to location
              due to local taxation laws and <br />
              conversion rates from U.S. Dollars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
