import React from 'react';
import Image from 'next/image';
import { countersData, countersData2 } from '@/data/facts';
import CounterComponent from '@/ui/common/Counter';
export default function Facts() {
  return (
    <div className="rainbow-split-area">
      <div className="wrapper">
        <div className="rainbow-splite-style bg-color-blackest">
          <div className="split-wrapper">
            <div className="row g-0 radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail">
                  <Image
                    alt="split Images"
                    src="/assets/images/split/split-03.jpg"
                    width={945}
                    height={709}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <h4 className="title">Continue Your Business With Us.</h4>
                  <p className="description">
                    Randomised words which don't look even slightly believable. If you are to use a
                    passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing
                    hidden in the middle of text. in some form, by injectedeed bedhumour, or
                    randomised even .
                  </p>
                  <div className="row">
                    {countersData2.map((elm, i) => (
                      <div key={i} className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="count-box counter-style-4 text-start">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
