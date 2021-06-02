import { ReactComponent as FacebookIcon } from "./icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "./icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "./icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "./icon-twitter.svg";

export const links = [
  {
    heading: "Features",
    sublinks: [
      {
        name: "Link shortening",
        link: "/",
      },

      {
        name: "Branded Links",
        link: "/",
      },

      {
        name: "Analytics",
        link: "/",
      },
    ],
  },

  {
    heading: "Resources",
    sublinks: [
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Developers",
        link: "/",
      },

      {
        name: "Support",
        link: "/",
      },
    ],
  },
  {
    heading: "Company",
    sublinks: [
      {
        name: "About",
        link: "/",
      },

      {
        name: "Our Team",
        link: "/",
      },

      {
        name: "Careers",
        link: "/",
      },

      {
        name: "Contact",
        link: "/",
      },
    ],
  },
];

export const socialicons = [
  {
    icon: FacebookIcon,
    to: "/",
  },
  {
    icon: TwitterIcon,
    to: "/",
  },
  {
    icon: PinterestIcon,
    to: "/",
  },

  {
    icon: InstagramIcon,
    to: "/",
  },
];
