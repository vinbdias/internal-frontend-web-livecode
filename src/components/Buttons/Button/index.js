import { ButtonStyled } from "./styles";
import Button2 from "@material-ui/core/Button";

const Button = ({ children, onClick, href }) => (
  <ButtonStyled onClick={onClick} href={href} variant="contained" color="white">
    {children}
  </ButtonStyled>
);

export default Button;
