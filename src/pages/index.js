import React from "react";
import Layout from "../layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { Box } from "../style";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Pages</h2>
      <div className="products-main">
        {posts &&
          posts.map(post => {
            const { path, title } = post.node.frontmatter;
            const image = post.node.frontmatter.image.childImageSharp.fixed;

            return (
              <div className="markdown" key={path}>
                <Box mt={[2, 3]} py={[2]}>
                  <Link to={path}>
                    {title}
                    <Img fixed={image} />
                  </Link>
                </Box>
              </div>
            );
          })}
      </div>
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
                fixed(width: 200) {
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
