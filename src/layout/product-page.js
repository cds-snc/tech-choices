import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Box } from "../style";
import SEO from "../components/seo";
import { getPageImage } from "../utils/getImage";
import Img from "gatsby-image";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  let { html } = markdownRemark;

  const title = markdownRemark.frontmatter.title;

  // add spans for styling
  html = html.replace(new RegExp("<li>", "g"), "<li><span>");
  html = html.replace(new RegExp("</li>", "g"), "</span></li>");

  const image = getPageImage(data);

  return (
    <Layout>
      <SEO title="Product" />
      <h2>{title}</h2>
      <Box display="flex" justifyContent="center">
        <Box mb={[1, 3, 4]} width={[50, 100]}>
          <Img fluid={image} />
        </Box>
      </Box>
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
        image {
          childImageSharp {
            fluid(maxWidth: 100) {
              sizes
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  }
`;
