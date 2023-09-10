import { FotoLogin, HeaderContainer , ImgFilter, Login, Nome} from "./styled"

function Header( props ) {
    return (
        <>
            <HeaderContainer>
                {props.Elements}
            </HeaderContainer>
        </>
    )
}

export default Header