import React from "react";

import HomePostsStyled from "./home-posts.styled";
import HomePostsData from "./home-posts.data";

import ArticleCard from "@components/shared/article-card";
import MainArticleCard from "@components/shared/main-article-card";
import { GeneralContainer } from "@components/shared/styled-comps";

const HomePosts = () => {
  const posts = HomePostsData();
  const firstPost = posts[0].node;
  const cardPosts = posts.slice(1, posts.length);

  return (
    <HomePostsStyled.Root>
      <GeneralContainer>
      <MainArticleCard post={firstPost} />
      <HomePostsStyled.PostsCardGrid>
        {cardPosts.map((post, index) => (
          <HomePostsStyled.GridCell key={`home-post-grid-cell-${index}`}>
            <ArticleCard post={post.node} />
          </HomePostsStyled.GridCell>
        ))}
      </HomePostsStyled.PostsCardGrid>
      </GeneralContainer>
    </HomePostsStyled.Root>
  );
};

export default HomePosts;
