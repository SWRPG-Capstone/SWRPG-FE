import React, { useEffect, useState } from "react";

export const DiceLog = ({ diceRolls }) => {
	const [logs, setLogs] = useState([]);
	const { outcome } = diceRolls;
  
  useEffect(() => {  
    if (!outcome.length) {
      return;
    }

    const diceSet = ['force', 'ability', 'proficiency', 'boost', 'difficulty', 'challenge', 'setback']; 
    const countOutcome = (result, i) => {
      const die = diceSet[i];
      
      const totalResult = result.flat().reduce((acc, value) => {
        if (!acc[value]) {
          acc[value] = 0;
        }
        acc[value]++;

        return acc;
      }, {});

      const diceOutcomes = Object.keys(totalResult).map(face => {
        return ` ${totalResult[face]} ${face}`;
      });

      const phrase = `You rolled ${outcome[i].length} ${die} ${outcome[i].length > 1 ? 'dice' : 'die'} and got${diceOutcomes}`;
        
      return phrase;
    };

    const translation = outcome.filter(dieType => dieType.length).map(result => {
      const diceIndex = (outcome.indexOf(result));
      return countOutcome(result, diceIndex);
    });

    setLogs(prevLogs => [ translation, ...prevLogs ]);
  }, [outcome]);

  const rollLog = logs.map((entry, index) => {
    const spacedEntry = entry.join(', ');
    return <li className='log-entry' key={index}>{spacedEntry}</li>
  })

	return (
		<article className='roll-log'>
				<ul className='entries'>
          {rollLog}
        </ul>
		</article>
	)
}