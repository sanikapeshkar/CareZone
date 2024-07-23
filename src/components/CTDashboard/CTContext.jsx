import { createContext, useReducer } from "react";
import { reducer, actionTypes } from "./CT.state";
import careTakerService from "../../services/CareTaker.service";
export const CTContext = createContext();

const { getCareTakerDashboarddata } = careTakerService;
const initialState = {
  data: {},
  dashboardData: null,
};

export const CTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = CareTakerActions(dispatch);
  return (
    <CTContext.Provider
      value={{
        state,
        ...actions,
      }}
    >
      {children}
    </CTContext.Provider>
  );
};

const CareTakerActions = (dispatch) => {
  async function getDashboardData() {
    const response = await getCareTakerDashboarddata();
    console.log("response from getCareTakerDashboarddata", response);
    if (response) {
      dispatch({ type: actionTypes.SET_DASHBOARD_DATA, payload: response });
    }
  }


  return { getDashboardData };
};
