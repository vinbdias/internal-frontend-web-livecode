import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Routes from "./routes";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
