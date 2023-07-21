import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import Edit from '@mui/icons-material/edit';

//  profile

export default function OwnerProfile({setEle, user}) {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="OWNER PROFILE" subtitle={"Complete your Profile"||"Your Profile"} />
      <Box>
         <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {setEle(4)}}
          >
            <Edit sx={{ mr: "10px" }} />
            Edit
          </Button>
          </Box>
        </Box>
        <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="70px"
        gap="20px">
        
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Name</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"Name In Complete"}</Typography>
          </Box>
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>DOB</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"xx/x/x"}</Typography>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Email</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"Email In Complete"}</Typography>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Contact</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"Contact In Complete"}</Typography>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>City</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"City"}</Typography>
          </Box>
          
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Gym Name</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"X Gym"}</Typography>
          </Box>
          
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Address</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"Address1"}</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"Address2"}</Typography>
          </Box>
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Pin Code</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"xxxxx"}</Typography>
          </Box>
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>GSTN No</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"xx-xxx"}</Typography>
          </Box>
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Open At</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"xx-xxx"}</Typography>
          </Box>
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center">
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>Close At</Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "0px 0px 0px 15px" }}>{"xx-xxx"}</Typography>
          </Box>
        </Box>
    </Box>
        
  )
}