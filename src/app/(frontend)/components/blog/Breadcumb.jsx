import Link from "next/link";
import React from "react";

export default function Breadcumb() {
  return (
    <div className="breadcrumb-area breadcarumb-style-1 ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center">
              <h1 className="title theme-gradient h2">Blog Grid Style.</h1>
              <ul className="page-list">
                <li className="rainbow-breadcrumb-item">
                  <Link href={`/`}>Home</Link>
                </li>
                <li className="rainbow-breadcrumb-item active">Blog Grid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
