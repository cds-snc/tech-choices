import React from "react";
import Layout from "../layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { Box } from "../style";

const IndexPage = ({ data }) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Pages</h2>
      <div className="product">
        {posts &&
          posts.map(post => {
            const title = post.node.frontmatter.title;
            const path = post.node.frontmatter.path;
            return (
              <div className="markdown" key={path}>
                <Box mt={[2, 3]} py={[2]}>
                  <Link to={path}>{title}</Link>
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
          excerpt
          html
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
