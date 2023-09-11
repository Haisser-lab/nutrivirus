import styled from "styled-components";

export const SickContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3vh;
    height: 100vw;
    min-height: 100vh;
`

export const PageInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageTitle = styled.p`
    font-size: large;
    font-weight: 600;
    padding-bottom: 3vh;
`

export const PageContent = styled.div`
    font-size: small;
    text-align: center;
    width: 70%;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20vh;
    gap: 1vh;
`

export const FindVirusButton = styled.button`
    display: flex;
    padding: 1vh 7vh;
    background-color: #262626;
    color: white;
    border-radius: 50px;

    &:hover,
    &:active{
        background-color: #202020;
    }
`

export const FoodButton = styled.button`
    font-weight: 600;
`