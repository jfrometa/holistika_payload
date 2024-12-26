import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="rainbow-tab-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Companies About.</span>
              </h4>
              <h2 className="title w-600 mb--20">What About Our Companies.</h2>
              <p className="description b1">
                We help our clients succeed by creating brand identities,
                <br />
                digital experiences, and print materials.
              </p>
            </div>
          </div>
        </div>
        <div className="row row row--30 align-items-center">
          <div
            className="col-lg-5"
            data-sal="slide-right"
            data-sal-duration={700}
          >
            <Image
              className="radius-small"
              alt="Corporate Template"
              src="/assets/images/tab/tabs-01.jpg"
              width={1000}
              height={720}
            />
          </div>
          <div
            className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1"
            data-sal="slide-left"
            data-sal-duration={700}
          >
            <div className="rainbow-default-tab">
              <ul className="nav nav-tabs tab-button" id="myTab" role="tablist">
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Strategy
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Reporting
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Development
                  </button>
                </li>
              </ul>
              <div
                className="rainbow-tab-content tab-content"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam ipsa, deleniti soluta minima minus asperiores
                    doloribus enim vitae obcaecati fuga assumenda laudantium
                    nemo odio provident nulla exercitationem tempore corrupti!
                    Nemo.
                  </p>
                  <p>
                    Quibusdam ipsa, deleniti soluta minima minus asperiores
                    doloribus enim vitae obcaecati fuga assumenda laudantium
                    nemo odio provident nulla exercitationem tempore corrupti!
                    Nemo.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p>
                    Ipsum lorem dolor sit amet consectetur, adipisicing elit.
                    Quibusdam ipsa, deleniti soluta minima minus asperiores
                    doloribus enim vitae obcaecati fuga assumenda laudantium
                    nemo odio provident nulla exercitationem tempore corrupti!
                    Nemo.
                  </p>
                  <p>
                    Ipsa Quibusdam, deleniti soluta minima minus asperiores
                    doloribus enim vitae obcaecati fuga assumenda laudantium
                    nemo odio provident nulla exercitationem tempore corrupti!
                    Nemo.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <p>
                    Exercitationem Ipsum lorem dolor sit amet consectetur,
                    adipisicing elit. Quibusdam ipsa, deleniti soluta minima
                    minus asperiores doloribus enim vitae obcaecati fuga
                    assumenda laudantium nemo odio provident nulla tempore
                    corrupti! Nemo.
                  </p>
                  <p>
                    Ipsa Quibusdam, deleniti soluta minima minus asperiores
                    doloribus enim vitae obcaecati fuga assumenda laudantium
                    nemo odio provident nulla exercitationem tempore corrupti!
                    Nemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
