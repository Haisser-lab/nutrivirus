import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: auto;
    margin-top: 1vh;
    gap: 2vh;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const MoreButton = styled.div`
    font-size: small;
    font-weight: 600;
`

export const Texto = styled.p`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`

export const DivCards = styled.div`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    gap: 3vw;
    width: 90vw;
    height: 17vh;
    margin-top: 2vh;
    position: relative;
`