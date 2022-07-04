import { Characteristic } from "./Characteristic";

export const Characteristics = ({ characteristics }) => {
  const characteristicBubbles = [
    <Characteristic key='brawn' characteristic='brawn' score={characteristics.brawn} />,
    <Characteristic key='agility' characteristic='agility' score={characteristics.agility} />,
    <Characteristic key='cunning' characteristic='cunning' score={characteristics.cunning} />,
    <Characteristic key='intellect' characteristic='intellect' score={characteristics.intellect} />,
    <Characteristic key='willpower' characteristic='willpower' score={characteristics.willpower} />,
    <Characteristic key='presence' characteristic='presence' score={characteristics.charPresence} />,
  ];
  
  return (
    <dl className="bubbles">
      {characteristicBubbles}
    </dl>
  )
}