import { styled } from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 8vh;
    position: fixed;
    bottom: 0;
    border: 1px solid var(--theme-white-theme-core-tokens-button-separator, #E0E0E0);
    padding: 0 3vw;
`

export const Botao = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: auto;
`

export const ImgBotao = styled.img`
    width: 8vw;
    height: 8vw;
`