import CardVirose from "../../Cards/CardVirose/CardVirose"
import { Container, DivCards, Texto } from "./styled"

function Viroses(){
    return(
        <>
        <Container>
            <Texto>Categorias</Texto>
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