"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, categories } from "@/data/blogs";

const links = [
  "Corporate",
  "Agency",
  "Creative",
  "Design",
  "Minimal",
  "Company",
  "Development",
  "App Landing",
  "Startup",
  "App",
  "Business",
  "Software",
  "Landing",
  "Art",
];

export default function BlogListView() {
  return (
    <div className="rainbow-blog-list-view pb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="title">Latest</h4>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-8">
            <div className="row mt_dec--30">
              {blogPosts.slice(0, 5).map((post, index) => (
                <div
                  key={index}
                  className="col-lg-12 mt--30"
                  data-sal="slide-up"
                  data-sal-duration={700}
                  data-sal-delay={post.salDelay}
                >
                  <div className="rainbow-card box-card-style-default card-list-view">
                    <div className="inner">
                      <div className="thumbnail">
                        <Link
                          className="image"
                          href={`/blog-details/${post.id}`}
                        >
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
                        <h4 className="title">
                          <Link href={`/blog-details/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <ul className="rainbow-meta-list">
                          <li>
                            <a href="#">{post.author}</a>
                          </li>
                          <li className="separator">/</li>
                          <li>{post.date}</li>
                        </ul>
                        <p className="descriptiion">
                          We have always known the power of digital we've.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-12 text-center">
                <div className="rainbow-load-more text-center mt--30">
                  <Link className="btn-default" href={`/blog-grid`}>
                    View More <i className="feather-loader" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt_md--40 mt_sm--40">
            <aside className="rainbow-sidebar">
              <div className="rbt-single-widget widget_search mt--40">
                <div className="inner">
                  <form
                    className="blog-search"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input type="text" placeholder="Search ..." />
                    <button className="search-button">
                      <i className="feather-search" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="rbt-single-widget widget_categories mt--40">
                <h3 className="title">Categories</h3>
                <div className="inner">
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link href={`/blog-grid/category/${category}`}>
                          <span className="left-content">{category}</span>
                          <span className="count-text">
                            {
                              blogPosts.filter((elm) =>
                                elm.categories.includes(category)
                              ).length
                            }
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rbt-single-widget widget_recent_entries mt--40">
                <h3 className="title">Post</h3>
                <div className="inner">
                  <ul>
                    {blogPosts.slice(0, 4).map((elm, i) => (
                      <li key={i}>
                        <Link
                          className="d-block"
                          href={`/blog-details/${elm.id}`}
                        >
                          {elm.title}
                        </Link>
                        <span className="cate">{elm.category}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rbt-single-widget widget_tag_cloud mt--40">
                <h3 className="title">Tags</h3>
                <div className="inner mt--20">
                  <div className="tagcloud">
                    {links.map((link, index) => (
                      <Link href={`/blog-grid/tag/${link}`} key={index}>
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
