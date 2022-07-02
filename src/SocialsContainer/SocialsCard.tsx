import React from "react";
import type CSS from "csstype";
import { socials } from "../constants/socials";

interface SocialsContainerProps {
  activeSocialIndex: number;
}

const socialsCardStyle: CSS.Properties = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease-in-out",
  opacity: "0",
};

const SocialsCard = React.forwardRef<HTMLAnchorElement, SocialsContainerProps>(
  (props, ref) => {
    const { activeSocialIndex } = props;

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "inherit",
          textDecoration: "inherit",
          ...socialsCardStyle,
        }}
        href={socials[activeSocialIndex].url}
      >
        <img
          src={socials[activeSocialIndex].logo}
          alt="social logo"
          style={{
            width: "8%",
            color: "lightcoral",
            display: "inline-table",
            marginRight: "10px",
            filter:
              "invert(83%) sepia(38%) saturate(5713%) hue-rotate(310deg) brightness(104%) contrast(88%)",
          }}
        />
        {socials[activeSocialIndex].display}
      </a>
    );
  }
);

export default SocialsCard;
