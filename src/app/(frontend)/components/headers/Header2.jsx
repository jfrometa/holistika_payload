'use client';
import React from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';
import ModeSwitcher from '../common/ModeSwitcher';
import { openMenu } from '@/utilities/toggleMenu';

export default function Header2({
  parentClass = 'rainbow-header header-default header-left-align header-not-transparent header-sticky',
  btnClass = 'btn-default btn-small round',
}) {
  return (
    <header className={parentClass}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6 col-4 position-static">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-light"
                    alt="Corporate Logo"
                    src="/assets/images/logo/logo-dark.png"
                    width={288}
                    height={100}
                  />
                  <Image
                    className="logo-dark"
                    alt="Corporate Logo"
                    src="/assets/images/logo/logo.png"
                    width={288}
                    height={100}
                  />
                </Link>
              </div>
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  <Nav />
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-8">
            <div className="header-right">
              {/* <div className="header-btn">
                <a
                  className={btnClass}
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Compra
                </a>
              </div> */}
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
