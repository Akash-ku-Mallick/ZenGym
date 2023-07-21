import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";



export default function SettingsUI() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SETTINGS" />
        <Box
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          gridAutoRows="70px"
          gap="20px"
        >
          
        </Box>
      </Box>
    </Box>
  );
}
