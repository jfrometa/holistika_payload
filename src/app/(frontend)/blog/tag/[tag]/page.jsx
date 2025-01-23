import BlogGrid from '@/ui/blog/BlogGrid';
import Breadcumb from '@/ui/blog/Breadcumb';
import Breadcumb2 from '@/ui/blog/Breadcumb2';
import Footer3 from '@/ui/footers/Footer3';
import Header4 from '@/ui/headers/Header4';
import Topbar from '@/ui/headers/Topbar';
import { blogPosts } from '@/data/blogs';
import React from 'react';

export const metadata = {
  title: 'Blog Tags || Doob Business and Consulting React Nextjs Bootstrap5 Template',
  description: 'Doob Business and Consulting React Nextjs Bootstrap5 Template',
};
export default function page({ params }) {
  const items = blogPosts.filter(elm => elm.tags.includes(params.tag.replace('%20', ' ')));

  return (
    <>
      <Topbar />
      <Header4 />
      <Breadcumb2 title="Blog Tag List" type={params.tag.replace('%20', ' ')} />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="main-content">
        <BlogGrid items={items} />
      </div>
      <Footer3 />
    </>
  );
}
