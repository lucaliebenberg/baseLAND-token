import React from "react";

const Service = () => {
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
    <section id="about" style={{ backgroundColor: '#242421' }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="text-center">
              <h4
                class="animation"
                style={{ color: 'white' }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $baseLAND
              </h4>
            </div>
          </div>
        </div>
        <div class="row">
          {services.map((service, i) => (
            <div key={i + 1} class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 6}s`}
              >
                <img
                  src={`assets/images/service_icon${i + 1}.png`}
                  alt="service_icon1"
                />
                <h4>{service.title}</h4>
                <p>{service.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
