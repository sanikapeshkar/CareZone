import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Homepage';
import Registration from './components/Registration';
import UserRegistration from './components/UserRegistration';
import CTRegistration from './components/CTRegistration';

import UserDashboard from './components/UserDashboard';
import AttendEvent from './components/userdashboard/AttendEvent';
import CreateEvent from './components/userdashboard/CreateEvent';
import Medication from './components/userdashboard/Medication';
import MyRequests from './components/userdashboard/MyRequests';
import HireCT from './components/userdashboard/HireCT';
import BasicDatePicker from './components/BasicDatePicker';
import BasicTimePicker from './components/BasicTimePicker';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/userregister",
      element: <UserRegistration />,
    },
    {
      path: "/ctregister",
      element: <CTRegistration />,
    },
    {
      path: "/userdashboard",
      element: <UserDashboard />,
    },
    {
      path: "/attendevent",
      element: <AttendEvent />,
    },
    {
      path: "/createevent",
      element: <CreateEvent />,
    },
    {
      path: "/hirect",
      element: <HireCT />,
    },
    {
      path: "/medication",
      element: <Medication />,
    },
    {
      path: "/myrequests",
      element: <MyRequests />,
    },
    {
      path: "/datepicker",
      element: <BasicDatePicker />,
    },
    {
      path: "/timepicker",
      element: <BasicTimePicker />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
