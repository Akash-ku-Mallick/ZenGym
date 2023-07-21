import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/OwnerSidebar";
import OwnerDashboard from "./scenes/dashboard/indexOwner.jsx";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form/ownerForm";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import './index.css'
import { useEffect } from "react";
import OwnerProfile from "./scenes/profile/owner";
import SettingsUI from "./scenes/settingui";
import LogoutUI from "./scenes/logout";
import ManageTrainer from "./scenes/extraUi/ManageTrainer";
import { useParams } from "react-router-dom";
import EquipmentSts from "./scenes/extraUi/Equipment";


// main function

function OwnersDetailedView({user}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [ele, setEle] = useState(0);

  const parm = useParams();
  const {email} = parm;
  console.log(email);


  const router = {
    0:<OwnerDashboard />,
    1:<OwnerProfile setEle={setEle}/>,
    2:<Contacts />,
    3:<Invoices />,
    4:<Form />,
    5:<Bar />,
    6:<Pie />,
    7:<Line />,
    8:<FAQ />,
    9:<Calendar />,
    10:<SettingsUI />,
    11:<LogoutUI />,
    12:<ManageTrainer />,
    13:<EquipmentSts />
}

  function ReturnEle () {
    return router[ele];
  }

  useEffect(() => {ReturnEle(); console.log(ele)}, [ele])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} setElement={setEle} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <ReturnEle />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default OwnersDetailedView;
