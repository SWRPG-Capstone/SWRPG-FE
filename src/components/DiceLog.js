import React, { useEffect, useState } from "react";

export const DiceLog = ({ diceRolls }) => {
	const [logs, setLogs] = useState([]);
	const { outcome } = diceRolls;
  
  useEffect(() => {  
    const diceSet = ['force', 'ability', 'proficiency', 'boost', 'difficulty', 'challenge', 'setback']; 
    const countOutcome = (result, i) => {
      const die = diceSet[i];
      
      const totalResult = result.reduce((acc, dieValues) => {
        dieValues.map(value => {
          if (!acc[value]) {
            acc[value] = 0;
          }
          return acc[value]++;
        })
        return acc;
      }, {});
      
      const getPhrases = Object.keys(totalResult).map(face => {
        return (
          <p>{`You rolled a ${die} die and got ${totalResult[face]} ${face}`}<br/></p>
          );
        })
        
        const parsedPhrases = getPhrases.map(phrase => {
          return phrase.props.children;
        })
        
        return parsedPhrases;
      };

    const translation = outcome.filter(dieType => dieType.length).map(result => {
      const diceIndex = (outcome.indexOf(result));
      return countOutcome(result, diceIndex);
    });

    setLogs(prevLogs => [ ...translation, ...prevLogs]);
  }, [outcome]);

	return (
		<article className='roll-log'>
				<p className='entry'>{logs}</p>
		</article>
	)
}