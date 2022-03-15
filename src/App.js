import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Routes from "./routes";
import TopBar from "./components/TopBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
