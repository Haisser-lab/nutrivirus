import { styled } from "styled-components";

export const Container = styled.button`
    width: 60vw;
    height: 22vh;
    display: flex;
    flex-direction: column-reverse;
    background: #ededed;
    border-radius: 8px;
    padding: 3vw;
    gap: 1vw;
`

export const Titulo = styled.p`
    width: 60vw;
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
`

export const DivMenor = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    gap: 1vw;
    align-items: center;
`

export const Img = styled.img`
    width: 5vw;
    height: 5vw;
`

export const Porcentagem = styled.p`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 120% */
`