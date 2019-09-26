import React from "react";
import styled from "styled-components";
import { color } from "@styles";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${color.greyOne};
  color: ${color.creamOne};
  padding: 2rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()}, Made with a lot of inspiration by
      {` `}
      <a href="https://italofontes.com">Tim Fontes</a>
    </FooterContainer>
  );
};

export default Footer;
