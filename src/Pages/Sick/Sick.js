import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { JustifingEnd } from "../../styledGlobal";
import { Container } from "../Home/styled";
import { Buttons, FindVirusButton, FoodButton, PageContent, PageInformation, PageTitle, SickContainer } from "./StyledSick";

function Sick(){
    const navigate = useNavigate()

    const goToDiagnosis = () => {
        navigate("/Diagnostico")
    }
    return(
    <>
    <Container>
        <Header Elements={<>
        
        </>}/>
        <SickContainer>
            <PageInformation>
                <PageTitle>Está se sentindo doente?</PageTitle>
                <PageContent>Descubra ou nos informe sua virose e te indicaremos os melhores alimentos para sua recuperação!</PageContent>
            </PageInformation>
            <Buttons>
                <FindVirusButton onClick={goToDiagnosis}>Descubrir sua virose</FindVirusButton>
                <FoodButton>Já sei a virose que estou</FoodButton>
            </Buttons>
        </SickContainer>
        <Footer/>
    </Container>
    </>
    )
};

export default Sick;