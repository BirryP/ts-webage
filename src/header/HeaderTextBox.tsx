import React from "react";
import type CSS from "csstype";

const TitleStyle: CSS.Properties = {
  position: "absolute",
  width: "20%",
  height: "50%",
  top: "25%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Lucida Console",
  borderRadius: "25px",
  backgroundColor: "cornsilk",
  color: "lightcoral",
};

type HeaderTextBoxProps = {
  left: string;
  children: React.ReactNode;
};

const HeaderTextBox = ({ left, children }: HeaderTextBoxProps) => {
  return (
    <div
      style={{
        ...TitleStyle,
        left,
      }}
    >
      {children}
    </div>
  );
};

export default HeaderTextBox;
