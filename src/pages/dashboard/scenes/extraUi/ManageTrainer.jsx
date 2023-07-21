import { Box, Typography, useTheme, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockTrainerData, attendance } from "../../data/mockData";
import Header from "../../components/Header";
import React, { useState } from "react";
import MyResponsiveCalendar from "../attendance/index"
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const ManageTrainer = () => {
  const [open, setOpen] = useState(false);
  const[trainerDialoge, setTrainerOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "charges",
      headerName: "Charges/Day",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ₹{params.row.charges}
        </Typography>
      ),
    },
    {
      field: "join_date",
      headerName: "Join Date",
      flex: 1,
    },
    {
        field: "review",
        headerName: "Review",
        flex: 1,
      },
      {
        field: "shift_start",
        headerName: "Shift Start",
        flex: 1,
      },
  ];

  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="TRAINERS" subtitle="List of Trainers" />
      <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {setTrainerOpen(true)}}
          >
            {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
            Add Trainer
          </Button>
          </Box>
          <Dialog open={trainerDialoge} onClose={()=>{setTrainerOpen(false)}} >
        <DialogTitle>Add Trainer Details</DialogTitle>
        <DialogContent>
          <Box title="Add Trainer Details"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="190px"
          gap="10px"
          >
            <DialogeForm />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={()=>{setTrainerOpen(false)}}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
        </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid onRowClick={()=>{setOpen(true)}} rows={mockTrainerData} columns={columns} />
        
        <Dialog open={open} onClose={()=>{setOpen(false)}} >
        <DialogTitle>Trainer Details</DialogTitle>
        <DialogContent>
          <Box title="Trainer Details"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          >
            <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p="30px"
        ><Typography>Name: </Typography></Box>
            
            <Typography>Phone Number: </Typography>
            <Typography>Email: </Typography>
            <Typography>Charges/Day: </Typography>
            <Typography>Join Date: </Typography>
            <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"><Typography>Attendance: </Typography></Box>
          <MyResponsiveCalendar data={attendance} />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={()=>{setOpen(false)}}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
        
      </Box>
    </Box>
  );
};


function DialogeForm () {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="TRAINER PROFILE" subtitle="Trainer Name" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="90px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Middle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="middleName"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <Select 
              label="Gender"
              onChange={handleChange}
              sx={{ gridColumn: "span 2" }}
              value={values.gender}
              name="gender"
              error={!!touched.gender && !!errors.gender}
              helperText={touched.gender && errors.gender}
              >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
                <MenuItem value={3}>Other</MenuItem>
              </Select>
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Pin"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.pin}
              name="pin"
              error={!!touched.pin && !!errors.pin}
              helperText={touched.pin && errors.pin}
              sx={{ gridColumn: "span 2" }}
            />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Start At"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.open_at}
                name="open_at"
                error={!!touched.open_at && !!errors.open_at}
                helperText={touched.open_at && errors.open_at}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="End At"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.close_at}
                name="close_at"
                error={!!touched.close_at && !!errors.close_at}
                helperText={touched.close_at && errors.close_at}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="GSTN No."
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.GSTN}
                name="GSTN"
                error={!!touched.GSTN && !!errors.GSTN}
                helperText={touched.GSTN && errors.GSTN}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" disabled={false}>
                SAVE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  city: yup.string().required("required"),
  address: yup.string().required("required"),
  pin: yup.string().required("required"),
  gym_name: yup.string().required("required"),
  gender: yup.string().required("required"),
  open_at: yup.string().required("required"),
  close_at: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  contact: "",
  city: "",
  address: "",
  pin: "",
  gym_name: "",
  gender: "",
  open_at: "",
  close_at: "",
  GSTN: "",
};

export default ManageTrainer;

