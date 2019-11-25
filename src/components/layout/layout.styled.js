import styled from "styled-components";
import { media } from "@styles";

const layoutStyled = {
  Container: styled.div`
    height:${props => (props.scrolled ? "85vh " : "80vh")};
    overflow-y:scroll;
    overflow-x:hidden;
    transition:all .4s;
    margin:${props => (props.scrolled ? "15vh " : "20vh")} 0 0 5.5rem;
    ${media.desk`
      margin:200px 0 0 5.5rem;
    `}
    ${media.tabLand`
      margin:200px 0 0 5.5rem;
    `}
    ${media.tabPort`
      margin:20vh 0;
    `}
  
  `,


};

export default layoutStyled;
