import React from "react";
import Search from "./search";
import Logo from "./logo";

const searchIndices = [{ name: `Pages`, title: `Pages`, hitComp: `PageHit` }];

const Header = ({ site, transparent }) => (
  <div>
    <Logo />

    {/*<Heading fontSize={[4, 5, 6]}>Header</Heading> */ }

    <div>
      <Search collapse indices={searchIndices} />
    </div>
  </div>
);

export default Header;
