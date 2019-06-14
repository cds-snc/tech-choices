import { ThemeProvider, theme } from "../style";
import GlobalStyles from "../style/GlobalStyles";
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header";
import { Box, Container } from "../grid";
import Search from "../components/search";
const searchIndices = [{ name: `Pages`, title: `Pages`, hitComp: `PageHit` }];

/* https://github.com/gregoralbrecht/gatsby-starter-styled/blob/master/src/components/Layout/index.jsx  */

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container maxWidth="700px" px={3}>
          <Search collapse indices={searchIndices} />
            <main>{children}</main>
            <Box mt={3}>
              <footer>© {new Date().getFullYear()}</footer>
            </Box>
          </Container>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
