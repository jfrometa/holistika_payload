'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';

import ModeSwitcher from '@/app/(frontend)/components/common/ModeSwitcher';
import Nav from '@/app/(frontend)/components/headers/Nav';
import type { Header } from '@/payload-types';
import { useHeaderTheme } from '@/providers/HeaderTheme';
import { cn } from '@/utilities/cn';
import { openMenu } from '@/utils/toggleMenu';



interface HeaderClientProps {
  header: Header;
}

const SCROLL_THRESHOLD = 100;
const THROTTLE_MS = 100;

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  const [theme, setTheme] = useState<string | null>(null);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const pathname = usePathname();

  // Reset headerTheme on route change
  useEffect(() => {
    setHeaderTheme('light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Sync local theme state with headerTheme from provider
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) {
      setTheme(headerTheme);
    }
  }, [headerTheme, theme]);

  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > SCROLL_THRESHOLD);
  }, []);

  const throttledScrollHandler = useCallback(() => {
    if (timeoutRef.current) return;
    timeoutRef.current = setTimeout(() => {
      handleScroll();
      timeoutRef.current = null;
    }, THROTTLE_MS);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [throttledScrollHandler]);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openMenu();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50',
        'bg-[hsl(var(--background))]/80 backdrop-blur-sm',
        'transition-all duration-300 ease-in-out',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      )}
    >
      <div className="container position-relative py-2">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6 col-4 position-static">
            <div className="header-left d-flex items-center">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-light"
                    alt="Corporate Logo Light"
                    src="/assets/images/logo/logo-dark.png"
                    width={288}
                    height={100}
                    priority
                  />
                  <Image
                    className="logo-dark"
                    alt="Corporate Logo Dark"
                    src="/assets/images/logo/logo.png"
                    width={288}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <nav className="mainmenu-nav d-none d-lg-block ml-8">
                <ul className="mainmenu flex gap-4">
                  <Nav />
                  {/* Ensure <HeaderNav header={header}/> doesn't duplicate buttons */}
                  {/* <HeaderNav header={header} /> */}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-8">
            <div className="header-right flex items-center justify-end gap-4">
              <div className="mobile-menu-bar d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={handleMenuOpen} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
