import styled from "styled-components";

export const Container = styled.div`
  background-color: black;  
  width: 609px;
  height: 960px;
  color: white;
  border-radius: 10px;
  padding: 20px 0px;
`;

export const ImageContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg");
  background-repeat: no-repeat;
`;

export const MovieTitle = styled.h1`  
  padding-left: 20px;
`;

export const MovieInfo = styled.div`

  padding-left: 20px;
  font-size: 14px;
`;

export const MovieSynopsis = styled.div`
  padding: 24px 0 0 20px;
  font-size: 12px;
`;

export const MovieRatingContainer = styled.div`
  padding-left: 20px;
`;