import React from 'react';
import Image from 'next/image';
export default function PortfolioDetails({ portfolio }) {
  return (
    <div className="rainbow-portfolio-details rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="inner">
              <div className="details-list">
                <div className="thumbnail alignwide">
                  <Image
                    className="radius w-100"
                    alt="Corporate Image"
                    src="public/assets/images/portfolio/portfolio-01.jpg"
                    width={1270}
                    height={950}
                  />
                </div>
                <div className="row mt--40 row--30">
                  <div className="col-lg-6">
                    <div className="content-left">
                      <h4 className="title">
                        {portfolio.title ? portfolio.title : 'App Development'}
                      </h4>
                      <div className="single-list-wrapper">
                        <div className="single-list">
                          <label>Date:</label>
                          <span>30 May {new Date().getFullYear()}</span>
                        </div>
                        <div className="single-list">
                          <label>Client:</label>
                          <span>Rainbow Themes</span>
                        </div>
                        <div className="single-list">
                          <label>Category:</label>
                          <span>development</span>
                        </div>
                      </div>
                      <div className="view-btn mt--50">
                        <a className="btn-default btn-large round" href="/portfolio">
                          View Projects
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--30 mt_sm--30">
                    <div className="content-right">
                      <h5 className="subtitle">Branded client</h5>
                      <div className="description">
                        <p>
                          In a typical html application, data is passed top-down (parent to child)
                          via props, but such usage can be cumbersome for certain types of props
                          (e.g. locale preference, UI theme).
                        </p>
                        <br />
                        <p>
                          that are required by many components within an application. Context
                          provides a way to share values like these between components without
                          having to explicitly pass a prop through every level of the tree.
                        </p>
                        <br />
                        <p>
                          that are required by many components within an application. Context
                          provides a way to share values like these between components without
                          having to explicitly pass a prop through every level of the tree.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-gallery mt--40">
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-01.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-02.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-03.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
