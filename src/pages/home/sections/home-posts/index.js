import React from "react";
import ArticleCard from "@components/shared/article-card";
import MainArticleCard from "@components/shared/main-article-card";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import HomePostsStyled from './home-posts.styled';

const HomePostsBef = ({ posts }) => {
  const firstPost = posts[0].node;
  const cardPosts = posts.slice(1, posts.length);

  console.log( firstPost);
  return (
    <HomePostsStyled.root>
      <MainArticleCard post={firstPost} />
      <HomePostsStyled.postsCardGrid>
        {
          cardPosts.map(post => (
            <HomePostsStyled.gridCell>
              <ArticleCard post={post.node} />
            </HomePostsStyled.gridCell>
          ))
        }
      </HomePostsStyled.postsCardGrid>
    </HomePostsStyled.root>
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
