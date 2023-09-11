import React, { useContext } from 'react';
import { Footer, Title, Subtitle } from './StyledFooter';
import { Link, useNavigate } from "react-router-dom";

function LoginFooter( props ) {
    // Rotas
    const navigate = useNavigate()

    const changePage = () => {
      navigate(props.Path)
    }

    return (
    <>
    <Footer>
        <Title>{props.PageName}</Title>
        <Subtitle onClick={changePage}>{props.RedirectText}</Subtitle>
    </Footer>
    </>
    )
}

export default LoginFooter;