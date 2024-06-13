import React from "react";
import { BsArrowRight } from "react-icons/bs";

// GOVERNACE SECTION
const Distribution = () => {
  return (
    <section id="about"  style={{ backgroundColor: '#242421' }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="text_md_center">
              <img
                class="animation"
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                src="assets/images/foundation-banner.png"
                alt="aboutimg2"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div>
              <h4
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $baseLAND Foundation <br/>
                - Treasury
              </h4>
              <p
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <strong>Milstone based funding</strong> <br/>
                - Each time the $basedLAND market cap hits a new milestone, the basedLAND Foundation will sell 1m tokens. <br/>
                - To ensure the price does not crash, the sizing of each sale will be limited to 1% price impact with a buffer of 3 days between sales.<br/>
              </p>
              <p
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                Which empowers people to not be marginalized by governments and
                financial institutions. Bitcoin is freedom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;




