export const diceReducer = (state, { type, die, value }) => {
	switch (type) {
		case "SETDIE":
      // localStorage.setItem('token', character)
      return {
        ...state,
        [die]: value
      }
    // case "AUTOSET":
    //   const token = JSON.parse(localStorage.getItem('token'))
    //   return token ?
    //     {
    //       ...state,
    //       isAuthorize: true,
    //       currentChar: token
    //     } : state
    default:
      return state
  }
};