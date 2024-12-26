import React from "react";
import Image from "next/image";
import { teamMembersTwo } from "@/data/team";
export default function Team() {
  return (
    <div
      className="rainbow-team-area rainbow-section-gap scrollSpySection"
      id="team"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--15">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h2 className="title w-600 mb--20">Meet Our Team</h2>
              <p className="description b1">
                There are many variations of passages.
              </p>
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
                    <h6 className="subtitle theme-gradient">{member.title}</h6>
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
