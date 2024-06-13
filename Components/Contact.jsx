import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="roadmap" class="" style={{ backgroundColor: '#242421' }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Roadmap
              </h4>
            </div>
            <div style={{ margin:  '0 auto' }}>
          <img
                src={`assets/images/baseLand-roadmap.png`}
                alt="service_icon1"
                />
        </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
