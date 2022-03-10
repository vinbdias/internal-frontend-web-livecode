import React from "react";
import Typography from "@material-ui/core/Typography";

import { CardStyled, CardMediaStyled, CardContentStyled } from "./styles";
import Rating from "../Rating";

const MovieCard = ({ title, url, vote_average }) => {
  return (
    <CardStyled>
      <CardMediaStyled
        image={`https://image.tmdb.org/t/p/w500/${url}`}
        title={title}
      />
      <CardContentStyled>
        <Typography>{title}</Typography>
        {vote_average && <Rating>{vote_average}</Rating>}
      </CardContentStyled>
    </CardStyled>
  );
};

export default MovieCard;
