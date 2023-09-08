import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
    justify-content: space-between;
    padding: 3vh 4vw;
    align-items: center;
`

export const Login = styled.div`
    width: 50vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const FotoLogin = styled.div`
    width: 15vw;
    height: 15vw;
    background: blue;
    border-radius: 50%;
`

export const Nome = styled.p`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
`

export const ImgFilter = styled.img`
    width: 9vw;
    height: 9vw;
`