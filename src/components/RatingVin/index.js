import { Container, RatingStar, EmptyRatingStar, RatingStarsContainer, RatingStarContainer } from './styles';

export const RatingVin = ({ rating }) => {

  const maxRating = 5;
  const nonFilledStars = maxRating - rating;

  return <Container>
    <RatingStarsContainer>
      {[...Array(rating)].map((_, index) => (
        <RatingStarContainer>
          <RatingStar key={index} />
        </RatingStarContainer>
      ))}
      {[...Array(nonFilledStars)].map((_, index) => (
        <RatingStarContainer>
          <EmptyRatingStar key={index} />
        </RatingStarContainer>
      ))}
    </RatingStarsContainer>
  </Container>;
}

export default RatingVin;