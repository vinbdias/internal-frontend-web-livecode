import { AcordionStyled } from "./styles";

const AccordionButton = ({ children, title, onClick, href }) => (
  <AcordionStyled title={title}> {children}</AcordionStyled>
);

export default AccordionButton;
