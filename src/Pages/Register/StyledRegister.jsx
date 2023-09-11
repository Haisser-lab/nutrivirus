import { styled } from "styled-components";

export const RegisterContainer = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-areas: "header"
                         "input"
                         "footer";
    grid-template-rows: 25vh 55vh 20vh;
`

export const PageTitle = styled.img`
    grid-area: header;
    padding-top: 8vh;
    display: flex;
    justify-self: center;
    height: 35vw;
`

export const InputContainer = styled.form`
    grid-area: input;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const Submit = styled.button`
    padding: 1vh 3vh;
    background-color: black;
    color: white;
    border: 1px solid transparent;
    border-radius: 50px;
    font-size: small;
    font-family: 'Poppins', sans-serif;
    width: fit-content;

    &:hover,
    &:active{
        background-color: #202020;
    }
`