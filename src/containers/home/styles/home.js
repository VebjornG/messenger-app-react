import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    margin: 50px auto;
`;

export const Section = styled.section `
    display: flex;
    position: absolute;
    width: 100%;
    height: calc(100% - 100px);
    overflow: hidden; /* prevents scrollbars from showing up, even when they're necessary. */
`;

export const DivUsers = styled.div `
    width: 30%;
    height: 100%;
    overflow-x: hidden;
    border-right: 1px solid #ccc;
`;

export const DivName = styled.div `
    display: flex;
    align-items: center;
    padding: 5px 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:active {
        background: #ccc;
    }
`;

export const DivPic = styled.div `
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 25px;
`;

export const DivChatArea = styled.div `
    width: 70%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
`;

export const DivChatHeader = styled.div `
    position: fixed;
    width: 70%;
    height: 40px;
    background: #e2e0e0;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    color: #000;
    font-family: sans-serif;
`;

export const DivMessageSections = styled.div `
    height: calc(100% - 90px);
    width: 100%;
    overflow-x: hidden;
    position: relative;
    top: 40px;
`;

export const DivChatControls = styled.div `
    display: flex;
    position: fixed;
    width: 70%;
    height: 100px;
    bottom: 0;
`;

export const TextMessage = styled.p `
    background: skyblue;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 10px;
    margin: 5px;
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Text = styled.h3 `
    /*display: grid;
    place-items: center;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    font-weight: bold;
`;


export const StyledLink = styled(Link) `
    text-decoration: none;
    color: black;
    /*&:hover, &:focus {
        color: white;
        transition: 400ms;
    }*/
    
`;

export const Button = styled.button `
    
    margin: 0.7rem;
    width: 10%;
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