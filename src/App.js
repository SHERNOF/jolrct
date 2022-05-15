// import { ThemeProvider } from "styled-components";
import { blueGrey, grey, indigo } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "./components/about/About";
import Frontpage from "./components/frontpage/Frontpage";
import Header from "./components/header/Header";

const light = createTheme({
  mode: "light",
  palette: {
    primary: {
      main: indigo["100"],
      light: indigo["50"],
      dark: indigo["900"],
    },
    grey: grey["A700"],
  },
  text: {
    primary: indigo["50"],
  },
});
const dark = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: blueGrey["100"],
      light: blueGrey["50"],
      dark: blueGrey["900"],
    },
    grey: grey["A700"],
  },
  text: {
    primary: blueGrey["50"],
  },
});

function App() {
  const now = new Date().getHours();
  return (
    <ThemeProvider theme={now >= 7 && now <= 18 ? dark : light}>
      <Header></Header>
      <div className="App">
        <Frontpage></Frontpage>
        <About></About>
      </div>
    </ThemeProvider>
  );
}

export default App;
