import { Progress, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import BackArrow from "../../components/BackArrow/BackArrow";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Content, DetailedContainer, PageTitle } from "./StyledDetailed";
import VirusDetailed from "../../components/VirusDetailed/VirusDetailed";

function Detailed(){
    return(
    <>
    <DetailedContainer>
        <Header Elements={<>
            <BackArrow/>
        </>}/>
        <Content>
            <PageTitle>COVID-19</PageTitle>
            <Tabs position="relative" variant="unstyled">
                <TabList style={{display: "flex", justifyContent: "space-between"}}>
                <Tab>O que é</Tab>
                <Tab>Sintomas</Tab>
                <Tab>Alimentos</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                <TabPanel>
                    <VirusDetailed/>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                </TabPanels>
            </Tabs>
        </Content>
        <Footer/>
    </DetailedContainer>
    </>
    )
};

export default Detailed;