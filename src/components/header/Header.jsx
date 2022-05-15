import React from "react";
import { motion } from "framer-motion";
import classes from "./header.module.css";
import { Button } from "@mui/material";

import LogoSmall from "../logoSmall/LogoSmall";

export default function Header() {
  const logo = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={classes.header}
      variants={logo}
      initial="hidden"
      animate="visible"
    >
      <div className={classes.logoContainer}>
        {/* <img
          style={{
            width: 140,
            height: 140,
            filter: "drop-shadow(2px 10px 2px rgb(0 0 0 / 0.4))",
          }}
          alt="logo"
          src="/logo/jolSmall.svg"
        /> */}
        <LogoSmall></LogoSmall>
      </div>

      <div className={classes.headerLinks}>
        <ul
          style={{
            display: "flex",
            fontSize: "3.5rem",
            marginRight: "2rem",
          }}
        >
          <li>
            <Button
              className={classes.myBtn}
              variant="text"
              activeclass="active"
              to="home"
            >
              Home
            </Button>
          </li>
          <li>
            <Button className={classes.myBtn} variant="text" to="about">
              About us
            </Button>
          </li>
          <li>
            <Button className={classes.myBtn} variant="text" to="ministries">
              Ministries
            </Button>
          </li>
          <li>
            <Button className={classes.myBtn} variant="text" href="events">
              Contact Us
            </Button>
          </li>
          <li>
            <Button
              className={classes.myBtn}
              variant="text"
              to="events"
              href="events"
            >
              Events
            </Button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
