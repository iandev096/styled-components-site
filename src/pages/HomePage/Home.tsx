import React from "react";
import { InfoSection, Pricing } from "../../components";
import {
  homeInfo1Config,
  homeInfo2Config,
  homeInfo3Config,
  homeInfo4Config,
} from "./Data";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <InfoSection {...homeInfo1Config} />
      <InfoSection {...homeInfo2Config} />
      <InfoSection {...homeInfo3Config} />
      <Pricing />
      <InfoSection {...homeInfo4Config} />
    </>
  );
};

export default Home;
