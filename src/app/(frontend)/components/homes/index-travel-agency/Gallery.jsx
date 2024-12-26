"use client";
import React from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { Gallery, Item } from "react-photoswipe-gallery";
export default function GalleryComponent() {
  return (
    <div className="rainbow-gallery-area rainbow-section-gapBottom">
      <div className="container">
        <Gallery>
          <div className="row mt_dec--30 row--15" id="animated-lightbox">
            {galleryItems.slice(0, 6).map((image, index) => (
              <Item
                original={image.src}
                thumbnail={image.src}
                width={1270}
                height={950}
                key={index}
              >
                {({ ref, open }) => (
                  <a
                    onClick={open}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  >
                    <div className="rainbow-gallery icon-center">
                      <div className="thumbnail">
                        <Image
                          className="radius-small"
                          alt={image.alt}
                          src={image.src}
                          width={1270}
                          ref={ref}
                          height={950}
                        />
                      </div>
                      <div className="video-icon">
                        <div className="btn-default rounded-player sm-size">
                          <span>
                            <i className="feather-zoom-in" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
    </div>
  );
}
