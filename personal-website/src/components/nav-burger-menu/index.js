import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpenedBurgerMenu from './opened.svg';
import ClosedBurgerMenu from './closed.svg';
import LinkedInIcon from './white-linkedin.svg';

const NavBurgerMenuButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(1.1)};
  right: ${({ theme }) => theme.spacing(1.1)};
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
    transition: transform 0.15s ease-in;
    transform-origin: top right;
    transform: scale(0.75);

    .closed-icon {
      opacity: 0;
    }

    :hover {
      cursor: pointer;
      transform: scale(1.3);

      img {
        opacity: 100%;
      }
    }
  }
`;

const NavigationList = styled.ul`
  align-items: center;
  list-style: none;
`;

const NavListItem = styled.li`
  padding-top: ${({ theme }) => theme.spacing(2)};

  :last-child {
    padding-top: ${({ theme }) => theme.spacing(15)};
  }
`;

const NavItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
`;

const NavigationMenuContainer = styled.div`
  z-index: 998;
  background-color: ${({ theme }) => theme.palette.black.color};
  opacity: 95%;
  color: ${({ theme }) => theme.palette.white.color};
  border-color: ${({ theme }) => theme.palette.white.color};
  border-width: ${({ theme }) => theme.spacing(1.5)};
  border-style: solid;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;

  animation-name: menu-opening;
  animation-duration: 1s;
  @keyframes menu-opening {
    0% {
      width: 0%;
    }
    100% {
      ${({ theme }) => theme.breakpoint.up.sm} {
        border-style: solid solid solid hidden;
        width: 30%;
      }
    }
  }
  ${({ theme }) => theme.breakpoint.up.sm} {
    border-style: solid solid solid hidden;
    width: 30%;
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
              This Project
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
          <NavListItem>
            <a
              href="https://www.linkedin.com/in/rezaranjbaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn Icon" />
            </a>
          </NavListItem>
        </NavigationList>
      </NavigationMenuContainer>
    </div>
  );
};
