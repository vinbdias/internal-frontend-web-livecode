import React from "react";
import { withRouter } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import { CardStyled, CardMediaStyled, CardContentStyled } from "./styles";
import Rating from "../Rating";

const MovieCard = ({
  movie: { id, title, poster_path, vote_average },
  history,
}) => {
  return (
    //TODO: Cards do mesmo tamanho
    <CardStyled>
      <CardActionArea onClick={() => history.push(`/movie/${id}`)}>
        <CardMediaStyled
          // component="img"
          //TODO: URL dinâmica
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          title={title}
        />
        <CardContentStyled>
          <Typography>{title}</Typography>
          <Rating>{vote_average}</Rating>
        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  );
};

export default withRouter(MovieCard);
