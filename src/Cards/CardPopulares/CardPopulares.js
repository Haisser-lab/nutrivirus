import { Container, DivMenor, Img, Porcentagem, Titulo } from "./styled"
import grafico from "../../Assets/trending_up.png"

function CardPopulares() {
    return (
        <>
            <Container>
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