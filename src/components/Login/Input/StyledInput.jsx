import styled from 'styled-components'

export const InputTitle = styled.p`
    font-size: small;
    font-weight: 600;
    margin-bottom: 2vh;
`

export const LoginInputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #EDEDED;
    height: fit-content;
    width: 80vw;
    padding: 1.5vh 2vh 1.5vh 4vh;
    border-radius: 20px;
    gap: 2vh;
    margin-bottom: 5vh;
`

export const LoginInputElement = styled.input`
    background-color: #EDEDED;
    font-size: small;
    width: 80%;

    &:focus {
        outline: none;
    }

`