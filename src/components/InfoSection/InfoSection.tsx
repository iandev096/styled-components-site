import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../global.styles";
import {
  Heading,
  ImgWrapper,
  Img,
  InfoColumn,
  InfoRow,
  InfoSec,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./infoSection.elements";

export interface InfoSectionProps {
  lightBg?: boolean;
  imgStart?: boolean;
  image?: {
    start: boolean;
    uri: string;
    alt: string;
  };
  topLine?: {
    light?: boolean;
    text: string;
  };
  heading?: {
    light?: boolean;
    text?: string;
  };
  description?: {
    light?: boolean;
    text?: string;
  };
  buttonConfig?: { label: string; primary: boolean };
}

const InfoSection = (props: InfoSectionProps) => {
  return (
    <>
      <InfoSec lightBg={props?.lightBg}>
        <Container>
          <InfoRow imgStart={props.imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={props.topLine?.light}>
                  {props?.topLine?.text}
                </TopLine>
                <Heading lightText={props?.heading?.light}>
                  {props?.heading?.text}
                </Heading>
                <SubTitle lightTextDesc={props?.description?.light}>
                  {props?.description?.text}
                </SubTitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={props?.buttonConfig?.primary}>
                    {props?.buttonConfig?.label}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start_={props?.image?.start}>
                <Img src={props?.image?.uri} alt={props?.image?.alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
