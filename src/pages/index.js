import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHeader from "../components/pages/home/home-header"
import LatestPosts from "../components/pages/home/LatestPosts"

const Container = styled.div`
  height: 100vh;
`

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.nodes;
  const firstPost = posts[0];
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <LatestPosts />
      {firstPost.title}
      <Container>
        <h1>Hi people</h1>
        <p>test to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Layout>
  )
}

const IndexPageQuery = props => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allGhostPost {
          nodes {
            excerpt
            feature_image
            id
            title
            authors {
              name
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)

export default IndexPageQuery
