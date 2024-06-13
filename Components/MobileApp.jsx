import React from "react";
import { IoLogoApple } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
const MobileApp = () => {
  return (
    <section
      id="governance"
      style={{ backgroundColor: '#242421' }}
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div>
              <h4
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
               $baseLAND Foundation <br/>
               - Governance
              </h4>
              <p
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <strong>Community-Driven Proposals</strong> <br/>
                - $basedLAND holders can propose eco-villages or land conservation projects which will receive foundation funds at each market cap milestone. <br/>
                - Proposals are voted on by basedLAND holders. <br/>
                - Once a project has received funding, it is still eligible to receive additional rounds. <br/>
                - All voting will take place on Snapshot. <br/>
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12">
            <div
              class="res_md_mt_50 res_sm_mt_30 text-center animation"
              data-animation="fadeInRight"
              data-animation-delay="0.2s"
            >
              <img src="assets/images/governance-banner.png" alt="mobile_app3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
