import styled from "styled-components";
import { media } from "@styles";

export const GeneralContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 115rem;

  ${media.desk`
    padding:0 2rem;
  `}
`;
