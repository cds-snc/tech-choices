import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Box } from "../style";

const CDSLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "cds-lockup-ko-en.svg" }) {
          id
          publicURL
        }
      }
    `}
    render={data => {
      return (
        <Box width={[200, 268]}>
          <img alt="Canadian Digital Service logo" src={data.file.publicURL} />
        </Box>
      );
    }}
  />
);
export default CDSLogo;
