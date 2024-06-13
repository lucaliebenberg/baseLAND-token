import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = ({ transferNativeToken, updateTokenSupplySale }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <section
      id="home"
      style={{ backgroundColor: '#242421' }}
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div class="banner_effect"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div class="banner_text_s2 text_md_center">
              <h1
                class="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <strong>$basedLAND</strong><br/>                
                <strong>Conserve to Stay</strong>
              </h1>
              <h5
                class="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
                onClick={() => {
                    transferNativeToken();
                    setIsButtonVisible(false);
                  }}
              >
                Token Presale is <mark class="gradient_box">Live</mark>
              </h5>

              <div
                class="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                {/* <a
                  href="#whitepaper"
                  class="btn btn-default btn-radius nav-link content-popup"
                >
                  Governance
                  <BsArrowRight />
                </a> */}
                <a href="https://basescan.org/token/0x40ac99b7c979d25db490ebff66712db0e76db164?a=0xbf429dbeddeec9393c95d4452ed88e2fc9615169" target="_blank" class="btn btn-border btn-radius">
                  Buy $basedLAND now <BsArrowRight />
                </a>
                <a
                  onClick={() => {
                    transferNativeToken();
                    setIsButtonVisible(false);
                  }}
                  // onClick={() => updateTokenSupplySale()}
                  class="btn btn-border btn-radius"
                  style={{ opacity: 0 }}
                >
                  Transfer Token <BsArrowRight />
                </a>
              </div>         
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              class="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation-delay="1.5s"
              data-animation="fadeInRight"
              style={{ paddingTop: "40px" }}
            >
              <img
                className="new_image_css"
                alt="banner_vector2"
                src="assets/images/hero-banner.png"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
