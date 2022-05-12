import { Container, ImageContainer, MovieTitle, MovieInfo, MovieSynopsis, MovieRatingContainer } from './styles';
import RatingVin from '../RatingVin';

const MovieCardVin = ({ poster, title, censor, gender, year, length, synopsis, rating }) => {


  return <Container>
    <ImageContainer>
      <img src="http://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg" alt="" />
    </ImageContainer>
    <MovieTitle>
      {title}
    </MovieTitle>
    <MovieInfo>
      {censor} | {length} | {gender} | {year}
    </MovieInfo>
    <MovieSynopsis>
      <p>
        {synopsis}
      </p>
    </MovieSynopsis>
    <MovieRatingContainer>
      <RatingVin rating={rating} />
    </MovieRatingContainer>
  </Container>
};

export default MovieCardVin;