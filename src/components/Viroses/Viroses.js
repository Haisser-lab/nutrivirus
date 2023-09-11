import { useNavigate } from "react-router-dom"
import CardVirose from "../../Cards/CardVirose/CardVirose"
import { Container, DivCards, MoreButton, Texto, TitleContainer } from "./styled"

function Viroses(){
    const navigate = useNavigate()

    const goToSearch = () => {
        navigate("/Pesquisar")
    }
    return(
        <>
        <Container>
            <TitleContainer>
                <Texto>Categorias</Texto>
                <MoreButton onClick={goToSearch}>Ver tudo</MoreButton>
            </TitleContainer>
            <DivCards>
                <CardVirose/>
                <CardVirose/>
                <CardVirose/>
                <CardVirose/>
                <CardVirose/>
                <CardVirose/>
            </DivCards>
        </Container>
        </>
    )
}

export default Viroses