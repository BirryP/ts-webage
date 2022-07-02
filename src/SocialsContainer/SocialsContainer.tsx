import React, { useEffect, useContext, useState, useRef } from "react";
import HeaderTextBox from "../header/HeaderTextBox";
import {
  HeaderContext,
  HeaderContextType,
} from "../header/context/HeaderContext";
import { socials } from "../constants/socials";
import SocialsCard from "./SocialsCard";

interface SocialsContainerProps {
  secondsInterval: number;
}

const SocialsContainer = (props: SocialsContainerProps) => {
  const socialsCardRef = useRef<HTMLAnchorElement>(null);
  const [lastChangeTime, setLastChangeTime] = useState(new Date());
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const { currentDate } = useContext(HeaderContext) as HeaderContextType;

  const { secondsInterval } = props;

  useEffect(() => {
    if (socialsCardRef.current) {
      socialsCardRef.current.style.opacity = "1";
    }
  });

  useEffect(() => {
    if (
      currentDate.getTime() - lastChangeTime.getTime() >=
      secondsInterval * 1000
    ) {
      setLastChangeTime(new Date());
      if (activeSocialIndex < socials.length - 1) {
        setActiveSocialIndex(activeSocialIndex + 1);
      } else {
        setActiveSocialIndex(0);
      }
    } else if (
      currentDate.getTime() - lastChangeTime.getTime() >=
      (secondsInterval - 1) * 1000
    ) {
      if (socialsCardRef.current) {
        socialsCardRef.current.style.opacity = "0";
      }
    }
  }, [activeSocialIndex, currentDate, lastChangeTime, secondsInterval]);

  return (
    <HeaderTextBox left="15%">
      <SocialsCard ref={socialsCardRef} activeSocialIndex={activeSocialIndex} />
    </HeaderTextBox>
  );
};

export default SocialsContainer;
