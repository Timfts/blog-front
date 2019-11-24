import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStyle, media } from "@styles";
import Header from "./layout/header";
import SocialBar from "./layout/social-bar";
import Footer from "./layout/footer";
import { debounce } from "../helpers";

const ViewContainer = styled.div`
  height:${props => (props.scrolled ? "85vh " : "80vh")};
  overflow-y:scroll;
  overflow-x:hidden;
  transition:all .4s;
  margin:${props => (props.scrolled ? "15vh " : "20vh")} 0 0 5.5rem;
  ${media.desk`
    margin:200px 0 0 5.5rem;
  `}
  ${media.tabLand`
    margin:200px 0 0 5.5rem;
  `}
  ${media.tabPort`
    margin:20vh 0;
  `}

`;

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
          <ViewContainer onScroll={debounce(scrollHandler)} scrolled={scrolled}>
            <main>{children}</main>
            <Footer />
          </ViewContainer>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
