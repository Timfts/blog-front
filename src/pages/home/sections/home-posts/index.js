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
      <HomePostsStyled.NewGrid>
       {(() => {
         const gridCells = [];
         for(let test = 0; test <= 10; test++){
           gridCells.push(<HomePostsStyled.NewGridCell />)
         }

         return gridCells;
       })()}
      </HomePostsStyled.NewGrid>
      </GeneralContainer>
    </HomePostsStyled.Root>
  );
};

export default HomePosts;
