import React, { useContext, useEffect, useState } from "react";
import CTSidebar from "./CTSidebar";
import { CustomerData } from "./CustomerData";
import { CTProfileData } from "./CTProfileData";
import careTakerService from "../../services/CareTaker.service";
import { CTContext } from "./CTContext";

const CTDashboard = () => {
  const [dashboardData, setdashboardData] = useState();
  // Calculate total customers
  const totalCustomers = CustomerData.length;

  // Calculate current customers
  const currentCustomers = CustomerData.filter(
    (customer) => customer.iscurrent
  ).length;

  // Calculate average rating
  const reviews = CTProfileData[0].ctreviews;
  const totalReviews = reviews.length;
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  const { state, getDashboardData } = useContext(CTContext);

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div className="w-screen">
      <div className="w-4/5 ml-auto p-4">
        <h1 className="text-4xl font-semibold text-[#8883f0] mt-3">
          Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <div className="flex flex-col items-center">
            <h1 className="w-full bg-[#8883f0] text-white font-semibold text-center rounded-2 py-2 text-2xl">
              Total Customers
            </h1>
            <h1 className="text-[150px] w-full rounded-2 mt-1 bg-slate-50 text-center">
              {state.dashboardData ? state.dashboardData.activeAppointments : 0}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="w-full bg-[#8883f0] text-white font-semibold text-center rounded-2 py-2 text-2xl">
              Current Customers
            </h1>
            <h1 className="text-[150px] w-full rounded-2 mt-1 bg-slate-50 text-center">
              {state.dashboardData ? state.dashboardData.totalAppointments : 0}
            </h1>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <h1 className="w-full bg-[#8883f0] text-white font-semibold text-center rounded-2 py-2 text-2xl">
              Average Rating
            </h1>
            <h1 className="text-[150px] w-full rounded-2 mt-1 bg-slate-50 text-center">
              {state.dashboardData
                ? state.dashboardData.averageRating.toFixed(1)
                : 0}
              /5
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTDashboard;
