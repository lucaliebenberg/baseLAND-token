import React from "react";

const About = () => {
  const services = [
    {
      title: "Market Driven Price",
      discription:
        "$basedLAND price is purely based on market dynamics.",
    },
    {
      title: "Fund Conversion",
      discription:
        "$basedLAND tokenomics channel funding towards the conservation of real land.",
    },
    {
      title: "Community Governance",
      discription:
        "$basedLAND holders can vote on which land projects will receive funds.",
    },
    {
      title: "Accomodation Utility",
      discription:
        "Holders can stake $basedLAND for $STAY which is used to book accommodation.",
    },
  ];
  return (
    <section id="tokenomics" style={{ backgroundColor: '#242421' }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="text-center" style={{ color: 'white' }}>
              <h4
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $baseLAND Tokenomics
              </h4>
            </div>
            <div>
          <img
                src={`assets/images/baseLand-tokenomics.png`}
                alt="service_icon1"
                />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
