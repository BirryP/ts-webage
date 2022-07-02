export interface SocialsDetails {
  display: string;
  url: string;
  logo: string;
}

export const socials: SocialsDetails[] = [
  {
    display: "twitter",
    url: "https://twitter.com/BirryP",
    logo: require("../resources/logos/twitter.png"),
  },
  {
    display: "twitch",
    url: "https://www.twitch.tv/birryp",
    logo: require("../resources/logos/twitch.png"),
  },
  {
    display: "instagram",
    url: "https://www.instagram.com/billmpower/?hl=en",
    logo: require("../resources/logos/instagram.png"),
  },
  {
    display: "github",
    url: "https://github.com/BirryP",
    logo: require("../resources/logos/github.png"),
  },
];
