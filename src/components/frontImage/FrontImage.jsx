import React from "react";
import classes from "./frontImage.module.css";
import { motion } from "framer-motion";
import { StyledH1, StyledH2 } from "../styled/StyledH1";
import JolVideo from "../jolVideo/JolVideo";
import ReactPlayer from "react-player";

const entrance = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
      delay: 2.5,
    },
  },
};

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 3.2,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

export default function FrontImage() {
  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className={classes.overlay}></div>
      <div className={classes.imageContainer}>
        {/* <img
          className={classes.frontpageImage}
          src="../images/worship.jpg"
          alt="frontpage"
        ></img> */}
        {/* <iframe
          className={classes.frontpageImage}
          src="../video/JOL.mp4"
          allow="autoplay; fullscreen; muted"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="100%"
          scrolling="auto"
        ></iframe> */}
        <ReactPlayer
          // url="../video/JOL.mp4"
          url="https://www.youtube.com/watch?v=wwNlwamgbl0"
          autoplay={true}
          muted={true}
          width="100%"
          height="100%"
          volume="0"
          loop="true"
        />
      </div>
      <motion.div
        variants={container}
        initial="initial"
        animate="show"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          bottom: "50%",
          transform: "translate(50% 50%)",
          zIndex: 3,
        }}
      >
        <motion.div variants={item}>
          <StyledH1>JOY OF LIFE CHRISTIAN MINISTRY</StyledH1>
        </motion.div>
        <motion.div variants={item}>
          <StyledH2>WELCOME HOME</StyledH2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
