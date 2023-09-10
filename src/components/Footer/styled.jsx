import { styled } from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    height: 8vh;
    position: fixed;
    bottom: 0;
    border: 1px solid var(--theme-white-theme-core-tokens-button-separator, #E0E0E0);
    padding: 0 3vh;
`

export const Botao = styled.button`
    background: none;
    border: none;
`