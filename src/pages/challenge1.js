import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Footer from "../components/Footer";

import api from "../services/api";
import MovieCard from "../components/MovieCard";

const Challenge1 = () => {
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  let data = [];

  const fetchPopular = async page => {
    setIsFetching(true);
    const response = await api.get(`/movie/popular?page=${page}`);
    data = response;
    setIsFetching(false);
  };

  useEffect(() => fetchPopular(page), [page]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h4">Popular</Typography>
        </Box>
        {isFetching ? (
          <LinearProgress color="secondary" />
        ) : (
          <Grid container spacing={3}>
            {data?.results?.map(result => (
              <Grid item xs={6} md={3} lg={2} key={result.id}>
                <MovieCard title={result.title} url={result.poster_path} />
              </Grid>
            ))}
          </Grid>
        )}

        <Box my={4} display="flex" justifyContent="center">
          <Pagination
            count={data?.total_pages}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Challenge1;
