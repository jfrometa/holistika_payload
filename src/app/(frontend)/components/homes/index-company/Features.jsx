import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <div className="rainbow-split-area">
      <div className="wrapper">
        <div className="rainbow-splite-style">
          <div className="split-wrapper">
            <div className="row g-0 radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail image-left-content">
                  <Image
                    alt="split Images"
                    src="/assets/images/split/split-01.jpg"
                    width={945}
                    height={709}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <h4
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={100}
                  >
                    What is DOOB?
                  </h4>
                  <p
                    className="description"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={300}
                  >
                    Randomised words which don't look even slightly believable.
                    If you are to use a passage of Lorem Ipsum. You need to be
                    sure there isn't anything embarrassing hidden in the middle
                    of text. in some form, by injectedeed bedhumour, or
                    randomised even.
                  </p>
                  <ul
                    className="split-list"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={20}
                  >
                    <li>- Doug DeMarco, Design Prototyping Manager</li>
                    <li>- 108 million paying subscribers</li>
                    <li>- Over 1.7 billion hours of music played monthly</li>
                    <li>- 4,000+ employees working across 16 offices</li>
                  </ul>
                  <div
                    className="view-more-button mt--35"
                    data-sal="slide-up"
                    data-sal-duration={700}
                    data-sal-delay={300}
                  >
                    <Link className="btn-default" href={`/contact`}>
                      Contact With Us
                    </Link>
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
