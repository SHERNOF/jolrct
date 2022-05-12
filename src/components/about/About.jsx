import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.text.primary,
        fontSize: "5rem",
        background: theme.palette.primary.dark,
      }}
    >
      About
    </Box>
  );
}
