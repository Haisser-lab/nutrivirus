import Header from "../../components/Header/Header"
import { Container } from "./styled"
import Viroses from "../../components/Viroses/Viroses"
import Populares from "../../components/Populares/Populares"
import SearchBar from "../../components/SearchBar/SearchBar"
import Footer from "../../components/Footer/Footer"
import UserInformation from "../../components/UserInformation/UserInformation"
import Menu from "../../components/Menu/Menu"

function Home() {
    return (
        <>
            <Container>
                <Header Elements={<>
                    <UserInformation/>
                    <Menu/>
                </>}/>
                <div style={{paddingLeft: "3vh", minWidth: "100vw"}}>
                    <SearchBar/>
                </div>
                <Viroses/>
                <Populares/>
                <Footer />
            </Container>
        </>
    )
}

export default Home