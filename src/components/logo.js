import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
      return (
        <img alt="Canadian Digital Service logo" src={data.file.publicURL} />
      );
    }}
  />
);
export default Logo;
