import { styled } from "styled-components";

export const Footer = styled.div`
    grid-area: footer;
    background-color: white;
    height: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    justify-self: baseline;
    width: 100%;
    padding-bottom: 3vh;
    bottom:0; 
`
export const Title = styled.p`
    margin-bottom: 3vh;
    font-size: large;
    font-weight: 600;
    background-color: white;
`
export const Subtitle = styled.p`
    font-size: medium;
    color: #1129FF;
    font-size: small;
    font-weight: 600;
    background-color: white;
`