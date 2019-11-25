import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";
import HomeHeader from "./sections/home-header";
import HomePosts from "./sections/home-posts";



const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <HomePosts />
    </Layout>
  );
};


export default HomePage;
