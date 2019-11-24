import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "@styles";
import { StaticQuery, graphql } from "gatsby";
import Header from "./layout/header";
import SocialBar from "./layout/social-bar";
import Footer from "./layout/footer";
import { debounce } from "../helpers";
import LayoutStyled from "./layout.styled";

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {});

  function scrollHandler(e) {
    if (e.target.scrollTop > 250) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  }

  return (
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <>
          <GlobalStyle />
          <Header
            siteTitle={data.site.siteMetadata.title}
            scrolled={scrolled}
          />
          <SocialBar />
          <LayoutStyled.container onScroll={debounce(scrollHandler)} scrolled={scrolled}>
            <main>{children}</main>
            <Footer />
          </LayoutStyled.container>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
