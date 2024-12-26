'use client';

import CirculerProgress from '@/ui/common/CirculerProgress';
import { progressDataCirculer } from '@/data/progress';
import { useEffect } from 'react';

export default function Progress() {
  return (
    <div className="rainbow-progressbar-area rainbow-section-gap">
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
                <span className="theme-gradient">Our Expertise.</span>
              </h4>
              <h2 className="title w-600 mb--20">Compnanies Expertise.</h2>
              <p className="description b1">
                There are many variations of passages of Lorem Ipsum available, <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt--40">
          <div className="col-lg-12">
            <div className="row row--30 mt_dec--30">
              {/* Start Single Progress Bar  */}
              {progressDataCirculer.map(progress => (
                <div key={progress.id} className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="radial-progress-single">
                    <CirculerProgress
                      barColor={progress.barColor}
                      tracColor={progress.trackColor}
                      percent={progress.percent}
                    />
                    <div className="circle-info">
                      <h4 className="title">{progress.title}</h4>
                      <h6 className="subtitle">{progress.subtitle}</h6>
                    </div>
                  </div>
                </div>
              ))}
              {/* End Single Progress Bar  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
