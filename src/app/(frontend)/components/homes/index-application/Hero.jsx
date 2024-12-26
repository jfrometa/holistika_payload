import Link from 'next/link';
import TyperComponent from '@/ui/common/TyperComponent';

export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent height-650">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="display-two">
                Manage your personal <br />
                <span className="header-caption theme-gradient">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent />
                  </span>
                </span>
              </h1>
              <p className="description">
                A complite and developer-friendly platform to secure, use, and manage the data that
                matters most to you.
              </p>
              <div className="button-group">
                <a className="btn-default btn-medium round btn-icon" target="_blank" href="#">
                  Try 14 days free trial <i className="icon feather-arrow-right"></i>
                </a>
                <a
                  target="_blank"
                  className="btn-default btn-medium btn-border round btn-icon"
                  href={`https://themeforest.net/user/rainbow-themes/portfolio`}
                >
                  Buy For Only $9.99 <i className="icon feather-arrow-right" />
                </a>
              </div>
              <p className="color-gray mt--30">💳 Go live without a credit card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
