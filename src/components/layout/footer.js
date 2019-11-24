import React from "react";

// Style
import FooterStyled from "./footer.styled";

const Footer = () => {
  return (
    <FooterStyled.root>
      © {new Date().getFullYear()}, Made with a lot of inspiration by
      {` `}
      <a href="https://italofontes.com">Tim Fontes</a>
    </FooterStyled.root>
  );
};

export default Footer;
