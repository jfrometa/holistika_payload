import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="rbt-feature-area rainbow-section-gapBottom">
      <div className="container">
        {/* Start Feature Top  */}
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title max-width-800 text-left">
              <h4 className="theme-gradient">Popular Feature</h4>
              <h2 className="title w-600 mb--20">
                From the landing page to a complex Funnel. Start small
                <i>and</i> scale your projects
              </h2>
              <p className="description b1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        {/* End Feature Top  */}
        {/* Start Feature Main  */}
        <div className="feature-main">
          <div className="rbt-feature-main bg-lessdark-gradient padding-top-left-50">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-between">
                <div className="feature-left-top">
                  <h3>Landing-pages and Websites</h3>
                  <p>
                    Build a clean website to get an online presence and landing
                    pages to get more customers online
                  </p>
                </div>
                <div className="feature-left-bottom">
                  <div className="button-group">
                    <a className="btn-default btn-small btn-border" href="#">
                      Landing-pages
                    </a>
                    <a className="btn-default btn-small btn-border" href="#">
                      Websites
                    </a>
                    <a className="btn-default btn-small btn-border" href="#">
                      DGSVO-pages
                    </a>
                    <a className="btn-default btn-small btn-border" href="#">
                      Internal pages
                    </a>
                    <a className="btn-default btn-small btn-border" href="#">
                      Webinar signups
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="thumbnail">
                  <Image
                    alt=""
                    src="/assets/images/tab/tab-rbt-4.png"
                    width={1494}
                    height={1040}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Feature Main  */}
        <div className="row row--20">
          {/* Start Single Feature  */}
          <div className="col-lg-7 col-md-6 col-sm-12 col-12 mt--40">
            <div className="service service__style--1 variation-2 bg-lessdark-gradient radius text-left h-100">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 02</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Friendly Interface</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations variations of passages of Lorem
                  Ipsum available, but the majority have suffered. There are
                  many variations variations.
                </p>
              </div>
              <div className="service-thumbnail-offset mt--40">
                <Image
                  alt="image"
                  src="/assets/images/tab/tab-rbt-5.png"
                  width={1204}
                  height={634}
                />
              </div>
            </div>
          </div>
          {/* End Single Feature  */}
          {/* Start Single Feature  */}
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 mt--40">
            <div className="service service__style--1 variation-2 bg-lessdark-gradient radius text-left h-100">
              <div className="content">
                <h6 className="subtitle">
                  <span className="theme-gradient">Step 03</span>
                </h6>
                <h4 className="title w-600">
                  <a href="#">Powerful Settings</a>
                </h4>
                <p className="description b1 color-gray mb--0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div className="service-thumbnail-offset mt--40">
                <Image
                  className="max-width-160"
                  alt="image"
                  src="/assets/images/tab/tab-rbt-6.png"
                  width={410}
                  height={846}
                />
              </div>
            </div>
          </div>
          {/* End Single Feature  */}
        </div>
      </div>
    </div>
  );
}
