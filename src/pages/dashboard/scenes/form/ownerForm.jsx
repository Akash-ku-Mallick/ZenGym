import { Box, Button, TextField, Select, MenuItem  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


// owner form 

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="EDIT OWNER PROFILE" subtitle="Complete your Profile" />

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
              gap="30px"
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
                <MenuItem value={3}>Others</MenuItem>
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
                label="Gym Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gym_name}
                name="gym_name"
                error={!!touched.gym_name && !!errors.gym_name}
                helperText={touched.gym_name && errors.gym_name}
                sx={{ gridColumn: "span 3" }}
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
                label="Open At"
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
                label="Close At"
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

export default Form;
