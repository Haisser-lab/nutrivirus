import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: auto;
    gap: 2vh;
`

export const Texto = styled.p`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;

    /* productive/heading/05 */
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
`

export const DivCards = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 3vw;
    width: 90vw;
    height: 24vh;
    margin-top: 2vh;
    position: relative;
`