import React from 'react';
import styled from 'styled-components';
import logo192 from './../logo192.png';

const Mascot = styled.img`
  width: max-content;
  margin: 0.4rem auto;
`;
const SpeechBubble = styled.span`
  position: relative;
  margin: auto;
  width: fit-content;
  background: ${props => props.theme.primary};
  border-radius: 2rem;
  color: #fff;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 60%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: ${props => props.theme.primary};
    border-top: 0;
    border-left: 0;
    margin-left: -10px;
    margin-top: -20px;
  }
`;

const messages = [
  `What's cookin', good lookin'? Type in an ingredient to get started!`,
  `Tell me what you've got in your pantry and I'll take kale of the rest.`,
  `Throwing away rotten ingredients again? Don't go bacon my heart!`,
  `I fondue the perfect recipe! Cheesy puns cracker me up, they're too gouda.`,
  `Hmmm... Banana bread sounds pretty a-peel-ing, don't you think?`,
  `Feeling hungry? I'm egg-cited to see what you'll whip up!`,
  `You're luck kiwi have the perfect recipe in store for you!`
];

const getRandom = arr => {
  return arr[(arr.length * Math.random()) | 0];
};

const Hero = () => {
  return (
    <React.Fragment>
      <Mascot className="hero-logo" src={logo192} alt="logo" />
      <SpeechBubble className="speech-bubble">
        {getRandom(messages)}
      </SpeechBubble>
    </React.Fragment>
  );
};

export default Hero;
