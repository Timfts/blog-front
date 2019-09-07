import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import HomeHeader from "../components/pages/home/home-header";
import HomePosts from "../components/pages/home/home-posts";

const Container = styled.div`
  height: 100vh;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <HomePosts />
      <Container />
    </Layout>
  );
};


export default IndexPage;
