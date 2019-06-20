import React from "react";
import CDNLogo from "./CDNLogo";
import CDSLogo from "./CDSLogo";
import { Box } from "../style";

const Header = ({ site, transparent }) => (
  <Box as="header">
    <Box px={[3, 5]} py={[2]}>
      <CDNLogo />
    </Box>
    <Box bg="black" px={[3, 5]} py={[4]}>
      <CDSLogo />
    </Box>
    <Box px={[3, 5]} py={[2]} pt={[4]} display="flex" alignItems="center">
      <h1 style={{ margin: "0 .5em 0" , display: "inline-block" }}>Tech Choices</h1>{" "}
      <cds-tag bkd-color="#f90277" text="Alpha"></cds-tag>
    </Box>
  </Box>
);

export default Header;
