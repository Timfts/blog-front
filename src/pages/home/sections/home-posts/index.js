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
      </GeneralContainer>
      <HomePostsStyled.NewGrid>
        {cardPosts.map((post, index) => (
          <HomePostsStyled.NewGridCell key={`grid-cell-${index}`}>
            <ArticleCard post={post.node} />
          </HomePostsStyled.NewGridCell>
        ))}
      </HomePostsStyled.NewGrid>
    </HomePostsStyled.Root>
  );
};

export default HomePosts;
