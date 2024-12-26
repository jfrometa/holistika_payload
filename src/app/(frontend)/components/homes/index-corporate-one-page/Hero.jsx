import TyperComponent from '@/ui/common/TyperComponent';
import React from 'react';

export default function Hero() {
  return (
    <div
      className="slider-area scrollSpySection slider-style-1 variation-default bg_image bg_image--23 height-950 d-flex align-items-center"
      id="home"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-one">
                Corporate <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent strings={['Finance.', 'Consulting.', 'One Page.']} />
                  </span>
                </span>
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities, digital experiences, and
                print materials.
              </p>
              <div className="button-group mt--30">
                <a className="btn-default round btn-large" target="_blank" href="#">
                  GET STARTED NOW!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
