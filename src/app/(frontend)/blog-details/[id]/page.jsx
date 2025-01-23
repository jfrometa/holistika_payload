import BlogDetails from '@/ui/blog/BlogDetails';
import Footer3 from '@/ui/footers/Footer3';
import Header4 from '@/ui/headers/Header4';
import Topbar from '@/ui/headers/Topbar';
import { allBlogs } from '@/data/blogs';
import React from 'react';


export default async function page({ params }) {
   // Ensure params is awaited properly
   const { id } = await params;

   // Safely find the blog
   const blog = allBlogs.find(elm => elm.id == id) || allBlogs[0];
  
  return (
    <>
      {/* <Topbar /> */}
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
