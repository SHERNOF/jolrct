// import { ThemeProvider } from "styled-components";
import { blue, grey, lightBlue, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import About from "./components/about/About";
import Frontpage from "./components/frontpage/Frontpage";
import Header from "./components/header/Header";

// const theme = createTheme({
//   primary: "#03a9f4",
//   primaryLight: "#b3e5fc",
//   primaryDark: "#01579b",
//   text: "#03a9f4",
// });

const light = createTheme({
  mode: "light",
  palette: {
    primary: {
      main: lightBlue["500"],
      text: red["500"],
    },
    grey: grey["A700"],
  },
});
const dark = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: red["500"],
      text: red["500"],
    },
    grey: grey["A700"],
  },
});

function App() {
  const [currentTheme, setCurrentTheme] = useState(light);
  const now = new Date().getHours();
  if (now >= 18 && now <= 19) {
    setCurrentTheme(dark);
  }
  console.log(now);
  return (
    <ThemeProvider theme={currentTheme}>
      <Header></Header>
      <div className="App">
        <Frontpage></Frontpage>
        <About></About>
      </div>
    </ThemeProvider>
  );
}

export default App;
