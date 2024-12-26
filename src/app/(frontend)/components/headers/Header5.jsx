'use client';
const navLinks = [
  { href: '#home', text: 'Home', className: 'current' },
  { href: '#service', text: 'Service' },
  { href: '#projects', text: 'Projects' },
  { href: '#clients', text: 'Clients' },
  { href: '#team', text: 'Meet The Team' },
  { href: '#contact', text: 'Contact With Us' },
];
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModeSwitcher from '../common/ModeSwitcher';
import { openMenu } from '@/utilities/toggleMenu';
import addScrollspy from '@/utilities/addScrollSpy';
export default function Header5({ btnClass = 'btn-default btn-small round' }) {
  useEffect(() => {
    window.addEventListener('scroll', addScrollspy);

    return () => {
      window.removeEventListener('scroll', addScrollspy);
    };
  }, []);
  useEffect(() => {
    const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

    links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      links.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-6 col-6">
            <div className="header-left d-flex">
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
            </div>
          </div>
          <div className="col-lg-8 position-static d-none d-lg-block">
            <nav className="mainmenu-nav onepagenav">
              <ul className="mainmenu justify-content-center scrollSpyLinks">
                {navLinks.map((link, index) => (
                  <li key={index} className={link.className || ''}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 col-md-6 col-6">
            <div className="header-right">
              <div className="header-btn d-none d-xl-block">
                <a
                  className={btnClass}
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  BUY NOW
                </a>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              {/* Start Switcher Area  */}
              <ModeSwitcher />
              {/* Start Switcher Area  */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
