export const actionTypes = {
    SET_DATA: "SET_DATA",
    SET_PROFILE_DATA: "SET_PROFILE_DATA",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_DATA:
        return {
          ...state,
          data: { ...state.data, ...action.payload },
        };
      case actionTypes.SET_PROFILE_DATA:
        return {
          ...state,
          profileData: action.payload,
        };
      default:
        return state;
    }
  };
  