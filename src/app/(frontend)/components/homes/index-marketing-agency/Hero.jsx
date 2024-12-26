import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TyperComponent from '@/ui/common/TyperComponent';
export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <div className="inner text-left">
              <h1 className="title theme-gradient display-two">
                Marketing Agency <br />
                For{' '}
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent strings={['Freelancer.', 'Developer.', 'Startup.']} />
                  </span>
                </span>
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities, digital experiences, and
                print materials.
              </p>
              <div className="button-group">
                <Link
                  className="btn-default btn-medium round btn-icon"
                  href={`/index-marketing-agency`}
                >
                  New Customer <i className="icon feather-arrow-right" />
                </Link>
                <Link
                  className="btn-default btn-medium btn-border round btn-icon"
                  href={`/contact`}
                >
                  Contact Us <i className="icon feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="thumbnail">
              <Image
                alt="Banner Images"
                src="/assets/images/bg/bg-image-16.png"
                width={955}
                height={912}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
