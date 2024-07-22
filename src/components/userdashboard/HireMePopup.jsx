import React, { useRef, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import BasicDatePicker from "../BasicDatePicker";
import BasicTimePicker from "../BasicTimePicker";
import cross from "./../media/cross.png";
import { ElderlyContext } from "./UserContext";

const HireMePopup = ({ onClose, CTid }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const popupRef = useRef();
  const [selectedDate, setSelectedDate] = useState();
  const { state, hireCareTaker } = useContext(ElderlyContext);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  function onChange(date) {
    setSelectedDate(date);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmit = (data) => {
    console.log("Hire me Form data:", data);
    const HireCTData = {
      dateTime: selectedDate,
      description: data.description,
    };
    hireCareTaker(HireCTData,CTid);
    onClose();
  };

  return (
    <div className="w-screen h-screen fixed flex justify-center items-center bg-gray-50/50">
      <div
        ref={popupRef}
        className="bg-white p-4 border-2 border-[#d3d9dd] rounded-2xl flex flex-col w-[400px]"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[#8883f0] font-[500] text-3xl">Hire Me</h1>
          <img
            className="h-6 w-6 cursor-pointer"
            src={cross}
            onClick={onClose}
            alt="Close"
          ></img>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl w-1/2">Date</h1>
            <div className="scale-75 ml-auto">
              <BasicDatePicker onChange={onChange} />
            </div>
            {errors.date && (
              <span className="text-red-500">{errors.date.message}</span>
            )}
          </div>

          <div className="flex justify-between items-center mt-1 w-full">
            <h1 className="text-xl w-1/2">Description</h1>
            <input
              className="scale-75 py-2 px-1 border-[0.5px] rounded-[3px] border-[#c4c4c4] w-[200px] hover:border-black"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>
          <div className="w-1/2 ml-auto flex justify-end mt-2">
            <button
              type="submit"
              className="ml-auto bg-[#8883f0] p-2 px-3 rounded-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMePopup;
