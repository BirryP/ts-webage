import React, { useState } from "react";
import { HeaderContext } from "./context/HeaderContext";
import HeaderContainer from "./HeaderContainer";

const HeaderManager = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <HeaderContext.Provider value={{ currentDate, setCurrentDate }}>
      <HeaderContainer />
    </HeaderContext.Provider>
  );
};

export default HeaderManager;
