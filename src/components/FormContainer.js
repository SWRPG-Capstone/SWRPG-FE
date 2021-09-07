import React, { useContext, useState } from "react";
import { FormSkills } from "./FormSkills";
import { FormCharacteristics } from "./FormCharacteristics";
import { FormCharDetails } from "./FormCharDetails";
import { UserContext } from "../utilities/UserContext";

export const FormContainer = () => {
  const [count, setCount] = useState(0)
  const { state: { currentChar } } = useContext(UserContext)
  const handleCount = () => setCount(count + 1)

  return (
    <section className="form-container">
      {count === 0 && <FormCharDetails setCount={handleCount} />}
      {count === 1 && <FormCharacteristics charId={currentChar} setCount={handleCount} />}
      {count === 2 && <FormSkills charId={currentChar} setCount={handleCount} />}
    </section>
  )
}