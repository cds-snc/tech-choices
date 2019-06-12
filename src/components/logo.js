import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => (
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
      return <img src={data.file.publicURL } />;
    }}
  />
);
export default Logo;
