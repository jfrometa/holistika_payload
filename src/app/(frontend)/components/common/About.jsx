import React from "react";
import Image from "next/image";
import Link from "next/link";
const items = [
  "Track your teams progress with mobile app.",
  "Lorem ipsum dolor sit amet consectetur adipisicing.",
  "Ipsum dolor sit amet consectetur adipisicing.",
  "Your teams progress with mobile app.",
];
export default function About() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div
              className="thumbnail"
              data-sal="slide-right"
              data-sal-duration={700}
            >
              <Image
                className="w-100"
                alt="About Images"
                src="/assets/images/about/about-1.png"
                width={543}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div
              className="content"
              data-sal="slide-left"
              data-sal-duration={700}
            >
              <div className="section-title">
                <h4 className="subtitle">
                  <span className="theme-gradient">Corporate About.</span>
                </h4>
                <h2 className="title mt--10">About Our Business.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  quod autem sequi reprehenderit labore consequuntur excepturi
                  voluptatibus omnis similique qui unde eligendi tempora, ea at,
                  laudantium nostrum minus pariatur quasi!
                </p>
                <ul className="list-icon">
                  {items.map((item, index) => (
                    <li key={index}>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="read-more-btn mt--40">
                  <Link className="btn-default btn-icon" href={"/about"}>
                    More About Us <i className="icon feather-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
