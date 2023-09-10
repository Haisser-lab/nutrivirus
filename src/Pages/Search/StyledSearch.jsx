import { styled } from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    gap: 2vh;
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    margin-left: 3vh;
    gap: 1vh;
`

export const Tag = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content;
    height: 4vh;
    padding: 0vh 2vh 0vh 2vh;
    border: 1px solid black;
    border-radius: 20px;
`

export const PageTitle = styled.p`
    font-size: large;
    font-weight: 600;
    padding: 1vh 3vh 1vh 3vh;
`

export const CardContainer = styled.div`
    height: 140vw;
    margin: 0vh 3vh 3vh 3vh;
    overflow: auto;
`

export const VirusCard = styled.button`
    height: 20vh;
    margin-bottom: 2vh;
    min-width: 87vw;
    border-radius: 15px;
    background-image: url(${props => props.VirusImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 3vh;
    color: white;
    font-weight: 600;
    font-size: large;
    letter-spacing: 0.8px;
`