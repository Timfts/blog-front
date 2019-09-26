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

const GridItemContainer = styled.div`
  flex: 0 0 calc(25% - 20px);
  margin: 10px;

  ${media.desk`
    flex:0 0 calc(33.33% - 20px);
  `}
  ${media.tabLand`
    flex:0 0 calc(33.33% - 20px);
  `}
  ${media.tabPort`
    flex:0 0 calc(50% - 20px);
  `}
  ${media.phone`
    width:40rem;
    height:45rem;
  `}
`;

const HomePostsBef = ({ posts, firstPost}) => {

  console.log( firstPost);
  return (
    <HomePostsSection>
      <MainArticleCard post={firstPost} />
      <PostsCardGrid>
        {
          posts.map(post => (
            <GridItemContainer>
              <ArticleCard post={post.node} />
            </GridItemContainer>
          ))
        }
      </PostsCardGrid>
    </HomePostsSection>
  );
};

HomePostsBef.propTypes = {
  posts: PropTypes.array.isRequired,
  firstPost: PropTypes.object.isRequired
};

const HomePosts = props => (
  <StaticQuery
    query={graphql`
      query PostQuery {
        firstPost: allGhostPost(limit: 1) {
          edges {
            node {
              title
              excerpt
              feature_image
              html
              authors {
                name
                profile_image
              }
              published_at(fromNow: true)
            }
          }
        }
        cardPosts: allGhostPost(limit: 12, skip: 1) {
          edges {
            node {
              title
              excerpt
              html
              feature_image
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
    render={data => <HomePostsBef posts={data.cardPosts.edges} firstPost={data.firstPost.edges[0].node} />}
  />
);

export default HomePosts;
