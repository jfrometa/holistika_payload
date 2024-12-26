import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
export default function BlogGridSidebar() {
  return (
    <>
      <div className="rainbow-blog-area rainbow-section-gap">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              <div className="row mt_dec--30">
                <div className="col-lg-12">
                  <div className="row row--15">
                    {blogPosts.map((post, index) => (
                      <div
                        key={index}
                        className="col-lg-6 col-md-6 col-12 mt--30"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={post.salDelay}
                      >
                        <div className="rainbow-card undefined">
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
                <div className="col-lg-12 text-center">
                  <div className="rainbow-load-more text-center mt--60">
                    <button className="btn btn-default btn-icon">
                      <span>
                        View More Post{" "}
                        <span className="icon">
                          <i className="feather-loader" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt_md--40 mt_sm--40">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
