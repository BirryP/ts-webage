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
};

type TextBoxProps = {
  text: string;
  left: string;
};

const TextBox = ({ text, left }: TextBoxProps) => {
  return (
    <div
      style={{
        ...TitleStyle,
        left,
      }}
    >
      <span style={{ color: "lightcoral" }}>{text}</span>
    </div>
  );
};

export default TextBox;
