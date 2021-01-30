import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div `
    display: grid;
    width: 400px;
    position: relative;
    margin: 50px auto;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

export const Input = styled.input `
    margin: 0.8rem;
    padding: 10px;
`;

export const Button = styled.button `
    padding: 10px;
    margin: 0.7rem;
    width: 100px;
    background-color: #e17366;
    border: none;
    font-weight: bold;
    &:hover, &:focus {
        background-color: #1b5ff9;
        color: white;
        box-shadow: 0 0 5px 2px #ccc;
        transition: 400ms;
        cursor: pointer;
    }
`;

export const Title = styled.h1 `
    text-align: center;
`;

export const Text = styled.p ``;

export const StyledLink = styled(Link) `
    text-decoration: none;
`;