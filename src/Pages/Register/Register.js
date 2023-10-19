import React, { useEffect, useState } from "react";
import axios from "axios"

import { InputContainer, RegisterContainer, PageTitle, Submit } from "./StyledRegister";
import LoginInput from "../../components/Login/Input/Input";
import LoginFooter from "../../components/Login/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { JustifingEnd } from "../../styledGlobal";
import Logo from "../../Assets/nutrivirus.png"


function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('A senha e a confirmação de senha não coincidem.');
      return;
    }
  
    const userData = { username, name, email, password, confirmPassword };
  
    axios.post('http://localhost:8001/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        alert(response.data.message);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Erro durante o registro:', error);
      });
  };
  
  const inputContent = [
    {
      InputTitle: "Usuário",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/> </svg>),
      InputPlaceholder: "Nome de usuário",
      InputType: "text",
      InputValue: username,
      InputAction: (e)=>setUsername(e.target.value)
    },
    {
      InputTitle: "Nome",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/> </svg>),
      InputPlaceholder: "Nome e sobrenome",
      InputType: "text",
      InputValue: name,
      InputAction: (e)=>setName(e.target.value)
    },
    {
      InputTitle: "Email",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>),
      InputPlaceholder: "Email",
      InputType: "email",
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
    },
    {
      InputTitle: "Confirme sua senha",
      InputIcon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16"><path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>),
      InputPlaceholder: "********",
      InputType: "text",
      InputValue: confirmPassword,
      InputAction: (e)=>setConfirmPassword(e.target.value)
    },
  ]
  return (
    <>
    <RegisterContainer>
    <PageTitle src={Logo}/>

    <InputContainer onSubmit={handleSubmit}>
      <LoginInput inputContent={inputContent}/>
      <JustifingEnd>
          <Submit type="submit">Cadastrar</Submit>
      </JustifingEnd>
    </InputContainer>

    <LoginFooter
        PageName = "Cadastro"
        Path = "/"
        RedirectText = "Já possui conta? Faça seu login agora"
    />
    </RegisterContainer>
    </>
  )
}

export default Register;

