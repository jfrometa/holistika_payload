import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function PopulerFeatures() {
  return (
    <div className="rbt-feature-area rainbow-section-gap">
      <div className="container">
        {/* Start Feature Header Top  */}
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title max-width-800 text-left sal-animate">
              <h4 className="theme-gradient">Popular Feature</h4>
              <h2 className="title w-600 mb--20">
                Made <i>for</i> Businesses and Individuals.Became the secret
                weapon of agencies
              </h2>
              <p className="description b1">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth.
              </p>
            </div>
          </div>
        </div>
        {/* End Feature Header Top  */}
        {/* Start Feature Main Top  */}
        <div className="feature-main-area">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="rbt-feature-main bg-lessdark-gradient padding-top-left-50">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="feature-left-top">
                      <h2>Operate in an intuitive and visual environment</h2>
                    </div>
                    <div className="feature-left-bottom">
                      <p>
                        <strong>Clear: </strong>I must explain to you how all
                        this mistaken idea of denouncing pleasure and praising
                        pain was born and I will give you a complete account of
                        the system, and expound the actual teachings.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service service__style--1 variation-2 bg-color-lessdark bg-lessdark-gradient radius text-left h-100">
                <div className="content">
                  <h6 className="subtitle">
                    <span className="theme-gradient">Step 02</span>
                  </h6>
                  <h4 className="title w-600">
                    <a href="#">Friendly Interface</a>
                  </h4>
                  <div className="feature-left-bottom">
                    <p className="mb--20">
                      <strong>Fast: </strong>No one rejects, dislikes, or avoids
                      pleasure itself, because it is pleasure, but because those
                      who do not know how.
                    </p>
                  </div>
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
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service service-eight text-left bg-color-lessdark bg-lessdark-gradient">
                <div className="inner d-flex">
                  <div className="image">
                    <Image
                      alt="card Images"
                      src="/assets/images/services/galery-image-01.png"
                      width={1600}
                      height={992}
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Document, maintain and enforce privacy policies.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="service service-eight text-left bg-color-lessdark bg-lessdark-gradient theme-shape mt--30">
                <div className="inner d-flex">
                  <div className="image">
                    <Image
                      alt="card Images"
                      src="/assets/images/services/galery-image-02.png"
                      width={1600}
                      height={992}
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Explore cyber threat intelligence &amp; security
                        products.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="service service-eight text-left bg-color-lessdark bg-lessdark-gradient theme-shape mt--30">
                <div className="inner d-flex">
                  <div className="image">
                    <Image
                      alt="card Images"
                      src="/assets/images/services/galery-image-03.png"
                      width={1600}
                      height={992}
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        Secure your cloud transformation and meet digital
                        sovereignty requirements.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="feature-bottom text-center">
                <div className="button-group">
                  <Link className="btn-default btn-large" href="/login">
                    Create your free account
                  </Link>
                </div>
                <p className="mt--30 mb--0">
                  <strong>Doob is free to use. </strong>It’s not a trial
                  version.
                  <br />
                  No credit card is required
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Feature Main Top  */}
        {/* Start Feature Services Area  */}
        <div className="rbt-feature-area pt--60">
          <div className="container">
            {/* Start Feature Header Top  */}
            <div className="row mb--40">
              <div className="col-lg-12">
                <div className="section-title max-width-800 text-left sal-animate">
                  <h4 className="theme-gradient">Provide Services</h4>
                  <h2 className="title w-600 mb--20">
                    Made <i>for</i> Businesses and Individuals.Became the secret
                    weapon of agencies
                  </h2>
                  <p className="description b1">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects.
                  </p>
                </div>
              </div>
            </div>
            {/* End Feature Header Top  */}
            {/* Start Feature Service  */}
            <div className="row g-5">
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-map" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Key Management</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      As you move to the cloud, you need to use new approaches
                      to protect.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-loader" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Assured Workloads</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      applications, and data, while supporting objectives.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-speaker" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Policy Intelligence</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      capabilities to help meet your digital sovereignty
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-lock" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Risk Protection</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      Your SecOps teams are drowning weight of multiple tools.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-terminal" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Security Command</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      There are many variations variations of passages
                      available.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-edit-2" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Awarded Design</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      threat intelligence while automating response to achieve a
                      critical.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-refresh-cw" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Investigate, and Respond</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      Traditional security models are insufficient for
                      protecting.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-database" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">Center Database</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      Your organization depends on business critical web.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
              {/* Start Single Service  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
                  <div className="icon">
                    <i className="feather-more-horizontal" />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">&amp; More</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      Access 8.5M+ <br />
                      vector icons &amp; stickers
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Service  */}
            </div>
            {/* End Feature Service  */}
          </div>
        </div>
        {/* End Feature Services Area  */}
      </div>
    </div>
  );
}
