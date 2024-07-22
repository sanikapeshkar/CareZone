import { resolveDateFormat } from "@mui/x-date-pickers/internals/utils/date-utils";
import { axiosInstance } from "./axiosInstance";

const careTakerService = {
  registerCareTaker: async (data) => {
    console.log("data sent while registering", data);
    try {
      const response = await axiosInstance.patch(
        `/api/user/careTaker/register`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from CT", response);
    } catch (error) {
      console.error("Error registering caretaker:", error);
      throw error;
    }
  },

  getCareTakerDashboarddata: async (data) => {
    try {
      const response = await axiosInstance.get(`/api/user/careTaker/dashboard`);
      console.log("get careTaker dashboard Data ", response);
      
      return response.data.data;
    } catch (error) {
      console.error("Error registering caretaker:", error);
      throw error;
    }
  },
  // getAllCustomers


  //get All reuqests 

  
}

export default careTakerService;
