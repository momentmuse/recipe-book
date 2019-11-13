import React from 'react';
import styled from 'styled-components';
import logo192 from './../logo192.png';

const Mascot = styled.img`
  width: max-content;
  margin: auto;
`;
const SpeechBubble = styled.span`
  position: relative;
  margin-top: 0.4rem;
  background: #08c781;
  border-radius: 2rem;
  color: #fff;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 65%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: #08c781;
    border-top: 0;
    border-left: 0;
    margin-left: -10px;
    margin-top: -20px;
  }
`;

const Hero = () => {
  const messages = [
    `What's cookin', good lookin'? Type in an ingredient to get started!`,
    `Tell me what you've got in your pantry and I'll take kale of the rest.`,
    `Throwing away rotten ingredients again? Don't go bacon my heart!`,
    `Feeling saucy? Cheesy puns cracker me up, they're just too gouda.`
  ];

  const randomMessage = () => {
    return messages[(messages.length * Math.random()) | 0];
  };

  return (
    <React.Fragment>
      <Mascot src={logo192} alt="logo" />
      <SpeechBubble>{randomMessage()}</SpeechBubble>
    </React.Fragment>
  );
};

export default Hero;
