import React, { useState } from 'react';
import styled from 'styled-components';
import OpenedBurgerMenu from './opened.svg';
import ClosedBurgerMenu from './closed.svg';

const NavBurgerMenuButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(1.5)};
  right: ${({ theme }) => theme.spacing(1.5)};
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;

  .closed-icon {
    height: 15px;
    width: 15px;
    opacity: 20%;
  }

  :hover {
    cursor: pointer;

    img {
      height: 35px;
      width: 35px;
      opacity: 100%;
    }
  }

  :focus {
    outline: 0;
  }
`;

export const NavBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((s) => !s);
  return (
    <div className="App">
      <NavBurgerMenuButton onClick={toggleOpen}>
        {isOpen ? (
          <img src={OpenedBurgerMenu} alt="Navigation Burger Menu Opened" />
        ) : (
          <img src={ClosedBurgerMenu} alt="Navigation Burger Menu Closed" className="closed-icon" />
        )}
      </NavBurgerMenuButton>
    </div>
  );
};
