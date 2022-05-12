import React from "react";
import MainLogo from "../mainLogo/MainLogo";
import { Div } from "../styled/Div";
import FrontImage from "../frontImage/FrontImage";

export default function Frontpage() {
  return (
    <Div>
      <MainLogo></MainLogo>
      <FrontImage></FrontImage>
    </Div>
  );
}
