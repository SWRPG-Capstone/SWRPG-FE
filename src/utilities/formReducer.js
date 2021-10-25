export const formReducer = (state, action) => {
  switch (action.type) {
    case 'handle text input':
      return {
        ...state, 
        details: {
          ...state.details,
          [action.field]: action.value
        }
      };
    case 'handle number input':
      return {
        ...state,
        details: {
          ...state.details,
          [action.field]: parseInt(action.value)
        }
      };
    default:
      throw new Error();
  }
}