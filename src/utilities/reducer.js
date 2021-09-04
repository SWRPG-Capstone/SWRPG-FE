export const reducer = (state, action) => {
	const { type, isValid } = action
  switch (type) {
    case "ACTIVATE":
      localStorage.setItem("token", JSON.stringify(isValid))
      return {
        ...state,
        isAuthorize: true,
      };
    case "AUTOACTIVATE": 
      const token = JSON.parse(localStorage.getItem('token'))
      return token ?
        {
        ...state,
        token: token,
      } : state
    default:
    return state
  }
};