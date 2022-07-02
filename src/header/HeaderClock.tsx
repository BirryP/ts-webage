import React, { useEffect, useContext } from "react";
import HeaderTextBox from "./HeaderTextBox";
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
    <HeaderTextBox left="65%">
      <span>
        {currentDate.getHours().toString().padStart(2, "0") +
          ":" +
          currentDate.getMinutes().toString().padStart(2, "0") +
          ":" +
          currentDate.getSeconds().toString().padStart(2, "0")}
      </span>
    </HeaderTextBox>
  );
};

export default HeaderClock;
