import styled from "styled-components";
import { media } from "@styles";

const HomePostsStyled = {
  Root: styled.section`
    margin-top: -10rem;
    padding: 0;
    position: relative;
    margin-bottom: 3rem;
  `,


  NewGrid: styled.div`
    max-width:calc(115rem + 20px);
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top:5rem;

    ${media.desk`
      padding:0 1rem;
    `}

    ${media.phone`
      padding:0 4rem;
    `}
  `,

  Teste: styled.div`
    height:20px;
    background-color:red;
  `,

  NewGridCell: styled.div`
    height:21vw;
    width:calc(25% - 20px);
    margin:10px;


    ${media.tabLand`
      width:calc(33.33% - 20px);
      height:31vw;
      

    `}
    ${media.tabPort`
      width:calc(50% - 20px);
      height:50vw;
    `}
    ${media.phone`
      width:100%;
      height:80vw;
    `}

 `,
};

export default HomePostsStyled;
