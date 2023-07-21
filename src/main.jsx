import React, { useState } from 'react'
import Home from './Home.jsx'

import LoginG from './pages/Components/Login.jsx'
import Login from './AllLogin.jsx'
import * as ReactDOM from "react-dom/client";
import OwnersDetailedView from './pages/dashboard/Owner.jsx'
import UserDetailedView from './pages/dashboard//user.jsx'
import TrainersDetailedView from './pages/dashboard/trainer.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const InitializeApp = ({cas}) => {
  const [adBarState, setAdBarState] = useState(true);

  const [LocatorState, setGymLocator] = useState(false);

  const [loginstate, setLoginSate] = useState(false);

  const [userId, setuserId] = useState({
    photoUrl: "",
    fullName: "",
    lastName: "",
    firstName: "",
    email: "xxx",
  });
  const [currentSub, setcurrentSub] = useState(null);

  switch(cas) {
    case 1:
      return (<Home uid={userId} setuid={setuserId} loginstate={loginstate} />)
    case 2:
      return(<LoginG setTypeOfUser={1} uid={userId} setuid={setuserId}/>);
    case 3:
      return(<LoginG setTypeOfUser={2} uid={userId} setuid={setuserId}/>);
    case 4:
      return(<LoginG setTypeOfUser={3} uid={userId} setuid={setuserId}/>);
    case 5:
      return(<UserDetailedView user={userId}/>);
    case 6:
      return(<TrainersDetailedView user={userId}/>);
    case 7:
      return(<OwnersDetailedView user={userId}/>);
    default:
      return <div><h1>Error Occoured</h1></div>
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitializeApp cas={1}/>,
  },
  {
    path: "user",
    element: <InitializeApp cas={5}/>,
  },
  {
    path: "trainer",
    element: <InitializeApp cas={6}/>,
  },
  {
    path: "gym",
    element: <InitializeApp cas={7}/>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "login/gym",
    element: <InitializeApp cas={2}/>,
  },
  {
    path: "login/user",
    element: <InitializeApp cas={3}/>,
  },
  {
    path: "login/trainer",
    element: <InitializeApp cas={4}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




