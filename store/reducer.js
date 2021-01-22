const initialState = {
  logged: true,
  token: "",
  categories: [
    { label: "calificacion1", value: "c1" },
    { label: "calificacion2", value: "c2" },
  ],
  courses: [
    { label: "curso1", value: "c1" },
    { label: "curso2", value: "c2" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED":
      return { ...state, logged: action.logged, token: action.token };
    case "SET_CATEGORIES":
      return { ...state, categories: action.categories };
    case "SET_COURSES":
      return { ...state, courses: action.courses };

    default:
      return state;
  }
};

export default reducer;
