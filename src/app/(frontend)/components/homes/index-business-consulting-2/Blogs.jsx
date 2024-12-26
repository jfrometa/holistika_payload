import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
export default function Blogs() {
  return (
    <div className="blog-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Latests News</span>
              </h4>
              <h2 className="title w-600 mb--20">Our Latest News.</h2>
              <p className="description b1">
                We provide company and finance service for <br />
                startups and company business.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={post.salDelay}
            >
              <div className="rainbow-card box-card-style-default">
                <div className="inner">
                  <div className="thumbnail">
                    <Link className="image" href={`/blog-details/${post.id}`}>
                      <Image
                        className="w-100"
                        alt={post.alt}
                        src={post.imgSrc}
                        width={390}
                        height={240}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <ul className="rainbow-meta-list">
                      <li>
                        <a href="#">{post.author}</a>
                      </li>
                      <li className="separator">/</li>
                      <li>{post.date}</li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/blog-details/${post.id}`}>
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
