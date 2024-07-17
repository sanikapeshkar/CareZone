import React, { useState } from "react";
import plusphoto from "../components/media/plus.png";
import pluswhitephoto from "../components/media/plus-hover.png";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ImageUploader from "../components/ImageUploader";
import { updateElderlyUserRegistration } from "../services/user.service";

const UserRegistration = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      mobileNumber: "",
      age: "",
      gender: "",
      medicalHistory: [{ condition: "", diagnosisDate: "", treatment: "" }],
      medication: [{ name: "", dosage: "", frequency: "" }],
    },
  });

  const {
    fields: medicalHistoryFields,
    append: appendMedicalHistory,
    remove: removeMedicalHistory,
  } = useFieldArray({
    control,
    name: "medicalHistory",
  });

  const {
    fields: medicationFields,
    append: appendMedication,
    remove: removeMedication,
  } = useFieldArray({
    control,
    name: "medication",
  });

  const onSubmit = (data) => {
    console.log(data);
    const response=updateElderlyUserRegistration(data);
    
  };

  return (
    <div className="w-screen p-8">
      <div className="w-full h-full border-2 border-[#95989d] rounded-[24px] p-8 flex flex-col items-center shadowboxer bg-slate-50">
        <h1 className="text-5xl text-center text-[#8883f0] font-semibold">
          Join Old Citizens: Embrace a community that cares!
        </h1>
        <hr className="w-[95%] border-2 mt-4"></hr>
        <form
          className="w-full mt-4 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-1/2 mx-auto bg-slate-100 rounded-lg p-4">
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Location</label>
              <input
                placeholder="Location"
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                {...register("location", { required: "Location is required" })}
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Mobile Number</label>
              <input
                type="tel"
                placeholder="+91"
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                {...register("mobileNumber", {
                  valueAsNumber: true,
                  required: "Mobile number is required",
                  pattern: {
                    value: /^\+91\d{10}$/,
                    message: "Invalid mobile number format",
                  },
                })}
              />
              {errors.mobileNumber && (
                <p className="text-red-500">{errors.mobileNumber.message}</p>
              )}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Age</label>
              <input
                type="number"
                placeholder="(18-50 years)"
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                {...register("age", {
                  required: "Age is required",
                  min: {
                    value: 18,
                    message: "Minimum age is 18",
                  },
                  valueAsNumber: true,
                  max: {
                    value: 50,
                    message: "Maximum age is 50",
                  },
                })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Gender</label>
              <select
                className="w-full p-1 px-2 bg-transparent rounded-2 border-1 border-[#dae3f0] text-xl text-[#95989d]"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Aadhar Card Image</label>

              <Controller
                name="aadharCardImage"
                control={control}
                render={({ field }) => <ImageUploader {...field} />}
              />
            </div>
          </div>
          <div className="w-full bg-slate-50 mt-8 flex justify-around">
            <div className="w-2/5 px-8">
              <div className="flex justify-between">
                <h1 className="text-2xl text-[#8883f0]">Medical History</h1>
                <div
                  className="relative h-8 w-8 rounded-full flex"
                  onClick={() =>
                    appendMedicalHistory({
                      condition: "",
                      diagnosisDate: "",
                      treatment: "",
                    })
                  }
                >
                  <img
                    className="h-full absolute hover:opacity-0 duration-100"
                    src={pluswhitephoto}
                  />
                  <img
                    className="h-full absolute hover:opacity-0 duration-100"
                    src={plusphoto}
                  />
                </div>
              </div>
              <hr className="w-full border-2 mt-4 relative -top-4"></hr>
              {medicalHistoryFields.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex flex-col m-0 mt-2 bg-slate-100 p-4 py-3 rounded-lg w-full"
                >
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Condition</label>
                    <input
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medicalHistory.${idx}.condition`, {
                        required: "Condition is required",
                      })}
                    />
                    {errors?.medicalHistory?.[idx]?.condition && (
                      <p className="text-red-500">
                        {errors?.medicalHistory?.[idx]?.condition?.message}
                      </p>
                    )}
                  </div>
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Diagnosis Date</label>
                    <input
                      type="date"
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medicalHistory.${idx}.diagnosisDate`, {
                        required: "Diagnosis date is required",
                        valueAsDate: true,
                      })}
                    />
                    {errors?.medicalHistory?.[idx]?.diagnosisDate && (
                      <p className="text-red-500">
                        {errors?.medicalHistory?.[idx]?.diagnosisDate?.message}
                      </p>
                    )}
                  </div>
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Treatment</label>
                    <input
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medicalHistory.${idx}.treatment`, {
                        required: "Treatment is required",
                      })}
                    />
                    {errors?.medicalHistory?.[idx]?.treatment && (
                      <p className="text-red-500">
                        {errors?.medicalHistory?.[idx]?.treatment?.message}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-[#8883f0] ml-auto removeunderline"
                    onClick={() => removeMedicalHistory(idx)}
                  >
                    Remove
                  </div>
                </div>
              ))}
            </div>
            <div className="w-2/5 px-8">
              <div className="flex justify-between">
                <h1 className="text-2xl text-[#8883f0]">Medication</h1>
                <div
                  className="relative h-8 w-8 rounded-full flex"
                  onClick={() =>
                    appendMedication({ name: "", dosage: "", frequency: "" })
                  }
                >
                  <img
                    className="h-full absolute hover:opacity-0 duration-100"
                    src={pluswhitephoto}
                  />
                  <img
                    className="h-full absolute hover:opacity-0 duration-100"
                    src={plusphoto}
                  />
                </div>
              </div>
              <hr className="w-full border-2 mt-4 relative -top-4"></hr>
              {medicationFields.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex flex-col m-0 mt-2 bg-slate-100 p-4 py-3 rounded-lg w-full"
                >
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Name</label>
                    <input
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medication.${idx}.name`, {
                        required: "Name is required",
                      })}
                    />
                    {errors?.medication?.[idx]?.name && (
                      <p className="text-red-500">
                        {errors?.medication?.[idx]?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Dosage</label>
                    <input
                      type="text"
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medication.${idx}.dosage`, {
                        required: "Dosage is required",
                      })}
                    />
                    {errors?.medication?.[idx]?.dosage && (
                      <p className="text-red-500">
                        {errors?.medication?.[idx]?.dosage?.message}
                      </p>
                    )}
                  </div>
                  <div className="my-2 w-full grid grid-cols-2 items-center">
                    <label className="text-xl">Frequency</label>
                    <input
                      type="text"
                      className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
                      {...register(`medication.${idx}.frequency`, {
                        required: "Frequency is required",
                      })}
                    />
                    {errors?.medication?.[idx]?.frequency && (
                      <p className="text-red-500">
                        {errors?.medication?.[idx]?.frequency?.message}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-[#8883f0] ml-auto removeunderline"
                    onClick={() => removeMedication(idx)}
                  >
                    Remove
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="m-8 ml-auto p-2 px-4 rounded-[30px] border-0 bg-[#8883f0] text-white font-normal">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
