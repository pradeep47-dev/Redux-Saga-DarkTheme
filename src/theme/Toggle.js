import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import MoonIcon from '../icons/moon.svg';
import SunIcon from '../icons/sun.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;  
  align-items: center;  
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  outline: none;
  width: 4rem;
  top: 32px;
  right: 100px;
  height: 2rem;

  svg {
    height: 2em;
    width: 2rem;
    transition: all 0.3s linear;
    
   // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-5px)' : 'translateX(-50px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(50px)' : 'translateX(5px)'};
    }
  }`

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;