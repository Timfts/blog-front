import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeHeader from "../components/pages-sections/home/home-header";
import HomePosts from "../components/pages-sections/home/home-posts";



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <HomePosts />
    </Layout>
  );
};


export default IndexPage;
