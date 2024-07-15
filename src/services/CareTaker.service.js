//register CT

import { axiosInstance } from "./axios.instance";

const careTakerService = {
  registerCareTaker: async (data) => {
    try {
      const response = await axiosInstance.patch(
        `/user/careTaker/register`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error registering caretaker:", error);
      throw error;
    }
  },
};

export default careTakerService;
