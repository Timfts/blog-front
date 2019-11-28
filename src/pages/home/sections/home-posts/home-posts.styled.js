import styled from "styled-components";
import { media } from "@styles";

const HomePostsStyled = {
  Root: styled.section`
    margin-top: -10rem;
    padding: 0;
    position: relative;
    margin-bottom: 3rem;

    ${media.phone`
      margin-top:-5rem;
      padding:0 2rem;
    `}
  `,

  PostsCardGrid: styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 5rem;

    ${media.phone`
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;
  `}
  `,

  GridCell: styled.div`
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
 `,
};

export default HomePostsStyled;
