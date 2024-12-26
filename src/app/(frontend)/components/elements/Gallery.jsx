"use client";
import React from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { Gallery, Item } from "react-photoswipe-gallery";
export default function GalleryComponent() {
  return (
    <div className="main-content">
      {/* Start Gallery Large Style-1  */}
      <div className="rainbow-gallery-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--20">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Gallery With Lightbox</span>
                </h4>
                <h2 className="title w-600 mb--20">Gallery Style One.</h2>
              </div>
            </div>
          </div>
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
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
                    >
                      <div className="rainbow-gallery icon-center">
                        <div className="thumbnail">
                          <Image
                            className="radius-small"
                            alt={image.alt}
                            ref={ref}
                            src={image.src}
                            width={1270}
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
      {/* Fnd Gallery Large Style-1  */}
      {/* Start Gallery medium Style-2  */}
      <div className="rainbow-gallery-area rainbow-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--20">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Gallery With Lightbox</span>
                </h4>
                <h2 className="title w-600 mb--20">Gallery Style Two.</h2>
              </div>
            </div>
          </div>{" "}
          <Gallery>
            <div className="row mt_dec--30 row--15" id="animated-lightbox2">
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
                            ref={ref}
                            src={image.src}
                            width={1270}
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
      {/* Fnd Gallery medium Style-2  */}
      {/* Start Gallery Small Style-3  */}
      <div className="rainbow-gallery-area rainbow-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--20">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Gallery With Lightbox</span>
                </h4>
                <h2 className="title w-600 mb--20">Gallery Style Two.</h2>
              </div>
            </div>
          </div>
          <Gallery>
            <div className="row mt_dec--30 row--15" id="animated-lightbox3">
              {galleryItems.map((image, index) => (
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
                      className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
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
      {/* Fnd Gallery Small Style-3  */}
    </div>
  );
}
