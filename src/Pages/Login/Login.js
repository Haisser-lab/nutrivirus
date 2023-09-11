import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InputContainer, LoginContainer, PageTitle, Submit } from "./StyledLogin";
import LoginInput from "../../components/Login/Input/Input";
import LoginFooter from "../../components/Login/Footer/Footer";
import Logo from "../../assets/nutrivirus.png"
import { JustifingEnd } from "../../styledGlobal";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const saveUserInfoLocalStorage = (token) => {
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
  }
  
  const handleSubmit = (e)=>{
      e.preventDefault()
      const credentials = {email, password}
    
        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate("/Home")
        })
        .catch(error => console.log(error))
  }
    
  const inputContent = [
    {
      InputTitle: "Usuário",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/> </svg>),
      InputPlaceholder: "Nome de usuário ou email",
      InputType: "text",
      InputValue: email,
      InputAction: (e)=>setEmail(e.target.value)
    },
    {
      InputTitle: "Senha",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16"><path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>),
      InputPlaceholder: "********",
      InputType: "text",
      InputValue: password,
      InputAction: (e)=>setPassword(e.target.value)
    }
  ]
  return (
    <>
    <LoginContainer>
    <PageTitle src={Logo}/>

    <InputContainer onSubmit={handleSubmit}>
      <LoginInput inputContent={inputContent}/>
      <JustifingEnd>
          <Submit type="submit">Entrar</Submit>
      </JustifingEnd>
    </InputContainer>

    <LoginFooter
        PageName = "Login"
        Path = "/Cadastro"
        RedirectText = "Não possui conta? Cadastre-se agora"
    />
    </LoginContainer>
    </>
  )
}

export default Login;

