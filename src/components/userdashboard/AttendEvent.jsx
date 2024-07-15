import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import HireMePopup from "./HireMePopup";
import { getEventData, enrollEvent } from "../../services/eventData.service";

const AttendEvent = () => {
  const [eventData, setEventData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Fetch all event data
  const getAllEventData = async () => {
    try {
      const data = await getEventData();
      setEventData(data);
      setSelectedEvent(data[0]); // Optionally set the first event as selected
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    getAllEventData();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  // Enroll in selected event
  const handleEnroll = async () => {
    if (!selectedEvent) return;

    try {
     
      const response=await enrollEvent(selectedEvent._id); 
      console.log('Enroll in event ',response);
      alert("Successfully enrolled in the event!");
    } catch (error) {
      console.error("Error enrolling in event:", error);
      alert("Enrollment failed!");
    }
  };

  return (
    <div className="w-screen flex">
      <Sidebar />
      {isPopupVisible && <HireMePopup onClose={handleClosePopup} />}

      <div className="w-4/5 p-4 ml-auto h-screen">
        <h1 className="text-4xl font-semibold text-[#8883f0] mt-3">
          Attend Event
        </h1>
        <div className="rounded-[24px] p-2 mt-4 shadowboxer flex w-[100%] h-[90%]">
          <div className="w-[30%] bg-gray-300 rounded-[16px] overflow-scroll overflow-x-hidden">
            {eventData.map((val, key) => (
              <div
                key={key}
                id="ctbackground"
                className="hover:bg-slate-200 h-30 m-2 p-4 flex items-center rounded-4 cursor-pointer"
                onClick={() => handleEventClick(val)}
              >
                <h1 className="text-[#1b1b1b] text-xl font-[500]">
                  {val.title}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-[70%]">
            {selectedEvent && (
              <div className="p-4 w-full">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl">Live, Laugh and Love</h1>
                  <div className="flex flex-col items-center ml-auto">
                    <button
                      className="w-[200px] m-1 p-2 px-4 rounded-3 bg-blue-500 hover:scale-[1.02] duration-100"
                      onClick={handleEnroll} // Call the enroll function on click
                    >
                      Enroll Now
                    </button>
                    <button className="w-[200px] m-1 p-2 px-4 rounded-3 bg-green-400 hover:scale-[1.02] duration-100">
                      Call Now
                    </button>
                  </div>
                </div>
                <h1 className="text-4xl text-[#8883f0] font-semibold my-2">
                  {selectedEvent.title}
                </h1>
                <h1 className="my-2 mb-4">{selectedEvent.description}</h1>
                <div className="flex flex-col pr-8">
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">Location: </h1>
                    <h1 className="text-xl">{selectedEvent.location}</h1>
                  </div>
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">Date: </h1>
                    <h1 className="text-xl">{selectedEvent.dateTime}</h1>
                  </div>
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">Time: </h1>
                    <h1 className="text-xl">{selectedEvent.dateTime}</h1>
                  </div>
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">Duration: </h1>
                    <h1 className="text-xl">{selectedEvent.duration} hours</h1>
                  </div>
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">
                      Last Enrollment:{" "}
                    </h1>
                    <h1 className="text-xl">{selectedEvent.lastDateToEnrol}</h1>
                  </div>
                  <div className="flex my-2">
                    <h1 className="flex-1 text-xl font-semibold">Cost: </h1>
                    <h1 className="text-xl">{selectedEvent.cost}</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendEvent;
