import styled from "styled-components";

export const PostImage = styled.div`
    height: 20vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    border-radius: 15px;
    background-image: url(${props => props.PostImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const PostTitle = styled.p`
    font-size: large;
    font-weight: 600;
    margin-top: 3vh;
    margin-bottom: 3vh;
`

export const PostDescription = styled.p`
    font-size: small;
    margin-top: 3vh;
`