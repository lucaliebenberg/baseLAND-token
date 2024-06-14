import React from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ address, connectWallet }) => {
  const menuList = [
    // {
    //   menu: "Home",
    //   link: "#home",
    // },
    {
      menu: "About",
      link: "#about",
    },
    {
      menu: "Tokenomics",
      link: "#tokenomics",
    },
    {
      menu: "Token Sale",
      link: "#tokensale",
    },
    {
      menu: "Booking",
      link: "#booking",
    },
    {
      menu: "Governance",
      link: "#governance",
    },
    {
      menu: "Staking",
      link: "#staking",
    },
    {
      menu: "Roadmap",
      link: "#roadmap",
    },
  ];

  return (
    <header class="header_wrap fixed-top" style={{ backgroundColor: '#242421' }}>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <button
            class="navbar-toggler animation"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <BiMenu />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              {menuList.map((menu, i) => (
                <li
                  key={i + 1}
                  class=" animation"
                  data-animation="fadeInDown"
                  data-animation-delay={`1.${i + 1}s`}
                >
                  <a class="nav-link" href={menu.link}>
                    {menu.menu}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="navbar-nav nav_btn align-items-center">
              <li
                class="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
              >
                {address ? (
                  <a class="btn btn-default btn-radius nav_item ">
                    <small className="new-color">
                      {" "}
                      {address.slice(0, 15)}...
                    </small>
                  </a>
                ) : (
                  <a
                    onClick={connectWallet}
                    // style={{ backgroundColor: 'white', color: 'black' }}
                    class="btn btn-default btn-radius nav_item"
                  >
                    <small className="new-color">Connect</small>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
