import { styled } from "styled-components";

export const Container = styled.button`
    width: 25vw;
    height: 15vh;
    display: flex;
    flex-direction: column-reverse;
    background: #C4C4C4;
    border-radius: 8px;
`

export const FooterCard = styled.div`
    border-radius: 0px 0px 8px 8px;
    background: var(--theme-white-theme-core-tokens-grey-01, #525252);
    display: flex;
    width: 25vw;
    height: 4vh;
    align-items: center;
    justify-content: center;
    color: white;
`