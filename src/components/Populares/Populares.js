import CardPopulares from "../../Cards/CardPopulares/CardPopulares"
import { Container, DivCards, Texto } from "./styled"

function Populares(){
    return(
        <>
        <Container>
            <Texto>Populares</Texto>
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