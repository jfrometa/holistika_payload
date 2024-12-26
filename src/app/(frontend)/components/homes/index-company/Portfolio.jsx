"use client";
import { useEffect, useRef, useState } from "react";
import { filterButtons, portfolios } from "@/data/portfolio";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".portfolio-2",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="rainbow-portfolio-area rainbow-section-gap masonary-wrapper-activation">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--50"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Portfolio Default</span>
              </h4>
              <h2 className="title w-600 mb--20">Why People Choose Us!</h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
              {filterButtons.map((button) => (
                <button
                  key={button.filter}
                  onClick={() => updateCategory(button.filter)}
                  data-filter={button.filter}
                  className={currentFilter == button.filter ? "is-checked" : ""}
                >
                  <span className="filter-text">{button.label}</span>
                </button>
              ))}
            </div>
            <div
              ref={isotopContainer}
              className="portfolio-items grid-metro2 mesonry-list"
            >
              <div className="resizer" />
              {/* Start Single Portfolio  */}
              {portfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className={`portfolio-2 ${portfolio.categories}`}
                >
                  <div className="rainbow-card portfolio">
                    <div className="inner">
                      <div className="thumbnail">
                        <figure className="card-image">
                          <Link href={`/portfolio-details/${portfolio.id}`}>
                            <Image
                              alt={portfolio.altText}
                              src={portfolio.imgSrc}
                              width={1270}
                              height={950}
                            />
                          </Link>
                        </figure>
                        <Link
                          className="rainbow-overlay"
                          href={`/portfolio-details/${portfolio.id}`}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb--10">
                          <Link href={`/portfolio-details/${portfolio.id}`}>
                            {portfolio.title}
                          </Link>
                        </h5>
                        <span className="subtitle b2">
                          {portfolio.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Start Single Portfolio  */}
            </div>
          </div>
        </div>
        {/* Start Load More Button  */}
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-load-more text-center mt--60">
              <Link
                href={`/portfolio`}
                className="btn btn-default btn-large btn-icon"
              >
                <span>
                  Load More <span className="icon feather-loader" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* End Load More Button  */}
      </div>
    </div>
  );
}
