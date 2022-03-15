import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { acordionData } from "../core/data/home";
import Link from "@material-ui/core/Link";

import Button from "../components/Buttons/Button";
import Acordion from "../components/Buttons/Acordion";

const Home = () => {
  return (
    <Container maxWidth="xl" justifyContent="center">
      <Box
        minHeight="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          minWidth="400px"
          width="30%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {acordionData.map((item, index) => (
            <Acordion title={item.title}>
              <Box
                minWidth="400px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography align="justify">
                  {item.description}{" "}
                  <Link target="_blank" href={item.url.link}>
                    <b>{item.url.text}</b>
                  </Link>
                </Typography>

                <Button href={item.route}>Iniciar</Button>
              </Box>
            </Acordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
