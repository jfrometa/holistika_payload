import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
    <div className="call-to-action rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-alignwide call-to-action-alignwide">
              <div className="rbt-inner-alignwide">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="wrapper template-slider-wrapper">
                      <h2 className="title">Start with "Doob" for free.</h2>
                      <p className="mt--25">
                        Doob is free to use. It’s not a trial version. No credit
                        card is required
                      </p>
                      <div className="button-group mt--10">
                        <Link className="btn-default" href="/login">
                          Create your free account
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="coll-to-action-width-thumbnail">
                      <div className="thumbnail">
                        <Image
                          alt="call-to-action"
                          src="/assets/images/call-to-action/call-to-action-1.png"
                          width={1564}
                          height={814}
                        />
                      </div>
                    </div>
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
