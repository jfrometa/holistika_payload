import React from "react";
import Image from "next/image";
import { teamMembers, teamMembersThree, teamMembersTwo } from "@/data/team";
export default function Team() {
  return (
    <div className="main-content">
      {/* Start Team-Style-Default Area  */}
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
                <h2 className="title w-600 mb--20">Team Style One.</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={member.salDelay}
                className="col-lg-4 col-md-6 col-12 mt--30"
              >
                <div className="rainbow-team team-style-default">
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
                      <h6 className="subtitle theme-gradient">
                        {member.title}
                      </h6>
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
      {/* End Team-Style-Default Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Team-Style-Default Style-Two Area  */}
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
                <h2 className="title w-600 mb--20">Team Style Two</h2>
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
                      <h6 className="subtitle theme-gradient">
                        {member.title}
                      </h6>
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
      {/* End Team-Style-Default Style-Two Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Team-Style-Default Style-Three Area  */}
      <div className="rainbow-team-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--15">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Experts.</span>
                </h4>
                <h2 className="title w-600 mb--20">Team Style Three</h2>
              </div>
            </div>
          </div>
          <div className="row row--30">
            {teamMembersTwo.map((member) => (
              <div
                key={member.id}
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={member.salDelay}
                className="col-lg-3 col-md-6 col-12 mt--30"
              >
                <div className="rainbow-team team-style-two">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        alt="Corporate Template"
                        src={member.imgSrc}
                        width={member.width}
                        height={member.height}
                      />
                    </div>
                    <div className="content">
                      <h2 className="title">{member.name}</h2>
                      <h6 className="subtitle theme-gradient">
                        {member.title}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Team-Style-Default Style-Three Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Team-Style-Default Style-Four Area  */}
      <div className="rainbow-team-area rainbow-section-gap">
        <div className="wrapper plr--65">
          <div className="row mb--20">
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
                <h2 className="title w-600 mb--20">Team Style Four</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            {teamMembersThree.map((member) => (
              <div
                key={member.id}
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={member.salDelay}
                className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
              >
                <div className="rainbow-team team-style-three">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        alt="Corporate Template"
                        src={member.imgSrc}
                        width={member.width}
                        height={member.height}
                      />
                    </div>
                    <div className="content">
                      <div className="team-info">
                        <h2 className="title">{member.name}</h2>
                        <h6 className="subtitle theme-gradient">
                          {member.title}
                        </h6>
                        <div className="team-form">
                          <span className="location">{member.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Team-Style-Default Style-Four Area  */}
    </div>
  );
}
