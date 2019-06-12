import React from "react";
import Search from "./search";
import Logo from "./logo";

const searchIndices = [{ name: `Pages`, title: `Pages`, hitComp: `PageHit` }];

const Header = ({ site, transparent }) => (
  <header role="banner" class="site-header">
    <div class="wrapper">
      <Search collapse indices={searchIndices} />
      <div class="logo">
        <Logo /> The logo
        <a href="/">
          <img
            alt="Candain Digital Service logo"
            src="/images/gatsby-icon.png"
          />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
