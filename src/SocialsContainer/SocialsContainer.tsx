import React, { useEffect, useContext, useState } from "react";
import TextBox from "../header/TextBox";
import {
  HeaderContext,
  HeaderContextType,
} from "../header/context/HeaderContext";
import { socials } from "../constants/socials";

interface SocialsContainerProps {
  secondsInterval: number;
}

const SocialsContainer = (props: SocialsContainerProps) => {
  const [lastChangeTime, setLastChangeTime] = useState(new Date());
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const { currentDate } = useContext(HeaderContext) as HeaderContextType;

  const { secondsInterval } = props;

  useEffect(() => {
    if (
      currentDate.getSeconds() - lastChangeTime.getSeconds() >=
      secondsInterval
    ) {
      setLastChangeTime(new Date());
      if (activeSocialIndex < socials.length - 1) {
        setActiveSocialIndex(activeSocialIndex + 1);
      } else {
        setActiveSocialIndex(0);
      }
    }
  }, [activeSocialIndex, currentDate, lastChangeTime, secondsInterval]);

  return (
    <>
      <TextBox text={socials[activeSocialIndex].url} left="15%" />
    </>
  );
};

export default SocialsContainer;
