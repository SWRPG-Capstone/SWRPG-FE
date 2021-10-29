export const formReducer = (state, action) => {
  switch (action.type) {
    case 'handle text input':
      return {
        ...state, 
        [action.page]: {
          ...state[action.page],
          [action.field]: action.value
        }
      };
    case 'handle number input':
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          [action.field]: parseInt(action.value)
        }
      };
    case 'handle id':
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          characterId: action.id
        }
      }
    default:
      throw new Error();
  }
}