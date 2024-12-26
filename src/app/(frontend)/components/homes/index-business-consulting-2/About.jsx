import React from 'react';
import Image from 'next/image';
import TyperComponent from '@/ui/common/TyperComponent';
import Link from 'next/link';
export default function About() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail" data-sal="slide-right" data-sal-duration={800}>
              <Image
                className="w-100"
                alt="About Images"
                src="/assets/images/about/about-1.png"
                width={543}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div className="content" data-sal="slide-left" data-sal-duration={800}>
              <div className="section-title">
                <h2 className="title">
                  Unique Business <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent strings={['Finance.', 'Consulting.', 'Agency.']} />
                    </span>
                  </span>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean. They live in
                  Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted parts of sentences. A
                  small river named Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted parts of sentences
                </p>
                <div className="read-more-btn mt--40">
                  <Link className="btn-default" href={'/about'}>
                    <span>More About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
