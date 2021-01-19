const initialState = {
  logged: true,
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED":
      return { ...state, logged: action.logged, token: action.token };

    default:
      return state;
  }
};

export default reducer;
