import React from 'react';
import Image from 'next/image';
import { countersData, countersData2 } from '@/data/facts';
import CounterComponent from '@/ui/common/Counter';
export default function Facts() {
  return (
    <div className="rainbow-counterup-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="thumbnail">
              <Image
                className="radius w-100"
                alt="Images"
                src="/assets/images/bg/bg-image-21.jpg"
                width={2000}
                height={1125}
              />
            </div>
          </div>
        </div>
        <div className="row ptb--60">
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
