'use client';
utlis;
import Link from 'next/link';
import React, { useEffect } from 'react';
import ModeSwitcher from '../common/ModeSwitcher';

export default function HeaderPreview() {
  useEffect(() => {
    const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

    links.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href?.includes('#') && href?.split('#')[1]) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetSection = document.querySelector(href);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        });
      }
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      links.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <header className="rainbow-header header-default header-not-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-3 col-md-6 col-4 header-logo">
            <div className="logo">
              <Link href="/">
                <img
                  className="logo-light"
                  src="/assets/images/logo/logo.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-8 position-static header-rest">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  <li>
                    <a className="smoth-animation" href="#demo">
                      Demos
                    </a>
                  </li>
                  <li>
                    <a className="smoth-animation" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="with-megamenu has-menu-child-item">
                    <a href="#">Elements</a>
                    <div className="rainbow-megamenu">
                      <div className="wrapper">
                        <div className="row row--0">
                          <div className="col-lg-3 single-mega-item">
                            <ul className="mega-menu-item">
                              <li>
                                <Link href="/button/">Button</Link>
                              </li>
                              <li>
                                <Link href="/service/">Service</Link>
                              </li>
                              <li>
                                <Link href="/counter/">Counter</Link>
                              </li>
                              <li>
                                <Link href="/progressbar/">Progressbar</Link>
                              </li>
                              <li>
                                <Link href="/accordion/">Accordion</Link>
                              </li>
                              <li>
                                <Link href="/social-share/">Social Share</Link>
                              </li>
                              <li>
                                <Link href="/blog-grid/">Blog Grid</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 single-mega-item">
                            <ul className="mega-menu-item">
                              <li>
                                <Link href="/team/">Team</Link>
                              </li>
                              <li>
                                <Link href="/portfolio/">Portfolio</Link>
                              </li>
                              <li>
                                <Link href="/testimonial/">Testimonial</Link>
                              </li>
                              <li>
                                <Link href="/timeline/">Timeline</Link>
                              </li>
                              <li>
                                <Link href="/tab/">Tab</Link>
                              </li>
                              <li>
                                <Link href="/pricing/">Pricing</Link>
                              </li>
                              <li>
                                <Link href="/split/">Split Section</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 single-mega-item">
                            <ul className="mega-menu-item">
                              <li>
                                <Link href="/call-to-action/">Call To Action</Link>
                              </li>
                              <li>
                                <Link href="/video/">Video</Link>
                              </li>
                              <li>
                                <Link href="/gallery/">Gallery</Link>
                              </li>
                              <li>
                                <Link href="/contact/">Contact</Link>
                              </li>
                              <li>
                                <Link href="/brand/">Brand</Link>
                              </li>
                              <li>
                                <Link href="/portfolio/">Portfolio</Link>
                              </li>
                              <li>
                                <Link href="/error/">404</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 single-mega-item">
                            <ul className="mega-menu-item">
                              <li>
                                <Link href="/advance-tab/">
                                  Advance Tab
                                  <span className="rainbow-badge-card">Hot</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/brand/">Brand Carousel</Link>
                              </li>
                              <li>
                                <Link href="/advance-pricing/">
                                  Advance Pricing
                                  <span className="rainbow-badge-card">Hot</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/portfolio-details/1">Portfolio Details</Link>
                              </li>
                              <li>
                                <Link href="/blog-details/4">Blog Details</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="smoth-animation" href="#inner-pages">
                      Inner Pages
                    </a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="https://support.rainbowit.net/support/" target="_blank">
                      Support
                    </a>
                  </li>
                  <li>
                    <a className="smoth-animation" href="#faqs">
                      Faq's
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Start Header Btn  */}
              <div className="header-btn">
                <a
                  className="btn-default btn-small round"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  BUY NOW
                </a>
              </div>
              {/* End Header Btn  */}
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button" onClick={openMenu}>
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
