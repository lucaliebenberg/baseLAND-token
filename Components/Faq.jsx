import React from "react";

const Faq = () => {
  return (
    <section id="faq" class="bg_light_dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Have Any Questions?
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Frequently asked questions (FAQ) or Questions and Answers (Q&A),
                are listed questions and answers, all supposed to be commonly
                asked in some context
              </p>
            </div>
          </div>
        </div>
        <div class="row small_space">
          <div class="col-lg-12 col-md-12">
            <div class="tab_content">
              <ul
                class="nav nav-pills tab_nav_s2 tab_color_white justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li
                  class="nav-item animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                >
                  <a class="active" data-toggle="tab" href="#tab1">
                    General
                  </a>
                </li>
                {/* <li
                  class="nav-item animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  <a data-toggle="tab" href="#tab2">
                    Pre-ICO & ICC{" "}
                  </a>
                </li> */}
                <li
                  class="nav-item animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                >
                  <a data-toggle="tab" href="#tab3">
                    ICO Tokens
                  </a>
                </li>
                <li
                  class="nav-item animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  <a data-toggle="tab" href="#tab4">
                    Legal
                  </a>
                </li>
              </ul>
              <div class="tab-content half_tab">
                <div
                  class="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div id="accordion1" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingOne">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                What is cryptocurrency?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion1"
                          >
                            <div class="card-body">
                              The best cryptocurrency to buy is one we are
                              willing to hold onto even if it goes down. For
                              example, I believe in Steem enough that I am
                              willing to hold it even if it goes down 99% and
                              would start buying more of it if the price
                              dropped.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="headingTwo">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Which cryptocurrency is best to buy today?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTwo"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion1"
                          >
                            <div class="card-body">
                              The best cryptocurrency to buy is one we are
                              willing to hold onto even if it goes down. For
                              example, I believe in Steem enough that I am
                              willing to hold it even if it goes down 99% and
                              would start buying more of it if the price
                              dropped.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="headingThree">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                How about day trading crypto?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseThree"
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion1"
                          >
                            <div class="card-body">
                              While profits are possible trading
                              cryptocurrencies, so are losses. My first year
                              involved me spending hundreds of hours trading
                              Bitcoin with a result of losing over $5,000 with
                              nothing to show for it. Simply trading digital
                              currencies is very similar to gambling because no
                              one really knows what is going to happen next
                              although anyone can guess! While I was lucky to do
                              nothing expect lose money when I started, the
                              worst thing that can happen is to get lucky right
                              away and get a big ego about what an amazing
                              cryptocurrency trader we are.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="headingFour">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                When to sell a cryptocurrency?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFour"
                            class="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordion1"
                          >
                            <div class="card-body">
                              Before Steem I was all in an another altcoin and
                              really excited about it. When I first bought the
                              price was low and made payments to me every week
                              just for holding it. As I tried to participate in
                              the community over the next several months, I was
                              consistently met with a mix of excitement and
                              hostility. When I began talking openly about this,
                              the negative emotions won over in the community
                              and in me. Originally I had invested and been
                              happy to hold no matter what the price which
                              quickly went up after I bought it.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div id="accordion2" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingFive">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseFive"
                                aria-expanded="true"
                                aria-controls="collapseFive"
                              >
                                How does one acquire bitcoins?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFive"
                            class="collapse show"
                            aria-labelledby="headingFive"
                            data-parent="#accordion2"
                          >
                            <div class="card-body">
                              The best cryptocurrency to buy is one we are
                              willing to hold onto even if it goes down. For
                              example, I believe in Steem enough that I am
                              willing to hold it even if it goes down 99% and
                              would start buying more of it if the price
                              dropped.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="headingSix">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                Can I make money with Bitcoin?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseSix"
                            class="collapse"
                            aria-labelledby="headingSix"
                            data-parent="#accordion2"
                          >
                            <div class="card-body">
                              You should never expect to get rich with Bitcoin
                              or any emerging technology. It is always important
                              to be wary of any thing that sounds too good to be
                              true or disobeys basic
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="headingSeven">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                What happens when bitcoins are lost?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseSeven"
                            class="collapse"
                            aria-labelledby="headingSeven"
                            data-parent="#accordion2"
                          >
                            <div class="card-body">
                              While profits are possible trading
                              cryptocurrencies, so are losses. My first year
                              involved me spending hundreds of hours trading
                              Bitcoin with a result of losing over $5,000 with
                              nothing to show for it. Simply trading digital
                              currencies is very similar to gambling because no
                              one really knows what is going to happen next
                              although anyone can guess! While I was lucky to do
                              nothing expect lose money when I started, the
                              worst thing that can happen is to get lucky right
                              away and get a big ego about what an amazing
                              cryptocurrency trader we are.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="headingEight">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                              >
                                Where is the invest my bitcoin?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseEight"
                            class="collapse"
                            aria-labelledby="headingEight"
                            data-parent="#accordion2"
                          >
                            <div class="card-body">
                              Before Steem I was all in an another altcoin and
                              really excited about it. When I first bought the
                              price was low and made payments to me every week
                              just for holding it. As I tried to participate in
                              the community over the next several months, I was
                              consistently met with a mix of excitement and
                              hostility. When I began talking openly about this,
                              the negative emotions won over in the community
                              and in me. Originally I had invested and been
                              happy to hold no matter what the price which
                              quickly went up after I bought it.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab2" role="tabpanel">
                  <div class="row">
                    <div class="col-md-6">
                      <div id="accordion3" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingNine">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseNine"
                                aria-expanded="true"
                                aria-controls="collapseNine"
                              >
                                How does one acquire bitcoins?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseNine"
                            class="collapse show"
                            aria-labelledby="headingNine"
                            data-parent="#accordion3"
                          >
                            <div class="card-body">
                              While it may be possible to find individuals who
                              wish to sell bitcoins in exchange for a credit
                              card or PayPal payment, most exchanges do not
                              allow funding via these payment methods. This is
                              due to cases where someone buys bitcoins with
                              PayPal, and then reverses their half of the
                              transaction. This is commonly referred to as a
                              chargeback.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="headingTen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseTen"
                                aria-expanded="false"
                                aria-controls="collapseTen"
                              >
                                Can I make money with Bitcoin?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTen"
                            class="collapse"
                            aria-labelledby="headingTen"
                            data-parent="#accordion3"
                          >
                            <div class="card-body">
                              You should never expect to get rich with Bitcoin
                              or any emerging technology. It is always important
                              to be wary of anything that sounds too good to be
                              true or disobeys basic economic rules.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="headingEleven">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseEleven"
                                aria-expanded="false"
                                aria-controls="collapseEleven"
                              >
                                What happens when bitcoins are lost?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseEleven"
                            class="collapse"
                            aria-labelledby="headingEleven"
                            data-parent="#accordion3"
                          >
                            <div class="card-body">
                              When a user loses his wallet, it has the effect of
                              removing money out of circulation. Lost bitcoins
                              still remain in the block chain just like any
                              other bitcoins. However, lost bitcoins remain
                              dormant forever because there is no way for
                              anybody to find the private key(s) that would
                              allow them to be spent again. Because of the law
                              of supply and demand, when fewer bitcoins are
                              available, the ones that are left will be in
                              higher demand and increase in value to compensate.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="headingTwelve">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseTwelve"
                                aria-expanded="false"
                                aria-controls="collapseTwelve"
                              >
                                Who controls the Bitcoin network?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTwelve"
                            class="collapse"
                            aria-labelledby="headingTwelve"
                            data-parent="#accordion3"
                          >
                            <div class="card-body">
                              Nobody owns the Bitcoin network much like no one
                              owns the technology behind email. Bitcoin is
                              controlled by all Bitcoin users around the world.
                              While developers are improving the software, they
                              can't force a change in the Bitcoin protocol
                              because all users are free to choose what software
                              and version they use.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div id="accordion4" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingThirteen">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseThirteen"
                                aria-expanded="true"
                                aria-controls="collapseThirteen"
                              >
                                How does one acquire bitcoins?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseThirteen"
                            class="collapse show"
                            aria-labelledby="headingThirteen"
                            data-parent="#accordion4"
                          >
                            <div class="card-body">
                              While it may be possible to find individuals who
                              wish to sell bitcoins in exchange for a credit
                              card or PayPal payment, most exchanges do not
                              allow funding via these payment methods. This is
                              due to cases where someone buys bitcoins with
                              PayPal, and then reverses their half of the
                              transaction. This is commonly referred to as a
                              chargeback.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="headingFourteen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseFourteen"
                                aria-expanded="false"
                                aria-controls="collapseFourteen"
                              >
                                Can I make money with Bitcoin?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFourteen"
                            class="collapse"
                            aria-labelledby="headingFourteen"
                            data-parent="#accordion4"
                          >
                            <div class="card-body">
                              You should never expect to get rich with Bitcoin
                              or any emerging technology. It is always important
                              to be wary of anything that sounds too good to be
                              true or disobeys basic economic rules.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="headingFifteen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseFifteen"
                                aria-expanded="false"
                                aria-controls="collapseFifteen"
                              >
                                What happens when bitcoins are lost?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFifteen"
                            class="collapse"
                            aria-labelledby="headingFifteen"
                            data-parent="#accordion4"
                          >
                            <div class="card-body">
                              When a user loses his wallet, it has the effect of
                              removing money out of circulation. Lost bitcoins
                              still remain in the block chain just like any
                              other bitcoins. However, lost bitcoins remain
                              dormant forever because there is no way for
                              anybody to find the private key(s) that would
                              allow them to be spent again. Because of the law
                              of supply and demand, when fewer bitcoins are
                              available, the ones that are left will be in
                              higher demand and increase in value to compensate.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="headingSixteen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseSixteen"
                                aria-expanded="false"
                                aria-controls="collapseSixteen"
                              >
                                Who controls the Bitcoin network?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseSixteen"
                            class="collapse"
                            aria-labelledby="headingSixteen"
                            data-parent="#accordion4"
                          >
                            <div class="card-body">
                              Nobody owns the Bitcoin network much like no one
                              owns the technology behind email. Bitcoin is
                              controlled by all Bitcoin users around the world.
                              While developers are improving the software, they
                              can't force a change in the Bitcoin protocol
                              because all users are free to choose what software
                              and version they use.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab3" role="tabpanel">
                  <div class="row">
                    <div class="col-md-6">
                      <div id="accordion5" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingSeventeen">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseSeventeen"
                                aria-expanded="true"
                                aria-controls="collapseSeventeen"
                              >
                                How are bitcoins created?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseSeventeen"
                            class="collapse show"
                            aria-labelledby="headingSeventeen"
                            data-parent="#accordion5"
                          >
                            <div class="card-body">
                              New bitcoins are generated by a competitive and
                              decentralized process called "mining". This
                              process involves that individuals are rewarded by
                              the network for their services. Bitcoin miners are
                              processing transactions and securing the network
                              using specialized hardware and are collecting new
                              bitcoins in exchange.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="headingEighteen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseEighteen"
                                aria-expanded="false"
                                aria-controls="collapseEighteen"
                              >
                                Why do bitcoins have value?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseEighteen"
                            class="collapse"
                            aria-labelledby="headingEighteen"
                            data-parent="#accordion5"
                          >
                            <div class="card-body">
                              Bitcoins have value because they are useful as a
                              form of money. Bitcoin has the characteristics of
                              money (durability, portability, fungibility,
                              scarcity, divisibility, and recognizability) based
                              on the properties of mathematics rather than
                              relying on physical properties (like gold and
                              silver) or trust in central authorities (like fiat
                              currencies). In short, Bitcoin is backed by
                              mathematics.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="headingNineteen">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseNineteen"
                                aria-expanded="false"
                                aria-controls="collapseNineteen"
                              >
                                What determines bitcoin's price?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseNineteen"
                            class="collapse"
                            aria-labelledby="headingNineteen"
                            data-parent="#accordion5"
                          >
                            <div class="card-body">
                              The price of a bitcoin is determined by supply and
                              demand. When demand for bitcoins increases, the
                              price increases, and when demand falls, the price
                              falls. There is only a limited number of bitcoins
                              in circulation and new bitcoins are created at a
                              predictable and decreasing rate
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="headingTwenty">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseTwenty"
                                aria-expanded="false"
                                aria-controls="collapseTwenty"
                              >
                                Can bitcoins become worthless?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTwenty"
                            class="collapse"
                            aria-labelledby="headingTwenty"
                            data-parent="#accordion5"
                          >
                            <div class="card-body">
                              Yes. History is littered with currencies that
                              failed and are no longer used, such as the German
                              Mark during the Weimar Republic and, more
                              recently, the Zimbabwean dollar.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div id="accordion6" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="headingNine">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapse21"
                                aria-expanded="true"
                                aria-controls="collapse21"
                              >
                                How are bitcoins created?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse21"
                            class="collapse show"
                            aria-labelledby="heading21"
                            data-parent="#accordion6"
                          >
                            <div class="card-body">
                              New bitcoins are generated by a competitive and
                              decentralized process called "mining". This
                              process involves that individuals are rewarded by
                              the network for their services. Bitcoin miners are
                              processing transactions and securing the network
                              using specialized hardware and are collecting new
                              bitcoins in exchange.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="heading22">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse22"
                                aria-expanded="false"
                                aria-controls="collapse22"
                              >
                                Why do bitcoins have value?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse22"
                            class="collapse"
                            aria-labelledby="heading22"
                            data-parent="#accordion6"
                          >
                            <div class="card-body">
                              Bitcoins have value because they are useful as a
                              form of money. Bitcoin has the characteristics of
                              money (durability, portability, fungibility,
                              scarcity, divisibility, and recognizability) based
                              on the properties of mathematics rather than
                              relying on physical properties (like gold and
                              silver) or trust in central authorities (like fiat
                              currencies). In short, Bitcoin is backed by
                              mathematics.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="heading23">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse23"
                                aria-expanded="false"
                                aria-controls="collapse23"
                              >
                                What determines bitcoin's price?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse23"
                            class="collapse"
                            aria-labelledby="heading23"
                            data-parent="#accordion6"
                          >
                            <div class="card-body">
                              The price of a bitcoin is determined by supply and
                              demand. When demand for bitcoins increases, the
                              price increases, and when demand falls, the price
                              falls. There is only a limited number of bitcoins
                              in circulation and new bitcoins are created at a
                              predictable and decreasing rate
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="heading24">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse24"
                                aria-expanded="false"
                                aria-controls="collapse24"
                              >
                                Can bitcoins become worthless?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse24"
                            class="collapse"
                            aria-labelledby="heading24"
                            data-parent="#accordion6"
                          >
                            <div class="card-body">
                              Yes. History is littered with currencies that
                              failed and are no longer used, such as the German
                              Mark during the Weimar Republic and, more
                              recently, the Zimbabwean dollar.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab4" role="tabpanel">
                  <div class="row">
                    <div class="col-md-6">
                      <div id="accordion7" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="heading25">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapse25"
                                aria-expanded="true"
                                aria-controls="collapse25"
                              >
                                Is Bitcoin legal?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse25"
                            class="collapse show"
                            aria-labelledby="heading25"
                            data-parent="#accordion7"
                          >
                            <div class="card-body">
                              To the best of our knowledge, Bitcoin has not been
                              made illegal by legislation in most jurisdictions.
                              However, some jurisdictions (such as Argentina and
                              Russia) severely restrict or ban foreign
                              currencies. Other jurisdictions (such as Thailand)
                              may limit the licensing of certain entities such
                              as Bitcoin exchanges.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="heading26">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse26"
                                aria-expanded="false"
                                aria-controls="collapse26"
                              >
                                Is Bitcoin useful for illegal activities?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse26"
                            class="collapse"
                            aria-labelledby="heading26"
                            data-parent="#accordion7"
                          >
                            <div class="card-body">
                              Bitcoin is money, and money has always been used
                              both for legal and illegal purposes. Cash, credit
                              cards and current banking systems widely surpass
                              Bitcoin in terms of their use to finance crime.
                              Bitcoin can bring significant innovation in
                              payment systems and the benefits of such
                              innovation are often considered to be far beyond
                              their potential drawbacks.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="heading27">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse27"
                                aria-expanded="false"
                                aria-controls="collapse27"
                              >
                                Can Bitcoin be regulated?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse27"
                            class="collapse"
                            aria-labelledby="heading27"
                            data-parent="#accordion7"
                          >
                            <div class="card-body">
                              The Bitcoin protocol itself cannot be modified
                              without the cooperation of nearly all its users,
                              who choose what software they use. Attempting to
                              assign special rights to a local authority in the
                              rules of the global Bitcoin network is not a
                              practical possibility.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="heading28">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse28"
                                aria-expanded="false"
                                aria-controls="collapse28"
                              >
                                What about Bitcoin and taxes?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse28"
                            class="collapse"
                            aria-labelledby="heading28"
                            data-parent="#accordion7"
                          >
                            <div class="card-body">
                              Bitcoin is not a fiat currency with legal tender
                              status in any jurisdiction, but often tax
                              liability accrues regardless of the medium used.
                              There is a wide variety of legislation in many
                              different jurisdictions which could cause income,
                              sales, payroll, capital gains, or some other form
                              of tax liability to arise with Bitcoin.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div id="accordion8" class="faq_content">
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.4s"
                        >
                          <div class="card-header" id="heading29">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapse29"
                                aria-expanded="true"
                                aria-controls="collapse29"
                              >
                                Is Bitcoin legal?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse29"
                            class="collapse show"
                            aria-labelledby="heading29"
                            data-parent="#accordion8"
                          >
                            <div class="card-body">
                              To the best of our knowledge, Bitcoin has not been
                              made illegal by legislation in most jurisdictions.
                              However, some jurisdictions (such as Argentina and
                              Russia) severely restrict or ban foreign
                              currencies. Other jurisdictions (such as Thailand)
                              may limit the licensing of certain entities such
                              as Bitcoin exchanges.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <div class="card-header" id="heading30">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse30"
                                aria-expanded="false"
                                aria-controls="collapse30"
                              >
                                Is Bitcoin useful for illegal activities?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse30"
                            class="collapse"
                            aria-labelledby="heading30"
                            data-parent="#accordion8"
                          >
                            <div class="card-body">
                              Bitcoin is money, and money has always been used
                              both for legal and illegal purposes. Cash, credit
                              cards and current banking systems widely surpass
                              Bitcoin in terms of their use to finance crime.
                              Bitcoin can bring significant innovation in
                              payment systems and the benefits of such
                              innovation are often considered to be far beyond
                              their potential drawbacks.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <div class="card-header" id="heading31">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse31"
                                aria-expanded="false"
                                aria-controls="collapse31"
                              >
                                Can Bitcoin be regulated?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse31"
                            class="collapse"
                            aria-labelledby="heading31"
                            data-parent="#accordion8"
                          >
                            <div class="card-body">
                              The Bitcoin protocol itself cannot be modified
                              without the cooperation of nearly all its users,
                              who choose what software they use. Attempting to
                              assign special rights to a local authority in the
                              rules of the global Bitcoin network is not a
                              practical possibility.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card animation"
                          data-animation="fadeInUp"
                          data-animation-delay="1s"
                        >
                          <div class="card-header" id="heading32">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse32"
                                aria-expanded="false"
                                aria-controls="collapse32"
                              >
                                What about Bitcoin and taxes?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapse32"
                            class="collapse"
                            aria-labelledby="heading32"
                            data-parent="#accordion8"
                          >
                            <div class="card-body">
                              Bitcoin is not a fiat currency with legal tender
                              status in any jurisdiction, but often tax
                              liability accrues regardless of the medium used.
                              There is a wide variety of legislation in many
                              different jurisdictions which could cause income,
                              sales, payroll, capital gains, or some other form
                              of tax liability to arise with Bitcoin.
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
