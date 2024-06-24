import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './components/Homepage';
import Registration from './components/Registration';
import UserRegistration from './components/UserRegistration';
import CTRegistration from './components/CTRegistration';

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
