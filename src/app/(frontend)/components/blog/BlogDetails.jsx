"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import Comment from "./Comment";
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
export default function BlogDetails({ blog }) {
  return (
    <div className="rainbow-blog-details-area">
      <div className="post-page-banner rainbow-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{blog.title}</h1>
                </div>
                <ul className="rainbow-meta-list">
                  <li>
                    <i className="feather-user" /> <a href="#">Irin Pervin</a>
                  </li>
                  <li>
                    <i className="feather-calendar" /> 10 Dec 2021
                  </li>
                </ul>
                <div className="thumbnail alignwide mt--60">
                  <Image
                    className="w-100 radius"
                    alt="Blog Images"
                    src="/assets/images/blog/blog-01.jpg"
                    width={390}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content pt--60 rainbow-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which don't
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn't
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                </p>
                <div className="category-meta">
                  <span className="text">Tags:</span>
                  <div className="tagcloud">
                    {links.map((link, index) => (
                      <Link href={`/blog-grid/tag/${link}`} key={index}>
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Start Contact Form Area  */}
                <div className="rainbow-comment-form pt--60">
                  <div className="inner">
                    <div className="section-title">
                      <span className="subtitle">Have a Comment?</span>
                      <h2 className="title">Leave a Reply</h2>
                    </div>
                    <Comment url="" id={blog.id} title={blog.title} />
                  </div>
                </div>
                {/* End Contact Form Area  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
