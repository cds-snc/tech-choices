const pageQuery = `{
    pages: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/pages/" },
        frontmatter: {purpose: {eq: "page"}}
      }
    ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            tags
            path
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings
  }
];

module.exports = queries;
