import { Container, DivMenor, Img, Porcentagem, Titulo } from "./styled"
import grafico from "../../assets/trending_up.png"
import { useNavigate } from "react-router-dom"

function CardPopulares() {
    const navigate = useNavigate()

    const goDetailed = () => {
        navigate("/Detalhado")
    }
    return (
        <>
            <Container onClick={goDetailed}>
                <DivMenor>
                    <Img src={grafico} />
                    <Porcentagem>5%</Porcentagem>
                </DivMenor>
                <Titulo>Influenza</Titulo>
            </Container>
        </>
    )
}

export default CardPopulares