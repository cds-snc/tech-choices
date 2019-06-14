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
  </Box>
);

export default Header;
