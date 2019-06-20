import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Box } from "../style";
import SEO from "../components/seo";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  let { html } = markdownRemark;

  
  // add spans for styling
  html = html.replace(new RegExp("<li>", "g"), "<li><span>");
  html = html.replace(new RegExp("</li>", "g"), "</span></li>");

  return (
    <Layout>
      <SEO title="Product" />
      <Box fontSize={[1, 2]} dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
