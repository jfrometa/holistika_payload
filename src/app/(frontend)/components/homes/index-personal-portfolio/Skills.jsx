import ProgressLine from '@/ui/common/ProgressLine';
import { progressData } from '@/data/progress';
import React from 'react';

export default function Skills() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="section-title text-left"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">See my All Skill.</span>
              </h4>
              <h2 className="title w-600 mb--20">My Working Skill</h2>
              <p className="description b1">
                We provide company and finance service for <br />
                startups and company business.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-progress-style-1 mt--10">
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
