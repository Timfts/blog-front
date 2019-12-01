import React, { useState, useEffect } from "react";
import LayoutStyled from "./layout.styled";
import layoutData from "./layout.data";
import PropTypes from "prop-types";
import { GlobalStyle } from "@styles";
import ContextProvider from "@config/context";
import Header from "./header";
import SocialBar from "./social-bar";
import Footer from "./footer";
import { debounce } from "@helpers";

const Layout = ({ children }) => {
  const data = layoutData();
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
    <ContextProvider>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} scrolled={scrolled} />
      <SocialBar />
      <LayoutStyled.Root onScroll={debounce(scrollHandler)} scrolled={scrolled}>
        <main>{children}</main>
        <Footer />
      </LayoutStyled.Root>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
