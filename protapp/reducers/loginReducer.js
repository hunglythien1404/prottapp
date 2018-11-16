import * as types from './../constant/actionsTypes';


const reducer = (state = false, action) => {
  switch (action.type) {
    case types.GET_LOGIN:
      state = true;
      return true;
    default: return state;
  }
};

export default reducer;