
import { ResponsiveCalendar } from '@nivo/calendar'
import { useTheme } from "@mui/material";
import { tokens } from '../../theme';




const MyResponsiveCalendar = ({ data /* see data tab */ }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <ResponsiveCalendar
        data={data}
        from="2023-04-22"
        to="2023-07-21"
        emptyColor="#dbdbdb"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={45}
        yearLegendOffset={12}
        monthSpacing={10}
        monthBorderWidth={0}
        monthBorderColor="#ffffff"
        dayBorderColor="#ffffff"
        isInteractive={false}
        height={90}
        width={300}
        
    />
)}

export default MyResponsiveCalendar;