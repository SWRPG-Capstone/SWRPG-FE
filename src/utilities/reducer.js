export const reducer = (state, { action }) => {
  switch (action.type) {
    case 'SETCHARACTER':
      const { character } = action;
      localStorage.setItem('token', character);
      return {
        ...state,
        currentChar: character,
      };
    case 'SETDIE':
      const { die, value } = action;
      return {
        ...state,
        [die]: value,
      };
    case 'SETOUTCOME':
      const { results } = action;
      return {
        ...state,
        outcome: results,
      };
    case 'SETUSER':
      const { userID } = action;
      return {
        ...state,
        currentUser: userID,
      };
    case 'AUTOSET':
      const token = JSON.parse(localStorage.getItem('token'));
      return token
        ? {
            ...state,
            currentChar: token,
          }
        : state;
    default:
      return state;
  }
};
