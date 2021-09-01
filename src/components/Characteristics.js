import { Characteristic } from "./Characteristic";

export const Characteristics = ({ characteristics }) => {
  const characteristicBubbles = Object.keys(characteristics).map(characteristic => {
    const score = characteristics[characteristic];
    return <Characteristic key={characteristic} characteristic={characteristic} score={score} />
  });
  return (
    <>
    <div className="top-bottom-bubbles">
      {characteristicBubbles[0]}{characteristicBubbles[1]}
    </div>
    <div className="center-bubbles">
      {characteristicBubbles[2]}{characteristicBubbles[3]}
    </div>
    <div className="top-bottom-bubbles">
      {characteristicBubbles[4]}{characteristicBubbles[5]}
    </div>
    </>
  )
}