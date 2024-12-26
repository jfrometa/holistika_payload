'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import sal from 'sal.js'; 
import 'react-modal-video/scss/modal-video.scss';
import 'photoswipe/dist/photoswipe.css';
import BackToTop from '@/ui/common/BackToTop';
import MobileMenu from '@/ui/headers/MobileMenu';
import { closeMenu } from '@/utilities/toggleMenu';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  // Run client-side effects here
  const pathname = usePathname();

  useEffect(() => {
    // Load bootstrap and other client-only scripts

    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.esm');
    }
  }, []);

  useEffect(() => {
    sal({ threshold: 0.01, once: true, root: null });
  }, [pathname]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      {children}
      <MobileMenu />
      <BackToTop />
    </>
  );
}
