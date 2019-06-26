export const getImage = post => {
  let image = "";

  if (
    post &&
    post.node &&
    post.node.frontmatter &&
    post.node.frontmatter.image &&
    post.node.frontmatter.image.childImageSharp &&
    post.node.frontmatter.image.childImageSharp.fixed
  ) {
    image = post.node.frontmatter.image.childImageSharp.fixed;
  }

  return image;
};

export const getPageImage = page => {
  let image = "";

  if (
    page &&
    page.markdownRemark &&
    page.markdownRemark.frontmatter &&
    page.markdownRemark.frontmatter.image &&
    page.markdownRemark.frontmatter.image.childImageSharp &&
    page.markdownRemark.frontmatter.image.childImageSharp.fluid
  ) {
    image = page.markdownRemark.frontmatter.image.childImageSharp.fluid;
  }

  return image;
};
