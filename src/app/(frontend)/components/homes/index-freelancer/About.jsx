import React from 'react';
import Image from 'next/image';
import { progressData } from '@/data/progress';
import ProgressLine from '@/ui/common/ProgressLine';
import Link from 'next/link';
export default function About() {
  return (
    <div className="about-style-6 rainbow-section-gap">
      <div className="plr_md--30 plr_sm--30">
        <div className="wrapper theme-shape">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="thumbnail text-left text-lg-center">
                <Image
                  alt="About images"
                  src="/assets/images/about/about-logo.png"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12 mt_sm--30">
              <div className="inner">
                <span className="theme-gradient subtitle">I have completed 50+ project.</span>
                <h4 className="color-white maintitle">
                  Have More Projects Complete in My Carreer Life.
                </h4>
                <div className="read-more-btn">
                  <Link className="btn-default btn-border" href="/portfolio">
                    View More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--30">
          <div className="col-lg-10 offset-lg-1">
            <div className="rbt-progress-style-1 mt--60">
              <div className="section-title-2 text-left mb--40">
                <h2 className="title">My Working Experience.</h2>
              </div>
              {progressData.map((elm, i) => (
                <div key={i} className="single-progress">
                  <h6 className="title">{elm.title}</h6>
                  <div className="progress">
                    <span className="progress-number">{elm.value}%</span>
                    <ProgressLine
                      progress={elm.value}
                      className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
