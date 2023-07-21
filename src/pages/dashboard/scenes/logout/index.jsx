import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Logout from "@mui/icons-material/Logout";
import Header from "../../components/Header";

export default function LogoutUI() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LOG OUT"/>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          gridRow= "span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={2}
        >
        </Box>
    </Box>
    </Box>
  )
}
