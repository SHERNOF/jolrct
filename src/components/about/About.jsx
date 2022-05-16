import { Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { Box } from "@mui/system";
import { alpha } from "@mui/material";
import { StyledH2, StyledH3, StyledH4 } from "../styled/StyledH1";

export default function About() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "80vh",
        // paddig: "1rem",
        color: theme.text.primary,
        background: theme.palette.primary.dark,
        position: "relative",
      }}
    >
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "10",
        }}
      >
        <Paper
          sx={{
            height: "80%",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <StyledH4
                style={{
                  paddingLeft: "5rem",
                }}
              >
                WHO WE ARE
              </StyledH4>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "justify",
                padding: "0 5rem",
                color: theme.palette.primary.main,
                fontSize: "1.25rem",
              }}
            >
              Joy Of Life Christian Ministries is a community church of
              imperfect people seeking to know and love Jesus more. We gather
              and serve in Craigieburn, Victoria, Australia. We meet each
              Sunday, connect during the week in Care Groups/Prayer Meetings and
              serve in the community and surrounding areas.
            </Typography>
            <br></br>
            <Typography
              variant="p"
              sx={{
                textAlign: "justify",
                padding: "0 5rem",
                color: theme.palette.primary.main,
                fontSize: "1.25rem",
              }}
            >
              A church is a group of people who are, joyfully together. We’re
              together with God because of His kindness and commitment to
              humanity; together as a family learning to embody this kindness
              and commitment one to another and beyond into the wider world. All
              this is only possible because of Jesus, the One who brings us
              together in life and keeps us together joyfully.
            </Typography>
            <br></br>

            <Typography
              variant="p"
              sx={{
                textAlign: "justify",
                padding: "0 5rem",
                color: theme.palette.primary.main,
                fontSize: "1.25rem",
              }}
            >
              We are guided by seven central values. They reflect both who we
              are and who we hope to be.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            height: "80%",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box
            sx={{
              height: "45%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              color: theme.palette.primary.main,
              fontSize: "2rem",
            }}
          >
            MISSION : To share life in Christ Jesus with great joy to all.
          </Box>
          <Box
            sx={{
              height: "45%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // border: "1px solid red",
              flexDirection: "row",
              color: theme.palette.primary.main,
              fontSize: "2rem",
            }}
          >
            VISION : To see Christ-like people living in fullness of joy.
          </Box>
        </Paper>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          top: "21rem",
          left: "-5rem",
          borderRadius: "50%",
          width: "25rem",
          height: "25rem",
          zIndex: "1",
          background:
            "linear-gradient(to right bottom, rgba(49, 27, 146, .9),rgba(38, 50, 56,.9))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        TEST
      </Box>
    </Grid>
  );
}
