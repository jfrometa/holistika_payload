import CounterComponent from '@/ui/common/Counter';
import { countersData, countersData2 } from '@/data/facts';
import React from 'react';

export default function Facts() {
  return (
    <div className="rainbow-counterup-area rainbow-section-gapBottom">
      <div className="container">
        <div className="row">
          {countersData2.map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="count-box counter-style-4 text-center">
                <div>
                  <div className="count-number">
                    <span className="counter">
                      {' '}
                      <CounterComponent max={elm.number} />
                    </span>
                  </div>
                </div>
                <h5 className="counter-title">{elm.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
