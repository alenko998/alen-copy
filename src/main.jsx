import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/Root.jsx";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllComponents from "./routes/AllComponents.jsx";
import SignInForm from "./forms/SignInForm.jsx";
import Buttons from "./routes/Buttons.jsx";
import ComboBox from "./components/ComboBox/index.jsx";
import Forms from "./routes/Forms.jsx";
import DataDisplay from "./routes/DataDisplay.jsx";
import Components from "./routes/Components.jsx";
import CoursesPage from './routes/CoursesPage';
import SidebarLayout from './layouts/SideBarLayout';
import SingleCoursePage from './routes/SingleCourse Routes/PoolManagement';
import ContentPage from './routes/SingleCourse Routes/Content';
import BasicInfoPage from './routes/SingleCourse Routes/BasicInfo';
import PoolManagementPage from './routes/SingleCourse Routes/PoolManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
  {
    path: "components",
    element: <Components/>,
    children: [
      {
        path: "all",
        element: <AllComponents/>,
      },
      {
        path: "buttons",
        element: <Buttons/>,
      },
      {
        path: "forms",
        element: <Forms/>,
      },
      {
        path: "data-display",
        element: <DataDisplay/>,
      },
    ]
  },
  {
    path: "sign-in",
    element: <SignInForm/>,
    errorElement: <ErrorPage/>,
    children: [],
  },
  {
    path: "courses",
    element: <CoursesPage/>,
  },
  {
    path: "pool-management",
    element: <PoolManagementPage/>,
  },
  {
    path: "content",
    element: <ContentPage/>,
  },
  {
    path: "basic-info/:id",
    element: <BasicInfoPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
