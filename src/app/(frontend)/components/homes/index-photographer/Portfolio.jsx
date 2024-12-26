"use client";
import React, { useEffect, useRef, useState } from "react";
import { filterButtons, portfolioItems } from "@/data/portfolio";

import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".portfolio-4",
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
    <div className="rainbow-portfolio-area rainbow-section-gapBottom masonary-wrapper-activation">
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--60">
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
              className="portfolio-items grid-metro4 mesonry-list no-gutter"
            >
              <div className="resizer" />
              {portfolioItems.map(({ id, category, imageSrc, alt }) => (
                <div key={id} className={`portfolio-4 ${category}`}>
                  <div className="rainbow-card portfolio">
                    <div className="inner">
                      <div className="thumbnail">
                        <figure className="card-image">
                          <Link href={`/portfolio-details/${id}`}>
                            <Image
                              alt={alt}
                              src={imageSrc}
                              width={1270}
                              height={950}
                            />
                          </Link>
                        </figure>
                        <Link
                          className="rainbow-overlay"
                          href={`/portfolio-details/${id}`}
                        />
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
              <a href="#" className="btn btn-default btn-large btn-icon">
                <span>
                  Load More <span className="icon feather-loader" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* End Load More Button  */}
      </div>
    </div>
  );
}
