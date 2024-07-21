// get user data


export async function registerElderly(){
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
    console.log("Response from register Elderly", response);
  } catch (error) {
    console.error("Error registering Elderly:", error);
    throw error;
  }
}
export async function getElderly() {
  try {
    const response = await axiosInstance.get("/user/elderly/dashboard");
    console.log("data from elderly", response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching event data:", error);
    throw error;
  }
}

export default async function getAllCareTaker() {
  try {
    const response = await axiosInstance.get(`/api/user/careTaker`);
    console.log("get careTaker Data ", response);
    return response.data.data;
  } catch (error) {
    console.error("Error registering caretaker:", error);
    throw error;
  }
}
