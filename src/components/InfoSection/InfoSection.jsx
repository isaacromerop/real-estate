import React, { useEffect } from "react";

import { Button } from "../Button";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { left, right } from "./InfoSection.style";

import {
  Container,
  Section,
  ColumnLeft,
  ColumnRight,
} from "./InfoSection.style";

const InfoSection = ({
  heading,
  textOne,
  textTwo,
  buttonLabel,
  image,
  reverse,
  delay,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section>
      <Container>
        <ColumnLeft
          ref={ref}
          variants={left}
          initial="hidden"
          animate={controls}
          reverse={reverse}
        >
          <h1>{heading}</h1>
          <p>{textOne}</p>
          <p>{textTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight
          ref={ref}
          variants={right}
          initial="hidden"
          animate={controls}
          reverse={reverse}
        >
          <img src={image} alt={buttonLabel} />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
