import React from "react";
import styled from "styled-components";
import ArticleCard from "../../shared/articleCard";
import MainArticleCard from '../../shared/main-article-card';
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const HomePostsSection = styled.section`
  margin-top: -10rem;
  padding: 0 5.5rem;
  position: relative;
`;


const HomePostsBef = ({ posts }) => {
  const latestPost = posts[0];
  const allExceptFirst = [...posts].slice(1);

  console.log(latestPost, allExceptFirst);
  return (
    <HomePostsSection>
      <MainArticleCard post={latestPost} />
    </HomePostsSection>
  );
};

HomePostsBef.propTypes = {
  posts: PropTypes.array.isRequired,
};

const HomePosts = props => (
  <StaticQuery
    query={graphql`
      query PostQuery {
        allGhostPost {
          nodes {
            title
            excerpt
            feature_image
            id
            authors {
              name
              profile_image
            }
            published_at(fromNow: true)
          }
        }
      }
    `}
    render={data => <HomePostsBef posts={data.allGhostPost.nodes} />}
  />
);

export default HomePosts;
