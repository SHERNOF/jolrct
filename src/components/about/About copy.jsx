import { Grid, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { Box } from "@mui/system";

export default function About() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        spacing={3}
        container
        sx={{
          height: "100vh",
          width: "100vw",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          color: theme.text.primary,
          background: theme.palette.primary.dark,
          // overflow: "hidden",
        }}
      >
        <Grid
          item
          lg={6}
          style={{
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 2rem",

            /* From https://css.glass */
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2rem",
              }}
            >
              A church is a group of people who are, joyfully together. We’re
              together with God because of His kindness and commitment to
              humanity; together as a family learning to embody this kindness
              and commitment one to another and beyond into the wider world. All
              this is only possible because of Jesus, the One who brings us
              together in life and keeps us together joyfully.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2rem",
              }}
            >
              Joy Of Life Christian Ministries is a community church of
              imperfect people seeking to know and love Jesus more. We gather
              and serve in Craigieburn, Victoria, Australia. We meet each
              Sunday, connect during the week in Care Groups/Prayer Meetings and
              serve in the community and surrounding areas.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2rem",
              }}
            >
              We are guided by seven central values. They reflect both who we
              are and who we hope to be.
            </p>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",

            /* From https://css.glass */
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",

            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box>VISION</Box>
          <Box>MISSSION</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
