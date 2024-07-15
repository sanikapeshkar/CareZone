import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import BasicDatePicker from "../BasicDatePicker";
import BasicTimePicker from "../BasicTimePicker";
import { postEvent } from "../../services/eventData.service";
import dayjs from "dayjs";

const CreateEvent = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const onSubmit = async (data) => {
    const date = new Date(data.eventDate);
    const time = new Date(data.eventTime);

    const dateTime = data.eventDate;

    const eventData = {
      title: data.title,
      description: data.description,
      location: data.location,
      dateTime,
      duration: Number(data.duration),
      lastDateToEnrol: data.lastDateToEnrol,
      cost: Number(data.cost),
    };

    try {
      await postEvent(eventData);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event.");
    }
  };

  const handleDateChange = (date) => {
    setValue("dateTime", date);
  };

  const handleTimeChange = (time) => {
    setValue("eventTime", time);
  };

  const handleLastEnrollmentDateChange = (date) => {
    setValue("lastEnrollmentDate", date);
  };

  return (
    <div className="w-screen flex overflow-x-hidden">
      <Sidebar />
      <div className="w-4/5 ml-auto p-4 overflow-x-hidden">
        <h1 className="text-4xl font-semibold text-[#8883f0] mt-3">
          Create Event
        </h1>
        <form
          className="w-full mt-4 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full mx-auto bg-slate-100 rounded-lg p-4">
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Title</label>
              <input
                placeholder="Event Title"
                className="rounded-2 border-1 border-[#bcb9bf] p-2 px-2 bg-transparent placeholder:text-[#646768] hover:border-[#646768]"
                {...register("title")}
              />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-start">
              <label className="text-xl text-[#1a1a1a]">Description</label>
              <textarea
                placeholder="Event Description"
                className="rounded-2 border-1 border-[#bcb9bf] p-2 px-2 bg-transparent placeholder:text-[#646768] hover:border-[#646768]"
                {...register("description")}
              />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Location</label>
              <input
                placeholder="Event Location"
                className="rounded-2 border-1 border-[#bcb9bf] p-2 px-2 bg-transparent placeholder:text-[#646768] hover:border-[#646768]"
                {...register("location")}
              />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Event Date</label>
              <BasicDatePicker onChange={handleDateChange} />
              <input type="hidden" {...register("eventDate")} />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Event Time</label>
              <BasicTimePicker onChange={handleTimeChange} />
              <input type="hidden" {...register("eventTime")} />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Duration</label>
              <input
                type="number"
                placeholder="(in hours)"
                className="rounded-2 border-1 border-[#bcb9bf] p-2 px-2 bg-transparent placeholder:text-[#646768] hover:border-[#646768]"
                {...register("duration")}
              />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">
                Last Date to Enroll
              </label>
              <BasicDatePicker onChange={handleLastEnrollmentDateChange} />
              <input type="hidden" {...register("lastDateToEnroll")} />
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl text-[#1a1a1a]">Cost</label>
              <input
                type="number"
                placeholder="(in rupees)"
                className="rounded-2 border-1 border-[#bcb9bf] p-2 px-2 bg-transparent placeholder:text-[#646768] hover:border-[#646768]"
                {...register("cost")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mr-auto mt-8 p-2 px-4 rounded-[30px] border-0 bg-[#8883f0] text-white text-xl font-normal"
          >
            Create this event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
