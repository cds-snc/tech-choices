import { ThemeProvider, theme, Box, Container } from "../style";
import GlobalStyles from "../style/GlobalStyles";
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header";
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
        <div className="wrapper">
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>
            <Box className="main-content">
              <Search collapse indices={searchIndices} />
              <main>{children}</main>
            </Box>
            <Box mt={3} as="footer">
              © {new Date().getFullYear()}
            </Box>
          </Container>
        </div>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
