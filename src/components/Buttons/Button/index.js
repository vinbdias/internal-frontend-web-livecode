import { ButtonStyled } from "./styles";

const Button = ({ children, onClick, href }) => (
  <ButtonStyled onClick={onClick} href={href} variant="contained" color="white">
    {children}
  </ButtonStyled>
);

export default Button;
