import React, { useState } from "react";
import { FormSkills } from "./FormSkills";
import { FormCharacteristics } from "./FormCharacteristics";
import { FormCharDetails } from "./FormCharDetails";

export const FormContainer = () => {
  // const [charId, setCharId] = useState(null);
  const [currentStep, setCurrentStep] = useState('details');

  return (
    <section>
      <FormCharDetails currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <FormCharacteristics currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <FormSkills currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </section>
  )
}