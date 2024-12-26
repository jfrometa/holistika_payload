"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { blogPosts } from "@/data/blogs";

export default function Blogs() {
  const options = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // adaptiveHeight: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="rainbow-blog-grid-area pb--40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="title mb--0">Popular</h4>
            </div>
          </div>
        </div>
        <Slider
          {...options}
          className="blog-carousel-activation rainbow-slick-dot slick-grid-15 mb--60 mt_dec--30 gx-5"
        >
          {blogPosts.slice(0, 4).map((elm, i) => (
            <div key={i} className="slide-single-layout mt--30">
              <div className="rainbow-card box-card-style-default">
                <div className="inner">
                  <div className="thumbnail">
                    <Link className="image" href={`/blog-details/${elm.id}`}>
                      <Image
                        className="w-100"
                        alt="Blog Image"
                        src={elm.imgSrc}
                        width={390}
                        height={240}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <ul className="rainbow-meta-list">
                      <li>
                        <a href="#">{elm.author}</a>
                      </li>
                      <li className="separator">/</li>
                      <li>{elm.date}</li>
                    </ul>
                    <h4 className="title">
                      <Link href={`/blog-details/${elm.id}`}>{elm.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
