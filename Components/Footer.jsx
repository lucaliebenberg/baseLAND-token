import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  const footerList = [
    "Cryptocash ICO",
    "How It Works",
    "Tokens",
    "FAQ",
    "Contact",
  ];
  return (
    <footer>
      <div
        style={{ backgroundColor: "#EDE9E3" }}
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div style={{ backgroundColor: '#242421' }}>
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div
                style={{ paddingLeft: '3rem' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" class="page-scroll">
                  <h1 style={{ color: 'white' }}>$baseLAND</h1>
                </a>
              </div>
              <div class="footer_desc">
                <p
                style={{ paddingLeft: '3rem' }}
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"

                >
                Funding Gap
                U.N. report 2023 highlighted that to meet climate, biodiversity, and land degradation goals, financing needs to increase significantly from the current $154 billion per year to $384 billion by 2025.
                </p>
              </div>
            </div>
           
            <div class="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div class="newsletter_form">
                <h4
                  style={{ color: 'white' }}
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Market Cap Potential
                </h4>
                <p
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  style={{ marginBottom: '2rem'}}
                >
                  DOGE market cap: $20 billion. $basedLAND aims to break $200m MC by June 2025. <br/>
                  basedFOUNDATION aims to break $200m MC by June 2025, delivering $5.2m in funding to regenerative land projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
