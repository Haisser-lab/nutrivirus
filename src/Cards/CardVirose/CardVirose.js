import { useNavigate } from "react-router-dom"
import { Container, FooterCard } from "./styled"

function CardVirose() {
    const navigate = useNavigate()

    const goDetailed = () => {
        navigate("/Detalhado")
    }
    return (
        <>
            <Container onClick={goDetailed}>
                <FooterCard>
                    Hepatites
                </FooterCard>
            </Container>
        </>
    )
}

export default CardVirose