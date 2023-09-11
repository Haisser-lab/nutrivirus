import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"

function SearchBar(){
    return(
    <>
    <InputGroup h='5vh'>
        <InputLeftElement alignItems='center' h='5vh' marginLeft='1%' pointerEvents='none'>
            <SearchIcon color='black' />
        </InputLeftElement>
        <Input h='5vh' w='93%' bg='var(--theme-white-theme-core-tokens-grey-03-disabled, #D0D0D0)' borderRadius='25px' type='tel' placeholder='Pesquise sua virose' />
    </InputGroup>
    </>
    )
};

export default SearchBar;