import TyperComponent from '@/ui/common/TyperComponent';
import React from 'react';

export default function Hero() {
  return (
    <div className="slider-area slider-style-1 variation-3 bg-transparent pt--180 pb--100 pt_sm--100 pb_sm--50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-two">
                <span className="color-white">
                  I’m a freelance <span className="text-decoration-underline">photographer</span>
                  taking pictures of
                </span>
                <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent strings={['Photo.', 'Unsplash.', 'Lifestyle.']} />
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
