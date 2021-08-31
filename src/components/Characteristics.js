import { Characteristic } from "./Characteristic";

export const Characteristics = ({ characteristics }) => {
  return Object.keys(characteristics).map(characteristic => {
    const score = characteristics[characteristic];
    return <Characteristic key={characteristic} characteristic={characteristic} score={score} />
  })
}