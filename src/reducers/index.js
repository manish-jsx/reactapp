const initialState = {
  isAuthenticated: true,
  // other relevant authentication state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        // update other relevant authentication state like user data, tokens, etc.
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        // clear other authentication state
      };
    default:
      return state;
  }
};


export default authReducer;
