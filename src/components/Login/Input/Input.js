import { InputTitle, LoginInputContainer, LoginInputElement } from "./StyledInput";

function LoginInput({ inputContent }) {

    return(
        <>
        {inputContent.map((input, index) => (
        <div key={index}>
            <InputTitle>{input.InputTitle}</InputTitle>
            <LoginInputContainer>
                {input.InputIcon}
                <LoginInputElement onChange={input.InputAction} value={input.InputValue} type={input.InputType} placeholder={input.InputPlaceholder}/>
            </LoginInputContainer>
        </div>
        ))}
        </>
    )
}

export default LoginInput;