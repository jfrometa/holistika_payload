import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts2 } from "@/data/blogs";
export default function Elements() {
  return (
    <div className="rainbow-magazine-area ptb--40">
      <div className="wrapper plr--10">
        <div className="row row--5">
          <div className="col-lg-12 col-xl-6">
            <div className="rainbow-card box-card-style-default content-transparent post-large mt--10">
              {blogPosts2.slice(0, 1).map((post) => (
                <div className="inner" key={post.id}>
                  <div className="thumbnail">
                    <Link className="image" href={`/blog-details/${post.id}`}>
                      <Image
                        className="w-100"
                        alt={post.imgAlt}
                        src={post.imgSrc}
                        width={1600}
                        height={900}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="row row--5">
              {blogPosts2.slice(1, 2).map((post, index) => (
                <div className="col-lg-6" key={post.id}>
                  <div className="rainbow-card box-card-style-default content-transparent mt--10">
                    <div className="inner">
                      <div className="thumbnail">
                        <Link
                          className="image"
                          href={`/blog-details/${post.id}`}
                        >
                          <Image
                            className="w-100"
                            alt={post.imgAlt}
                            src={post.imgSrc}
                            width={1000}
                            height={562}
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-6">
                {/* Start Single Post  */}
                {blogPosts2.slice(2).map((post, index) => (
                  <div
                    key={index}
                    className="rainbow-card box-card-style-default content-transparent mt--10"
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <Link
                          className="image"
                          href={`/blog-details/${post.id}`}
                        >
                          <Image
                            className="w-100"
                            alt="Blog Image"
                            src={post.imgSrc}
                            width={1000}
                            height={562}
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
