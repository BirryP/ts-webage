import React from "react";
import type CSS from "csstype";
import HeaderClock from "./HeaderClock";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

const HeaderContainerStyle: CSS.Properties = {
  position: "absolute",
  height: "100px",
  width: "100%",
  left: "0",
  top: "0",
  backgroundColor: "lightcoral",
};

const HeaderContainer = () => {
  return (
    <div style={HeaderContainerStyle}>
      <HeaderClock />
      <SocialsContainer secondsInterval={5} />
    </div>
  );
};

export default HeaderContainer;
