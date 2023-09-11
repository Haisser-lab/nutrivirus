import React, { useState } from 'react';
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { CardContainer, PageTitle, SearchContainer, Tag, TagContainer, VirusCard } from "./StyledSearch";
import Header from "../../components/Header/Header";

import virusData from "../../virus.json";
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

function Search() {
    const navigate = useNavigate()

    const goDetailed = () => {
        navigate("/Detalhado")
    }

    // Inicia com o estado da página para viroses populares
    const [selectedTag, setSelectedTag] = useState('Popular');

    // Função de tratativa do clique
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    // Filter the virus data based on the selected tag
    const filteredVirus = virusData.Type.find(tag => tag.VirusType === selectedTag);

    // Filter virus information based on selected tag
    const filteredVirusInformation = selectedTag === 'Popular'
        ? virusData.VirusInformation
        : virusData.VirusInformation.filter(info => info.Type === selectedTag);

    return (
        <>
        <SearchContainer>
            <Header Elements={
                <>
                    <SearchBar />
                    <Menu />
                </>
            } />
            <TagContainer>
                <Tag
                    onClick={() => handleTagClick('Popular')}
                    style={{ backgroundColor: selectedTag === 'Popular' ? 'black' : 'transparent', color: selectedTag === 'Popular' ? 'white' : 'black' }}
                >
                    Popular
                </Tag>
                {virusData.Type.map((tag, index) => (
                    <Tag
                        key={index}
                        onClick={() => handleTagClick(tag.VirusType)}
                        style={{ backgroundColor: selectedTag === tag.VirusType ? 'black' : 'transparent', color: selectedTag === tag.VirusType ? 'white' : 'black' }}
                    >
                        {tag.VirusType}
                    </Tag>
                ))}
            </TagContainer>
            <PageTitle>
                {selectedTag === 'Popular' ? 'Populares' : selectedTag}
            </PageTitle>
            <CardContainer>
            {filteredVirusInformation.map((info, index) => (
                <VirusCard key={index} VirusImage={info.Image} onClick={goDetailed}>
                    {info.VirusName}
                </VirusCard>
            ))}
            </CardContainer>
            <Footer />
        </SearchContainer>
        </>
    )
}

export default Search;
