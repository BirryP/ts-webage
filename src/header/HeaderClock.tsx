import React, { useEffect, useContext } from "react";
import TextBox from "./TextBox";
import { HeaderContext, HeaderContextType } from "./context/HeaderContext";

const HeaderClock = () => {
  const { currentDate, setCurrentDate } = useContext(
    HeaderContext
  ) as HeaderContextType;

  useEffect(() => {
    const setDateInterval = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(setDateInterval);
    };
  });

  return (
    <TextBox
      text={
        currentDate.getHours().toString().padStart(2, "0") +
        ":" +
        currentDate.getMinutes().toString().padStart(2, "0") +
        ":" +
        currentDate.getSeconds().toString().padStart(2, "0")
      }
      left="65%"
    />
  );
};

export default HeaderClock;
