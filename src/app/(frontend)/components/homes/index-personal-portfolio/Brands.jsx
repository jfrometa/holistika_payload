import React from "react";
import Image from "next/image";
import { brandImages } from "@/data/brands";
export default function Brands() {
  return (
    <div className="rainbow-brand-area pb--90 mt_dec--30">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ul className="brand-list brand-style-2 variation-2">
              {brandImages.slice(0, 7).map((image, index) => (
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
