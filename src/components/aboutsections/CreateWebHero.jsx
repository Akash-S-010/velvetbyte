import React from 'react';
import styled, { keyframes } from 'styled-components';

// --- STYLED COMPONENTS ---

// Define the global colors and fonts based on the image
const COLORS = {
  primaryRed: '#FACC15',
  textDark: '#333333',
  textLight: '#555555',
  backgroundLight: '#FBFBFB',
};

// Keyframes for the pulsing animation on the scroll indicator
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 65, 84, 0.4);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 65, 84, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 65, 84, 0);
    transform: scale(1);
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensures it takes up the viewport height */
  background-color: ${COLORS.backgroundLight};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  padding: 80px 20px;
  position: relative; /* For positioning the fixed button */
`;

const HeaderTag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RedDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${COLORS.primaryRed};
  border-radius: 50%;
  margin-right: 8px;
`;

const HeaderText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.textLight};
`;

const Headline = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${COLORS.textDark};
  max-width: 800px;
  line-height: 1.2;
  margin: 0 0 30px 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${COLORS.textLight};
  max-width: 750px;
  margin: 0 auto 50px auto;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

const ScrollIndicator = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid ${COLORS.textLight};
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const SpeakToUsButton = styled.a`
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: ${COLORS.primaryRed};
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(255, 65, 84, 0.3);
  text-decoration: none;
  text-align: center;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 2s infinite; /* Apply the pulsing animation */
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 65, 84, 0.5);
    animation: none; /* Stop pulsing on hover */
  }

  @media (max-width: 600px) {
    right: 20px;
    bottom: 20px;
    width: 100px;
    height: 100px;
    font-size: 12px;
    padding: 10px;
  }
`;

// --- REACT COMPONENT ---

const CreativeWebHero = () => {
  return (
    <HeroContainer>
      <HeaderTag>
        <RedDot />
        <HeaderText>CreativeWeb</HeaderText>
      </HeaderTag>

      <Headline>
        We design bespoke & engaging websites for businesses and enterprises worldwide
      </Headline>

      <SubText>
        Founded in 2013, the company has evolved from a small boutique web design studio into a thriving web design agency, designing & developing over 500 bespoke websites to date. We are an established, experienced, and trusted team with over a decade of experience in providing bespoke web solutions.
      </SubText>

      <ScrollIndicator />
      
      {/* The 'Speak To Us' button is fixed to the viewport, which is why its container is the main HeroContainer */}
      <SpeakToUsButton href="#contact">
        SPEAK TO US
      </SpeakToUsButton>
    </HeroContainer>
  );
};

export default CreativeWebHero;