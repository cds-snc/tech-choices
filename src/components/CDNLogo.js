import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Box } from "../style";

const CDNLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "sig-blk-en.svg" }) {
          id
          publicURL
        }
      }
    `}
    render={data => {
      return (
        <Box width={[200, 268]}>
          <img alt="Symbol of the Government of Canada - Symbole du Gouvernement du Canada" src={data.file.publicURL} />
        </Box>
      );
    }}
  />
);
export default CDNLogo;
