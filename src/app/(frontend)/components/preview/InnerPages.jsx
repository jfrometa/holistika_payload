import { demoItems } from "@/data/preview";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InnerPages() {
  return (
    <div className="rainbow-demo-area rainbow-section-gap" id="inner-pages">
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4 className="subtitle">
                <span className="theme-gradient">All Others Pages</span>
              </h4>
              <h2 className="title w-600 mb--20">All Others Pages.</h2>
              <p className="description b1">
                Have a nice inner pages include in doob nextjs template.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--30">
          {demoItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
              <div className="single-demo">
                <Link target="_blank" href={item.href}>
                  <div className="thumbnail">
                    <Image
                      className="image-dark"
                      alt={`${item.title} Image`}
                      src={item.imgDark}
                      width={570}
                      height={555}
                    />
                    <Image
                      className="image-light"
                      alt={`${item.title} Light Image`}
                      src={item.imgLight}
                      width={570}
                      height={555}
                    />
                    {item.isNew && <span className="label-badge">New</span>}
                  </div>
                </Link>
                <h4 className="title">
                  <Link target="_blank" href={item.href}>
                    {item.title}
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
        </div>
      </div>
    </div>
  );
}
