import styled from 'styled-components';
import StarIcon from "@material-ui/icons/Star";
import StarOutlineOutlined from "@material-ui/icons/Star";

export const Container = styled.div``;

export const RatingStarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingStarContainer = styled.div`
  padding: 0px 5px;
`;

export const RatingStar = styled(StarIcon)`
  color: #FFB933;
`;

export const EmptyRatingStar = styled(StarOutlineOutlined)`
  
`;