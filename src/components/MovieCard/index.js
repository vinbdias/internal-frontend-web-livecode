import React from "react";
import Typography from "@material-ui/core/Typography";

import { CardStyled, CardMediaStyled, CardContentStyled } from "./styles";
import Rating from "../Rating";

const MovieCard = ({ movie: { title, poster_path, vote_average } }) => {
  return (
    <CardStyled data-testid="movie">
      <CardMediaStyled
        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        title={title}
      />
      <CardContentStyled>
        <Typography>{title}</Typography>
        <Rating>{vote_average}</Rating>
      </CardContentStyled>
    </CardStyled>
  );
};

export default MovieCard;
