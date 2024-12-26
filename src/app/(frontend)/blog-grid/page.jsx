import BlogGrid from '@/ui/blog/BlogGrid';
import Breadcumb from '@/ui/blog/Breadcumb';
import Footer3 from '@/ui/footers/Footer3';
import Header4 from '@/ui/headers/Header4';
import Topbar from '@/ui/headers/Topbar';
import React from 'react';

export const metadata = {
  title: 'Blog Grid || Doob Business and Consulting React Nextjs Bootstrap5 Template',
  description: 'Doob Business and Consulting React Nextjs Bootstrap5 Template',
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <Breadcumb />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="main-content">
        <BlogGrid />
      </div>
      <Footer3 />
    </>
  );
}
