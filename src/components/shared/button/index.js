import React from "react";
import PropTypes from "prop-types";
import ButtonStyled from "./button.styled";

export const PanelBtnWhite = ({ buttonLabel, isActive }) => (
  <ButtonStyled.Root isActive={isActive} href="#">
    {buttonLabel}
  </ButtonStyled.Root>
);

PanelBtnWhite.propTypes = {
  buttonLabel: PropTypes.string,
  isActive: PropTypes.bool,
};

PanelBtnWhite.defaulProps = {
  buttonLabel: "button",
  isActive: false,
};
