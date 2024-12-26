"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerSections } from "@/data/footerLinks";
export default function Footer4() {
  return (
    <footer className="rainbow-footer footer-style-default footer-style-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      className="logo-light"
                      alt="Corporate Logo"
                      src="/assets/images/logo/logo.png"
                      width={288}
                      height={100}
                    />
                    <Image
                      className="logo-dark"
                      alt="Corporate Logo"
                      src="/assets/images/logo/logo-dark.png"
                      width={288}
                      height={100}
                    />
                  </Link>
                </div>
                <h3 className="text-big">
                  Create Website By Doob So Quick Download And Make Your Site.
                </h3>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Company</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[0].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Solutions</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[1].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Company</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[2].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Solutions</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[3].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Newsletter</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    2000+ Our clients are subscribe Around the World
                  </h6>
                  <form
                    className="newsletter-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group">
                      <input type="email" placeholder="Enter Your Email Here" />
                    </div>
                    <div className="form-group">
                      <button className="btn-default" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
