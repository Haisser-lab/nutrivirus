import { FotoLogin, HeaderContainer , ImgFilter, Login, Nome} from "./styled"
import Filter from "../../Assets/filter-right.svg"

function Header() {
    return (
        <>
            <HeaderContainer>
                <Login>
                    <FotoLogin/>
                    <Nome>Bernardo Haisser</Nome>
                </Login>
                <ImgFilter src={Filter}/>
            </HeaderContainer>
        </>
    )
}

export default Header