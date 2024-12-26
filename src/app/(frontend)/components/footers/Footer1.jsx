import React from "react";
import Link from "next/link";
import { socialLinksWithSal } from "@/data/footerLinks";
export default function Footer1() {
  return (
    <div className="footer-style-3">
      <div className="rainbow-callto-action rainbow-call-to-action style-8 content-wrapper">
        <div className="container">
          <div className="row row--0 align-items-center">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content text-center">
                  <h2 className="title">
                    Ready to start creating a <br />
                    standard website?
                  </h2>
                  <h6 className="subtitle">
                    Finest choice for your home &amp; office
                  </h6>
                  <div className="call-to-btn text-center mt--30">
                    <a
                      className="btn-default btn-icon"
                      target="_blank"
                      href="https://themeforest.net/user/rainbow-themes/portfolio"
                    >
                      Purchase Doob{" "}
                      <i className="icon feather-arrow-right"> </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area copyright-style-one variation-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-7 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <Link href={`/privacy-policy`}>Privacy Policy</Link>
                  </li>
                  <li>
                    <a href="#">Terms And Condition</a>
                  </li>
                  <li>
                    <Link href={`/contact`}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 mt_sm--20">
              <div className="copyright-center text-center">
                <ul className="social-icon social-default color-lessdark justify-content-center">
                  {socialLinksWithSal.map((link, index) => (
                    <li
                      key={index}
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={link.salDelay}
                    >
                      <a href={link.href}>
                        <i className={link.iconClass} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  © Copyright All rights reserved{" "}
                  <a
                    target="_blank"
                    className="rainbow-themes-link"
                    href="https://themeforest.net/user/rainbow-themes/portfolio"
                  >
                    Rainbow-Themes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
