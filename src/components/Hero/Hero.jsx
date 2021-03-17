import React, { useState, useRef, useEffect } from "react";

import { headingVariant, priceVariant } from "./Hero.style";
import { motion } from "framer-motion";

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  PrevArrow,
  NextArrow,
  Arrow,
} from "./Hero.style";

import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";
import ImageThree from "../../assets/img3.jpg";
import ImageFour from "../../assets/img4.jpg";
import { Button } from "../Button";

const data = [
  {
    title: "Luxury Villa in Bali, Indonesia",
    price: "4,280,000",
    path: "/homes",
    label: "View Home",
    image: ImageOne,
    alt: "villa",
  },
  {
    title: "House in San Jose, Costa Rica",
    price: "2,860,000",
    path: "/homes",
    label: "View Home",
    image: ImageTwo,
    alt: "villa",
  },
  {
    title: "House in Calabasas, California",
    price: "8,420,000",
    path: "/homes",
    label: "View Home",
    image: ImageThree,
    alt: "villa",
  },
  {
    title: "House in Houston, Texas",
    price: "6,660,000",
    path: "/homes",
    label: "View Home",
    image: ImageFour,
    alt: "villa",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const timeout = useRef(null);

  //   useEffect(() => {
  //     const nextSlide = () => {
  //       if (timeout.current) {
  //         clearTimeout(timeout.current);
  //       }
  //       setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //     };
  //     timeout.current = setTimeout(() => {
  //       nextSlide();
  //     }, 5000);
  //     return () => {
  //       if (timeout.current) {
  //         clearTimeout(timeout.current);
  //       }
  //     };
  //   }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) return null;

  return (
    <HeroSection>
      <HeroWrapper>
        {data.map((house, index) => (
          <HeroSlide key={house.title}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={house.image} alt={house.alt} />
                <HeroContent>
                  <motion.h1
                    variants={headingVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    {house.title}
                  </motion.h1>
                  <motion.p
                    variants={priceVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    {house.price}
                  </motion.p>
                  <Button
                    as={motion.button}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, type: "tween", delay: 0.5 }}
                    to={house.path}
                    primary="true"
                    css={`
                      max-width: 160px;
                    `}
                  >
                    {house.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={previousSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
