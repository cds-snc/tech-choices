import React from "react";
import Layout from "../layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { Box, ProductBox } from "../style";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Grid, template } from "../layout/grid";
import styled from "styled-components";

const ProductLink = styled(props => (
  <Link style={{ textDecoration: "none" }} {...props} />
))`
  display: block;
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Products</h2>
      <Box mx={[3, 2, 0]}>
        <Grid
          gridGap={[1, 1, 4]}
          gridRowGap={[3, 1, 3]}
          gridTemplateColumns={[
            template.mobile.columns,
            template.tablet.columns,
            template.desktop.columns
          ]}
          gridTemplateRows={[
            template.mobile.rows,
            template.tablet.rows,
            template.desktop.rows
          ]}
        >
          {posts &&
            posts.map(post => {
              const { path, title } = post.node.frontmatter;
              const image = post.node.frontmatter.image.childImageSharp.fixed;
              return (
                <div key={path}>
                  <ProductLink to={path}>
                    <ProductBox
                      className="product-box"
                      mx={[3, 2, 0]}
                      py={[2]}
                      px={[2]}
                      max-width={200}
                    >
                      <Img fixed={image} />
                      <Box py={[2]} px={[4]} color="black" fontWeight="bold">
                        {title}
                      </Box>
                    </ProductBox>
                  </ProductLink>
                </div>
              );
            })}
        </Grid>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  width
                  height
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
    }
  }
`;

export default IndexPage;
