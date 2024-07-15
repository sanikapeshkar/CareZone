import React from "react";
import { useForm } from "react-hook-form";

const CTRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // onSubmit form 
  function handleCitizenRegister(data) {
    console.log('on Register submit', data);
  }

  return (
    <div className="w-screeen p-8">
      <div className="w-full h-full border-2 border-[#95989d] rounded-[24px] p-8 flex flex-col items-center shadowboxer bg-slate-50">
        <h1 className="text-5xl text-center text-[#8883f0] font-semibold">
          Join Old Citizens: Embrace a community that cares!
        </h1>
        <hr className="w-[95%] border-2 mt-4"></hr>
        <form
          className="w-full mt-4 flex flex-col"
          onSubmit={handleSubmit(handleCitizenRegister)}
        >
          <div className="flex flex-col w-1/2 mx-auto bg-slate-100 rounded-lg p-4">
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Location</label>
              <input
                placeholder="Location"
                {...register("location", { required: "Location is required" })}
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
              ></input>
              {errors.location && <span className="text-red-500">{errors.location.message}</span>}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Mobile Number</label>
              <input
                type="number"
                {...register("phoneNo", { 
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid mobile number"
                  }
                })}
                placeholder="+91"
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
              ></input>
              {errors.phoneNo && <span className="text-red-500">{errors.phoneNo.message}</span>}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Age</label>
              <input
                type="number"
                {...register("age", { 
                  required: "Age is required",
                  min: { value: 18, message: "Minimum age is 18" },
                  max: { value: 50, message: "Maximum age is 50" }
                })}
                placeholder="(18-50 years)"
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
              ></input>
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Gender</label>
              <select
                className="w-full p-1 px-2 bg-transparent rounded-2 border-1 border-[#dae3f0] text-xl text-[#95989d]"
                {...register("gender", { required: "Gender is required" })}
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>
            <div className="my-2 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Aadhar Card Image</label>
              <button className="rounded-xl p-2 px-4 bg-[#8883f0] text-white">
                Upload Image
              </button>
            </div>
            <div className="my-3 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Work Experience</label>
              <input
                type="number"
                placeholder="in years"
                {...register("experience", { required: "Experience is required" })}
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
              ></input>
              {errors.experience && <span className="text-red-500">{errors.experience.message}</span>}
            </div>
            <div className="my-3 w-full grid grid-cols-2 items-center">
              <label className="text-xl">Services Provided</label>
              <input
                placeholder="comma separated"
                {...register("services", { required: "Services provided is required" })}
                className="rounded-2 border-1 border-[#dae3f0] p-1 px-2 bg-transparent"
              ></input>
              {errors.services && <span className="text-red-500">{errors.services.message}</span>}
            </div>
          </div>
          <button
            className="mx-auto mt-8 p-2 px-4 rounded-[30px] border-0 bg-[#8883f0] text-white text-xl font-normal"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTRegistration;
