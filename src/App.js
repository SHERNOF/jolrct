// import { ThemeProvider } from "styled-components";
import { blue, grey, indigo, lightBlue, red } from "@mui/material/colors";
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
      main: indigo["500"],
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
      main: red["100"],
      light: red["50"],
      dark: red["900"],
    },
    grey: grey["A700"],
  },
  text: {
    primary: red["50"],
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
