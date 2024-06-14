import React, { useState, useEffect } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const Booking = ({ buyToken, tokenSale }) => {
    const [selectedToken, setSelectedToken] = useState("TDF");
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    return (
      <section id="booking" style={{ backgroundColor: '#242421' }} data-z-index="1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  Booking
                </h4>       
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3">
              <div className="booking_form res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
                <div className="form_wrap text-center animation" data-animation="fadeIn" data-animation-delay="1s">
                  <div method="post" name="enq" className="field_form">
                    <div className="row">
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                        <label htmlFor="token-select" className="text-white">Select Token</label>
                        <select
                          id="token-select"
                          className="form-control"
                          value={selectedToken}
                          onChange={(e) => setSelectedToken(e.target.value)}
                        >
                          <option value="TDF">TDF</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <label htmlFor="date-picker" className="text-white">Select Date</label>
                        <DatePicker
                          id="date-picker"
                          className="form-control"
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </div>
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <label className="text-white">Your $STAY Balance</label>
                        <p className="form-control bg-dark text-white">{userBalance} $STAY</p>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                    Confirm Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Booking;
