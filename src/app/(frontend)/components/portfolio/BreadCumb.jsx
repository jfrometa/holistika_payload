import Link from 'next/link';
import React from 'react';

export default function BreadCumb({ title = 'Have a Business Consulting' }) {
  return (
    <div className="breadcrumb-area breadcarumb-style-1 ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center">
              <h1 className="title theme-gradient h2">{title}</h1>
              <ul className="page-list">
                <li className="rainbow-breadcrumb-item">
                  <Link href={`/`}>/</Link>
                </li>
                <li className="rainbow-breadcrumb-item active">Portfolio Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
