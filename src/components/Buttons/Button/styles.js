import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ButtonStyled = styled(({ color, ...otherProps }) => (
  <Button {...otherProps} variant="contained" />
))`
  color: ${(props) => props.color};
  width: 120px;
  height: 50px;
  background-color: #001e70;
  border-radius: 10px;
  margin-top: 10px;
`;
