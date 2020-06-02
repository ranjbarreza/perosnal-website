import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  z-index: 999;
  background-color: ${({ theme }) => theme.palette.white.color};
  img {
    height: ${({ theme }) => theme.spacing(3)};
    width: ${({ theme }) => theme.spacing(3)};
    z-index: 999;
  }

  :focus {
    outline: 0;
  }

  ${({ theme }) => theme.breakpoint.up.sm} {
    img {
      height: ${({ theme }) => theme.spacing(4)};
      width: ${({ theme }) => theme.spacing(4)};
      transition-property: width, height;
      transition-duration: 0.15s;
      transition-timing-function: ease-in-out;
    }

    .closed-icon {
      height: ${({ theme }) => theme.spacing(2)};
      width: ${({ theme }) => theme.spacing(2)};
      opacity: 0;
    }

    :hover {
      cursor: pointer;

      img {
        opacity: 100%;
        height: ${({ theme }) => theme.spacing(4)};
        width: ${({ theme }) => theme.spacing(4)};
      }
    }
  }
`;

const NavigationList = styled.ul`
  align-items: center;
  list-style: none;
`;

const NavListItem = styled.li``;

const NavItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
`;

const NavigationMenuContainer = styled.div`
  z-index: 998;
  background-color: ${({ theme }) => theme.palette.black.color};
  opacity: 95%;
  color: ${({ theme }) => theme.palette.white.color};
  border-color: ${({ theme }) => theme.palette.white.color};
  border-width: ${({ theme }) => theme.spacing(1.5)};
  border-style: solid solid solid hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;

  animation-name: menu-opening;
  animation-duration: 1s;
  @keyframes menu-opening {
    0% {
      width: 0%;
    }
    100% {
      width: 30%;
    }
  }
`;

export const NavBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((s) => !s);
  return !isOpen ? (
    <NavBurgerMenuButton onClick={toggleOpen}>
      <img src={ClosedBurgerMenu} alt="Navigation Burger Menu Closed" className="closed-icon" />
    </NavBurgerMenuButton>
  ) : (
    <div>
      <NavBurgerMenuButton onClick={toggleOpen}>
        <img src={OpenedBurgerMenu} alt="Navigation Burger Menu Opened" />
      </NavBurgerMenuButton>
      <NavigationMenuContainer>
        <NavigationList>
          <NavListItem>
            <NavItemLink to="/" onClick={toggleOpen} exact>
              Homepage
            </NavItemLink>
          </NavListItem>
          <NavListItem>
            <NavItemLink to="/project" onClick={toggleOpen} exact>
              Project
            </NavItemLink>
          </NavListItem>
          <NavListItem>
            <NavItemLink to="/work" onClick={toggleOpen} exact>
              Work
            </NavItemLink>
          </NavListItem>
          <NavListItem>
            <NavItemLink to="/study" onClick={toggleOpen} exact>
              Study
            </NavItemLink>
          </NavListItem>
          <NavListItem>
            <NavItemLink to="/me" onClick={toggleOpen} exact>
              Me
            </NavItemLink>
          </NavListItem>
        </NavigationList>
      </NavigationMenuContainer>
    </div>
  );
};
