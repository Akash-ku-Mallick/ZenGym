import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/TrainerSidebar";
import TrainerDashboard from "./scenes/dashboard/indexTrainer";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form/trainerForm";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import './index.css'
import TrainerProfile from "./scenes/profile/trainer";
import SettingsUI from "./scenes/settingui";
import LogoutUI from "./scenes/logout";
import { useParams } from "react-router-dom";
import { db } from "../../database/firebase";
import { collection, getDoc } from "firebase/firestore";
import ReviewDashboard from "./scenes/extraUi/ReviewDashboard";
import MyResponsiveCalendar from "./scenes/attendance/index";
import { attendance } from "./data/mockData";






function TrainersDetailedView(user) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [ele, setEle] = useState(0);

  const parm = useParams();
  const {email} = parm;
  console.log(email);

  console.log(user)


  

  const router = {
    0:<TrainerDashboard />,
    1:<TrainerProfile setEle={setEle} user={user}/>,
    2:<Contacts />,
    3:<Invoices />,
    4:<Form user={user}/>,
    5:<Bar />,
    6:<Pie />,
    7:<Line />,
    8:<FAQ />,
    9:<Calendar />,
    10:<LogoutUI user={user}/>,
    11: <SettingsUI />,
    12:<ReviewDashboard />,
    13:<MyResponsiveCalendar data={attendance}/>
}


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar user={user} isSidebar={isSidebar} setElement={setEle} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {router[ele]}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default TrainersDetailedView;
