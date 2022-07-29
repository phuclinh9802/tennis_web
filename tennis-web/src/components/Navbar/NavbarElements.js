import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 600px;
  display: flex;
  justify-content: space-between;
  padding-left: 80%;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
  height: 10px;
  cursor: pointer;

  &:hover {
    color: #6f6f6f;
    transform: scale(1.2);
    transition: transform .5s ease;
  }
  &.active {
    color: #6f6f6f;
  }

  font-family: futura-pt;
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1em;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 5%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;