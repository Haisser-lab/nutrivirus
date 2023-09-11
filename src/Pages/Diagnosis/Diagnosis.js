import React, { useState } from "react";
import {
  Stack,
  Step,
  StepSeparator,
  Stepper,
  Text,
  Button,
} from "@chakra-ui/react";
import { Buttons, ContentContainer, DiagnosisContainer, InputRadio, NextButton, Options, PageSubtitle, PageTitle, PrevButton, SymptomsContainer } from "./StyledDiagnosis";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Diagnosis() {
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleNextClick = () => {
    if (isLastStep) {
      console.log("Concluir button clicked");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

    // Botões de sintomas
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };

  return (
    <>
    <Stack>
    <Header Elements={<>
        <Stepper colorScheme='green' style={{height: "fit-content", minWidth: "100%", alignSelf: "end", marginTop: "3vh"}} size="xl" index={activeStep} gap="0">
          {steps.map((step, index) => (
            <Step key={index} gap="0">
              <StepSeparator _horizontal={{ ml: "0" }} />
            </Step>
          ))}
        </Stepper>
    </>}/>
        <DiagnosisContainer>
            <ContentContainer>
                <PageTitle>Selecione seus sintomas</PageTitle>
                <PageSubtitle>Nasais</PageSubtitle>
                <SymptomsContainer>
                    {/* {symptoms.map((info, index) => { */}
                    <Options htmlFor="coriza" checked={isChecked} onClick={handleRadioChange}>
                        Coriza
                    <InputRadio
                        type="radio"
                        id="coriza"
                        checked={isChecked}
                        onChange={() => {}}
                    />
                    </Options>
                    {/* })} */}
                </SymptomsContainer>
            </ContentContainer>
            <Buttons>
                {activeStep > 0 && (
                <PrevButton onClick={handlePrevClick}>Voltar</PrevButton>
                )}
                <NextButton onClick={handleNextClick}>
                {isLastStep ? "Concluir" : "Próximo"}
                </NextButton>
            </Buttons>
        </DiagnosisContainer>
        </Stack>
      <Footer/>
    </>
  );
}

export default Diagnosis;