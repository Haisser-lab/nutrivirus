import virus from "../../virus.json"
import { PostDescription, PostImage, PostTitle } from "./StyledVirusDetailed";

function VirusDetailed (){

    return(
        <>
        <PostImage PostImage={virus.VirusInformation[0].PostImage}/>
        <hr/>
        <PostTitle>O que é a {virus.VirusInformation[0].VirusName}?</PostTitle>
        <hr/>
        <PostDescription>{virus.VirusInformation[0].Description}</PostDescription>
        </>
 )
}
export default VirusDetailed;
