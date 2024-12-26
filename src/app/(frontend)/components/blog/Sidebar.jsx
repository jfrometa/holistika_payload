"use client";
import React from "react";
import Link from "next/link";
import { blogPosts, categories } from "@/data/blogs";
const dates = [
  "10 Dec 2021",
  "30 Nov 2021",
  "12 Oct 2021",
  "25 Aug 2021",
  "23 Jul 2021",
  "30 Jun 2021",
  "21 Apr 2021",
];
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

export default function Sidebar() {
  return (
    <aside className="rainbow-sidebar">
      <div className="rbt-single-widget widget_search mt--40">
        <div className="inner">
          <form className="blog-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" required placeholder="Search ..." />
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
                <Link className="d-block" href={`/blog-details/${elm.id}`}>
                  {elm.title}
                </Link>
                <span className="cate">{elm.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rbt-single-widget widget_archive mt--40">
        <h3 className="title">Archives</h3>
        <div className="inner">
          <ul>
            {dates.map((date, index) => (
              <li key={index}>
                <span className="cate">{date}</span>
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
  );
}
