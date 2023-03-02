import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_DETAILS, CREATE_CHARACTERISTICS, CREATE_SKILLS } from '../graphql/mutations';
import { UserContext } from '../utilities/UserContext';

export const FormSkills = ({ onChange, formState }) => {
  const history = useHistory();
  const [validated, setValidated] = useState(null);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);

  const [createCharacteristics, { loading: charsLoading, error: charsError }] = useMutation(CREATE_CHARACTERISTICS);

  const [createSkills, { loading: skillsLoading, error: skillsError }] = useMutation(CREATE_SKILLS, {
    onCompleted() {
      history.push('/character');
    },
  });

  const [createCharDetails, { loading: detailsLoading, error: detailsError }] = useMutation(CREATE_DETAILS, {
    onCompleted(data) {
      userDispatch({ userState, action: { type: 'SETCHARACTER', character: data.createCharacter.id } });
      createCharacteristics({
        variables: {
          ...formState.characteristics,
          characterId: parseInt(data.createCharacter.id),
        },
      });
      createSkills({
        variables: {
          ...formState.skills,
          characterId: parseInt(data.createCharacter.id),
        },
      });
    },
  });

  const validateForm = () => {
    return Object.keys(formState.skills).reduce((valid, stat) => {
      if (formState.skills[stat] < 0 || formState.skills[stat] > 5 || isNaN(formState.skills[stat])) valid = false;
      return valid;
    }, true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      createCharDetails({
        variables: formState.details,
      });
    }
  };

  if (detailsLoading || charsLoading || skillsLoading) return <p>Submitting...</p>;
  if (detailsError || charsError || skillsError) return <p>A submission error occurred!</p>;

  return (
    <form className="skills-form" autoComplete="on">
      <div className="input-container">
        <label className="char-heading" htmlFor="astrogation">
          Astrogation
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="astrogation"
            value={formState.skills.astrogation}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
            autoFocus
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="athletics">
          Athletics
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="athletics"
            value={formState.skills.athletics}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="brawl">
          Brawl
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="brawl"
            value={formState.skills.brawl}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="charm">
          Charm
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="charm"
            value={formState.skills.charm}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="coercion">
          Coercion
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="coercion"
            value={formState.skills.coercion}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="computers">
          Computers
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="computers"
            value={formState.skills.computers}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="cool">
          Cool
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="cool"
            value={formState.skills.cool}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="coordination">
          Coordination
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="coordination"
            value={formState.skills.coordination}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="coreWorlds">
          Core Worlds
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="coreWorlds"
            value={formState.skills.coreWorlds}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="deception">
          Deception
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="deception"
            value={formState.skills.deception}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="discipline">
          Discipline
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="discipline"
            value={formState.skills.discipline}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="education">
          Education
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="education"
            value={formState.skills.education}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="gunnery">
          Gunnery
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="gunnery"
            value={formState.skills.gunnery}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="leadership">
          Leadership
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="leadership"
            value={formState.skills.leadership}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="lore">
          Lore
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="lore"
            value={formState.skills.lore}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="mechanics">
          Mechanics
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="mechanics"
            value={formState.skills.mechanics}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="medicine">
          Medicine
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="medicine"
            value={formState.skills.medicine}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="melee">
          Melee
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="melee"
            value={formState.skills.melee}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="negotiation">
          Negotiation
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="negotiation"
            value={formState.skills.negotiation}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="outerRim">
          Outer Rim
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="outerRim"
            value={formState.skills.outerRim}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="perception">
          Perception
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="perception"
            value={formState.skills.perception}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="piloting">
          Piloting
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="piloting"
            value={formState.skills.piloting}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="pilotingSpace">
          Piloting Space
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="pilotingSpace"
            value={formState.skills.pilotingSpace}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="rangedHeavy">
          Ranged Heavy
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="rangedHeavy"
            value={formState.skills.rangedHeavy}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="rangedLight">
          Ranged Light
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="rangedLight"
            value={formState.skills.rangedLight}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="resilience">
          Resilience
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="resilience"
            value={formState.skills.resilience}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="skulduggery">
          Skulduggery
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="skulduggery"
            value={formState.skills.skulduggery}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="stealth">
          Stealth
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="stealth"
            value={formState.skills.stealth}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="streetWise">
          Street Wise
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="streetWise"
            value={formState.skills.streetWise}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="survival">
          Survival
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="survival"
            value={formState.skills.survival}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="underworld">
          Underworld
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="underworld"
            value={formState.skills.underworld}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="vigilance">
          Vigilance
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="vigilance"
            value={formState.skills.vigilance}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      <div className="input-container">
        <label className="char-heading" htmlFor="xenology">
          Xenology
          <input
            className="char-value"
            type="number"
            min="0"
            max="5"
            name="xenology"
            value={formState.skills.xenology}
            onChange={(e) => onChange(e, 'handle number input', 'skills')}
          />
        </label>
      </div>

      {validated === false && <p className="form-error-msg">Skills must have a value between 0 and 5</p>}

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
