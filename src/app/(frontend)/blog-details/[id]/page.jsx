import BlogDetails from '@/ui/blog/BlogDetails';
import Footer3 from '@/ui/footers/Footer3';
import Header4 from '@/ui/headers/Header4';
import Topbar from '@/ui/headers/Topbar';
import { allBlogs } from '@/data/blogs';
import React from 'react';
// export const metadata = {
//   title: 'Blog Details || Doob Business and Consulting React Nextjs Bootstrap5 Template',
//   description: 'Doob Business and Consulting React Nextjs Bootstrap5 Template',
// };

export default function page({ params }) {
  const blog = allBlogs.filter(elm => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <Topbar />
      <Header4 />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <BlogDetails blog={blog} />
      <Footer3 />
    </>
  );
}
