import React, { useContext } from "react";
import { AppContext } from "@config/context/appContext";

import HomePostsStyled from "./home-posts.styled";
import HomePostsData from "./home-posts.data";

import ArticleCard from "@components/shared/article-card";
import MainArticleCard from "@components/shared/main-article-card";
import { GeneralContainer } from "@components/shared/styled-comps";

const HomePosts = () => {
  const { isMobile, isPhone, checkState } = useContext(AppContext)
  const posts = HomePostsData();
  const firstPost = posts[0].node;
  const cardPosts = posts.slice(1, posts.length);

  return (
    <HomePostsStyled.Root>
      <GeneralContainer>
        <MainArticleCard post={firstPost} />
        <button onClick={() => checkState()}>teste</button>
        {isMobile ? (<p>isMobile</p>) : ''}
        {isPhone ? (<p>isPhone</p>) : ''}
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
