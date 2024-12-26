import React from "react";
import Image from "next/image";
import { brandImages } from "@/data/brands";
export default function Brands() {
  return (
    <div className="rainbow-brand-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Awesome Clients</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Join over +10,000 happy clients!
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--10">
            <ul className="brand-list brand-style-2">
              {brandImages.map((image, index) => (
                <li key={index}>
                  <a href="#">
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={232}
                      height={110}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
