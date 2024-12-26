import { demoItems2 } from "@/data/preview";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Demos() {
  return (
    <div
      className="rainbow-demo-area rainbow-section-gap splash-demo "
      id="demo"
    >
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center has-section-before-title"
              style={{ position: "relative" }}
            >
              <h2
                className="title w-600 mb--20 sal-animate"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={300}
              >
                Our Templates Are Just{" "}
                <span className="theme-gradient">Ready To Use</span>
              </h2>
              <p
                className="description b1 sal-animate"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={400}
              >
                Choose one of styles or cutomize easily your site following your
                ideas. <br />
                More demos are coming soon.
              </p>
              <div className="section-before-title new-big-heading-gradient">
                40+
              </div>
            </div>
          </div>
        </div>
        <div className="row row--30">
          {demoItems2.map((demo, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 mt--40"
              style={{ position: "relative" }}
            >
              <div className="single-demo">
                <Link target="_blank" href={demo.link}>
                  <div className="thumbnail">
                    <Image
                      className="image-dark"
                      alt=""
                      src={demo.imgSrc}
                      width={570}
                      height={555}
                    />
                    <Image
                      className="image-light"
                      alt=""
                      src={demo.imgLightSrc}
                      width={570}
                      height={555}
                    />
                  </div>
                </Link>
                <h4 className="title">
                  <Link target="_blank" href={demo.link}>
                    {demo.title}
                  </Link>
                </h4>
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          ))}

          {/* End Single Demo  */}
          {/* Start Single Demo  */}
          <div className="col-lg-4 col-md-6 col-12 mt--40">
            <div className="single-demo">
              <a target="_blank" href="#">
                <div className="thumbnail">
                  <Image
                    className="image-dark"
                    alt="coming-soon Images"
                    src="/assets/images/demo/coming-soon.png"
                    width={480}
                    height={470}
                  />
                  <Image
                    className="image-light"
                    alt="coming-soon Images"
                    src="/assets/images/demo/coming-soon.png"
                    width={480}
                    height={470}
                  />
                </div>
              </a>
              <h4 className="title">
                <a target="_blank" href="#">
                  Finance Consulting
                </a>
              </h4>
            </div>
          </div>
          {/* End Single Demo  */}
          {/* Start Single Demo  */}
          <div className="col-lg-4 col-md-6 col-12 mt--40">
            <div className="single-demo">
              <a target="_blank" href="#">
                <div className="thumbnail">
                  <Image
                    className="image-dark"
                    alt="coming-soon Images"
                    src="/assets/images/demo/coming-soon.png"
                    width={480}
                    height={470}
                  />
                  <Image
                    className="image-light"
                    alt="coming-soon Images"
                    src="/assets/images/demo/coming-soon.png"
                    width={480}
                    height={470}
                  />
                </div>
              </a>
              <h4 className="title">
                <a target="_blank" href="#">
                  Finance Consulting
                </a>
              </h4>
            </div>
          </div>
          {/* End Single Demo  */}
        </div>
      </div>
    </div>
  );
}
