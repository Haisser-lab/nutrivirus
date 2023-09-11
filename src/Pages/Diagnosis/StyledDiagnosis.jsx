import styled from "styled-components";

export const DiagnosisContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 160vw;
    padding: 3vh;
    flex: 1; 
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PageTitle = styled.p`
    font-size: large;
    font-weight: 600;
`

export const PageSubtitle = styled.p`
    font-size: medium;
    color: #5F5F5F;
    font-weight: 600;
`

export const SymptomsContainer = styled.div`
    margin-top: 5vh;
`

export const Options = styled.button`
    height: fit-content;
    min-width: 100%;
    padding: 1vh 2vh 1vh 2vh;
    cursor: pointer;
    border: 1px solid ${props => (props.checked ? '#005819' : 'black')};
    color: ${props => (props.checked ? '#005819' : 'black')};
    font-size: medium;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`

export const InputRadio = styled.input`
    width: 5vw;
    height: 5vw;
    background-color: #005819;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    justify-self: end;
    gap: 3vh;
`

export const NextButton = styled.button`
    display: flex;
    padding: 1vh 3vh;
    background-color: #262626;
    color: white;
    border-radius: 50px;

    &:hover,
    &:active{
        background-color: #202020;
    }
`

export const PrevButton = styled.button`
    color: black;
    font-weight: 600;
`