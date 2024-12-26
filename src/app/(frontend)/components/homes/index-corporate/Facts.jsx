import CounterComponent from '@/ui/common/Counter';
import { countersData } from '@/data/facts';
import React from 'react';

export default function Facts() {
  return (
    <div className="rainbow-counterup-area rainbow-section-gap">
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
                <span className="theme-gradient">Clients Feedback.</span>
              </h4>
              <h2 className="title w-600 mb--20">Global Clients Around the World.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {countersData.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="count-box counter-style-2 text-center">
                <div>
                  <div className="count-number">
                    <span className="counter">
                      {' '}
                      <CounterComponent max={elm.number} />
                    </span>
                  </div>
                </div>
                <h5 className="title">{elm.title}</h5>
                <p className="description">{elm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
