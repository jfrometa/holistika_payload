"use client";
import React from "react";
import Link from "next/link";
import { footerSections, socialLinks } from "@/data/footerLinks";
export default function Footer2() {
  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {footerSections.map((section, index) => (
              <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={index}>
                <div className="rainbow-footer-widget">
                  <h4 className="title">{section.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Stay With Us.</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    2000+ Our clients are subscribe Around the World
                  </h6>
                  <ul className="social-icon social-default justify-content-start">
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
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-area rainbow-newsletter-default">
        <div className="container">
          <div className="row row--0 newsletter-wrapper align-items-center border-top-bottom">
            <div className="col-lg-4">
              <div className="newsletter-section-title">
                <h3 className="title">Stay up to Date</h3>
                <p className="description">
                  Don't miss the latest Doob news, update and trend.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                className="rainbow-newsletter mt_md--20 mt_sm--20"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <button className="btn-default">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area copyright-style-one no-border">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-right text-center text-md-right">
                <p className="copyright-text">
                  © Doob {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
