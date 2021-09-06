export const reducer = (state, {action}) => {
	const { type,  character } = action
  switch (type) {
    case "SETCHARACTER": 
    localStorage.setItem('token', character)
      return {
        ...state,
        isAuthorize: true,
        currentChar: character
      }
    case "AUTOSET": 
      const token = JSON.parse(localStorage.getItem('token'))
      return token ?
        {
        ...state,
        isAuthorize: true,
        currentChar: token
      } : state

    default:
    return state
  }
};