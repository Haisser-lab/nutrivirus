import { useNavigate } from "react-router-dom"
import CardPopulares from "../../Cards/CardPopulares/CardPopulares"
import { Container, DivCards, MoreButton, Texto, TitleContainer } from "./styled"

function Populares(){
    const navigate = useNavigate()

    const goToSearch = () => {
        navigate("/Pesquisar")
    }
    return(
        <>
        <Container>
            <TitleContainer>
                <Texto>Populares</Texto>
                <MoreButton onClick={goToSearch}>Ver tudo</MoreButton>
            </TitleContainer>
            <DivCards>
                <CardPopulares/>
                <CardPopulares/>
                <CardPopulares/>
            </DivCards>
        </Container>
        </>
    )
}

export default Populares