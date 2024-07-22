import { createContext, useReducer } from "react";
import { reducer, actionTypes } from "./User.state";
import getAllCareTaker, { getElderlyDashboardData,getElderlyProfileData,HireCT, postAnEvent } from "../../services/elderly.service";

export const ElderlyContext = createContext();

const initialState = {
  data: {},
  profileData: null,
};

export const ElderlyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = ElderlyActions(dispatch);
  return (
    <ElderlyContext.Provider
      value={{
        state,
        ...actions,
      }}
    >
      {children}
    </ElderlyContext.Provider>
  );
};

const ElderlyActions = (dispatch) => {
  async function getProfileData() {
    const response = await getElderlyProfileData();
    console.log("response from getElderlyDashboardData", response);
    if (response) {
      dispatch({ type: actionTypes.SET_PROFILE_DATA, payload: response });
    }
  }

  // get all careTaker data 
  async function getAllCareTakerData() {
    const response = await getAllCareTaker();
    console.log("response from get all careTaker", response);
    if (response) {
      dispatch({ type: actionTypes.SET_DATA, payload: response });
    }
  }

  //hire CareTaker

   function hireCareTaker(data, ctId) {
    const response =  HireCT(data, ctId);
    console.log("response from HireCT", response);
  }

  // function to create an event 

  function createEvent(data){
    postAnEvent(data);

  }

  return { getProfileData,hireCareTaker,createEvent,getAllCareTakerData };
};