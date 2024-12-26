"use client";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-12">
            <div className="error-inner">
              <h1>404</h1>
              <h2 className="title">Something’s not right.</h2>
              <p className="description">
                By injectedeed eedhumour, or randomised words which don't look
                even .
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="blog-search"
              >
                <input type="text" placeholder="Search Here..." />
                <button className="search-button">
                  <i className="feather-search" />
                </button>
              </form>
              <div className="view-more-button">
                <Link className="btn-default" href={`/`}>
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
