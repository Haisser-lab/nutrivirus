import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"

function SearchBar(){
    return(
    <>
    <InputGroup h='5vh' display='flex' alignItems='center' justifyContent='center'>
        <InputLeftElement alignItems='center' h='5vh' marginLeft='1vw' pointerEvents='none'>
            <SearchIcon color='black' />
        </InputLeftElement>
        <Input h='5vh' w='90vw' bg='var(--theme-white-theme-core-tokens-grey-03-disabled, #D0D0D0)' borderRadius='25px' type='tel' placeholder='Pesquise sua virose' />
    </InputGroup>
    </>
    )
};

export default SearchBar;