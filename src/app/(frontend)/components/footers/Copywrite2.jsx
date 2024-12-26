import React from "react";
import Link from "next/link";
import { socialLinks } from "@/data/footerLinks";
export default function Copywrite2() {
  return (
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
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <i className={link.iconClass} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
            <div className="copyright-right text-center text-lg-right">
              <p className="copyright-text">
                Copyright All rights reserved © {new Date().getFullYear()} Doob
                React Template.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
