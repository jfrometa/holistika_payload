import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
export default function Team() {
  return (
    <div className="rainbow-team-area rainbow-section-gap">
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
                <span className="theme-gradient">Our Experts.</span>
              </h4>
              <h2 className="title w-600 mb--20">Our Company Experts.</h2>
              <p className="description b1">
                We provide company and finance service for <br />
                startups and company business.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {teamMembers.map((member) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--10"
              key={member.id}
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={member.salDelay}
            >
              <div className="rainbow-team team-style-default style-two">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      alt="Corporate Template"
                      src={member.imgSrc}
                      width={920}
                      height={920}
                    />
                  </div>
                  <div className="content">
                    <h2 className="title">{member.name}</h2>
                    <h6 className="subtitle theme-gradient">{member.title}</h6>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">{member.location}</span>
                    </span>
                    <p className="description">{member.description}</p>
                    <ul className="social-icon social-default icon-naked mt--20">
                      {member.socialLinks.map((social, index) => (
                        <li key={index}>
                          <a href={social.href}>
                            <i className={social.iconClass} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
