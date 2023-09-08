import { Botao, ImgBotao, MenuContainer } from "./styled"
import casa from "../../Assets/Union.png"
import search from "../../Assets/search.svg"
import coronavirus from "../../Assets/coronavirus.png"
import tempo from "../../Assets/clock-history.svg"
import calendar from "../../Assets/calendar-date.svg"

function Menu(){
    return(
        <>
        <MenuContainer>
            <Botao>
                <ImgBotao src={casa}/>
            </Botao>
            <Botao>
                <ImgBotao src={search}/>
            </Botao>
            <Botao>
                <ImgBotao src={coronavirus}/>
            </Botao>
            <Botao>
                <ImgBotao src={tempo}/>
            </Botao>
            <Botao>
                <ImgBotao src={calendar}/>
            </Botao>
        </MenuContainer>
        </>
    )
}

export default Menu