import { InfoSectionProps } from "../../components/InfoSection/InfoSection";
import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";
import profile from "../../images/profile.jpg";

export const homeInfo1Config: InfoSectionProps = {
  lightBg: false,
  imgStart: false,
  buttonConfig: {
    label: "Get Started",
    primary: true,
  },
  description: {
    light: true,
    text:
      "We help business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
  },
  heading: {
    light: true,
    text: "Lead Generation specialist for Online businesses",
  },
  topLine: {
    text: "Marketing Agency",
    light: true,
  },
  image: {
    start: false,
    alt: "Image",
    uri: svg1,
  },
};

export const homeInfo2Config: InfoSectionProps = {
  lightBg: true,
  imgStart: true,
  buttonConfig: {
    label: "Get Started",
    primary: false,
  },
  description: {
    light: false,
    text:
      "We help business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
  },
  heading: {
    light: false,
    text: "Lead Generation specialist for Online businesses",
  },
  topLine: {
    text: "Marketing Agency",
    light: false,
  },
  image: {
    start: true,
    alt: "Profile image",
    uri: profile,
  },
};

export const homeInfo3Config: InfoSectionProps = {
  lightBg: false,
  imgStart: false,
  buttonConfig: {
    label: "Get Started",
    primary: true,
  },
  description: {
    light: true,
    text:
      "We help business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
  },
  heading: {
    light: true,
    text: "Lead Generation specialist for Online businesses",
  },
  topLine: {
    text: "Marketing Agency",
    light: true,
  },
  image: {
    start: false,
    alt: "Profile image",
    uri: svg2,
  },
};

export const homeInfo4Config: InfoSectionProps = {
  lightBg: true,
  imgStart: true,
  buttonConfig: {
    label: "Get Started",
    primary: false,
  },
  description: {
    light: false,
    text:
      "We help business owners increase their revenue. Our team of unique specialist can help you acheive your business goals.",
  },
  heading: {
    light: false,
    text: "Lead Generation specialist for Online businesses",
  },
  topLine: {
    text: "Marketing Agency",
    light: false,
  },
  image: {
    start: true,
    alt: "Image",
    uri: svg3,
  },
};
