import React from "react";
import styled from "styled-components";
import ArticleCard from "../../shared/article-card";
import MainArticleCard from "../../shared/main-article-card";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { media } from "@styles";

const HomePostsSection = styled.section`
  margin-top: -10rem;
  padding: 0 5.5rem;
  position: relative;
  margin-bottom:3rem;

  ${media.phone`
    margin-top:-5rem;
    padding:0 2rem;
  `}
`;

const PostsCardGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 5rem;

  ${media.phone`
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;
  `}
`;

const GridCell = styled.div`
 /*  flex: 0 0 calc(25% - 20px); */
  height: 450px;
  margin: 10px;
  flex-basis: 1;
  width: calc(25% - 20px);
  height:23vw;

  ${media.desk`
    flex:0 0 calc(33.33% - 20px);
    height: 28vw;
  `}
  ${media.tabLand`
    flex:0 0 calc(33.33% - 20px);
    height:27vw;
  `}
  ${media.tabPort`
    flex:0 0 calc(50% - 20px);
    height: 43vw;
  `}
  ${media.phone`
    width:80vw;
    height:80vw;
  `} 
`;

const HomePostsBef = ({ posts }) => {
  const firstPost = posts[0].node;
  const cardPosts = posts.slice(1, posts.length);

  console.log( firstPost);
  return (
    <HomePostsSection>
      <MainArticleCard post={firstPost} />
      <PostsCardGrid>
        {
          cardPosts.map(post => (
            <GridCell>
              <ArticleCard post={post.node} />
            </GridCell>
          ))
        }
      </PostsCardGrid>
    </HomePostsSection>
  );
};

HomePostsBef.propTypes = {
  posts: PropTypes.array.isRequired
};

const HomePosts = props => (
  <StaticQuery
    query={graphql`
      query PostQuery {
        cardPosts: allGhostPost(limit: 13, sort: {order: DESC, fields: [published_at]}) {
          edges {
            node {
              title
              excerpt
              html
              feature_image
              slug
              authors {
                name
                profile_image
              }
              published_at(fromNow: true)
            }
          }
        }
      }
    `}
    render={data => <HomePostsBef posts={data.cardPosts.edges} />}
  />
);

export default HomePosts;
