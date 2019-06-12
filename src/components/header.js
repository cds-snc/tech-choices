import React from "react";
import Search from "./search";

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` }
];

const Header = ({ site, transparent }) => (
  <div>
    <Search collapse indices={searchIndices} />
  </div>
);

export default Header;
