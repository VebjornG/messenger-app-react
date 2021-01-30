import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #e17366;
`;

export const Container = styled.div `
    display: flex;
`;

export const Logo = styled.div `
    font-size: 35px;
    color: #fff;
    font-weight: bold;
    margin: 25px;
`;

export const Ul = styled.ul `
    display: flex;
    font-weight: bold;
    margin: 35px;
`;

export const Li = styled.li `
    display: flex;
    color: white;
    font-size: 25px;
    text-decoration: none;
    margin: 0 15px; 
    text-decoration: none;
`;

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
    color: white;
    &:hover, &:focus {
        color: #1b5ff9;
        transition: 400ms;
    }
`;

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;
    &:hover, &:focus {
        color: #1b5ff9;
        transition: 400ms;
    }
`;

export const Div = styled.div `
    margin: 35px 0;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    fontWeight: 'bold';
`;

