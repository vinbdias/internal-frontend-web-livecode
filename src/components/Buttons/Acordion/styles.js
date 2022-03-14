import React from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

export const AcordionStyled = styled(
  ({ children, title, description, color, ...otherProps }) => (
    <Accordion>
      <AccordionSummary
        style={{ backgroundColor: "#0e263f", color: "white" }}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
)``;
