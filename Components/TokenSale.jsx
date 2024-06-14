import React, { useState, useEffect } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = tokenSale?.tokenSold ?? 0;
      const tokenTotalSupply = tokenSale?.tokenTotalSupply * 1 ?? 1;

      console.log(tokenSold);
      console.log(tokenTotalSupply);

      const percentageNew = (tokenSold / tokenTotalSupply) * 100;
      console.log(percentageNew);

      if (tokenTotalSupply === 0) {
        console.error(
          "Token sale balance is zero, cannot calculate percentage."
        );
      } else {
        setPercentage(percentageNew);
        console.log(`Percentage sold: ${percentageNew}%`);
      }
    };

    // Call the calculatePercentage function immediately when the component mounts
    calculatePercentage();

    const timer = setTimeout(calculatePercentage, 2000);

    return () => clearTimeout(timer);
  }, [tokenSale]);

  return (
    <section
      id="tokensale"
      style={{ backgroundColor: '#242421' }}
      data-z-index="1"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>  
              <p class="text-center">Token sale will be visible once your wallet is connected</p>     
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Starting time :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                June 13, 2024 (Thu 10:00 PM)
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                Ending time :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                Jul 13, 2024 (Sat 10:00 PM)
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                Tokens exchange rate
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
                style={{ textTransform: 'none' }}
              >
              1 baseLAND = 0.0000003 ETH
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                class="tk_countdown text-center animation token_countdown_bg"
                data-animation="fadeIn"
                data-animation-delay="1s"
              >
                <div method="post" name="enq" class="field_form">
                  <div class="row">
                    <div
                      class="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <input
                        type="number"
                        required="required"
                        placeholder="1"
                        id="first-name"
                        min={1}
                        class="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="tk_counter_inner">
                  <div
                    class="progress animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    <div
                      class="progress-bar gradient "
                      // role="progressbar"
                      style={{
                        width: `${tokenSale?.tokenSold}`,
                      }}
                      x
                    >
                      {`${tokenSale?.tokenSold}`}
                    </div>

                    <span class="progress_label bg-white inline_style_1">
                      <strong> {tokenSale?.tokenSold} basedLAND </strong>
                    </span>
                    <span class="progress_label bg-white inline_style_2">
                      <strong> {tokenSale?.tokenSaleBalance} basedLAND </strong>
                    </span>
                    <span class="progress_min_val">Sale Raised</span>
                    <span class="progress_max_val">Soft-caps</span>
                  </div>
                  <a
                    onClick={() => buyToken(nToken)}
                    class="btn btn-default btn-radius animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.4s"
                  >
                    Buy Tokens <BsArrowRight />
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                Total tokens for sale
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
                style={{ textTransform: 'none' }}
              >
                {`${tokenSale?.tokenTotalSupply - tokenSale?.tokenSold}`} basedLAND
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                Acceptable Currency :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                ETH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
