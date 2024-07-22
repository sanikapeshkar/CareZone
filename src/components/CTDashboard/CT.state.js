export const actionTypes = {
    SET_DATA: "SET_DATA",
    SET_DASHBOARD_DATA: "SET_DASHBOARD_DATA",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_DATA:
        return {
          ...state,
          data: { ...state.data, ...action.payload },
        };
      case actionTypes.SET_DASHBOARD_DATA:
        return {
          ...state,
          dashboardData: action.payload,
        };
      default:
        return state;
    }
  };
  