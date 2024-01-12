import {
  Box,
  Button,
  Container,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { Form, FormikProvider, useFormik } from "formik";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as Yup from "yup";

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  input: { color: "black" },
  "& .MuiFormLabel-root": { color: "rgb(0 0 0 / 35%)" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(0 0 0 / 35%) !important",
    "&.hover": { borderColor: "rgb(0 0 0 / 35%) !important" },
  },
  "& .MuiOutlinedInput-root": {
    borderColor: "rgb(0 0 0 / 35%) !important",
    "&.hover": { borderColor: "rgb(0 0 0 / 35%) !important" },
  },
}));

// "& .MuiFormLabel-root": { color: "rgb(0 0 0 / 35%)" },

const initialValues = {
  name: "",
  contact: "",
  title: "",
  dateTime: null,
  numGuests: 1,
  tables: "",
  selectedTable: "",
};
export default function Reserving() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("You must provide a name for the reservation"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    dateTime: Yup.date().default(() => new Date()),
    numGuests: Yup.number().min(1).max(10).required(),
    tables: Yup.number().min(1).max(2).required(),
    selectedTable: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        console.log("hey!!!");
        console.log("values", values);
        // setSubmitting(false);
      } catch (error) {
        console.error(error);
        // setErrors(error)
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps, values } = formik;

  console.log("values", values);

  return (
    <Container maxWidth={"lg"} sx={{ mt: "90px !important", pb: 10 }}>
      <Typography variant={"h1"} fontSize="3em" color={"primary"}>
        Reserving a Table
      </Typography>
      <Typography
        variant={"h3"}
        fontSize="2em"
        color={"secondary"}
        lineHeight={0.5}
      >
        @ Little Lemon Chicago
      </Typography>
      <Typography variant={"h5"} color={"primary"} mt={5} mb={2}>
        Details
      </Typography>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            autoFocus
            {...getFieldProps("name")}
            type="text"
            label="Name for reservation"
            placeholder="First and Last Name"
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 1 }}
          />

          <StyledTextField
            fullWidth
            {...getFieldProps("contact")}
            type="text"
            label="Contact"
            placeholder="(55) 555-555"
            error={Boolean(touched.contact && errors.contact)}
            helperText={touched.contact && errors.contact}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 1 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <MobileDateTimePicker
                // sx={{ mb: 1 }}
                label="Date & Time"
                {...getFieldProps("dateTime")}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    helperText: touched.contact && errors.contact,
                    error: Boolean(touched.contact && errors.contact),
                    placeholder: "MM/DD/YYYY hh:mm aa",
                    sx: {
                      input: { color: "black" },
                      "& .MuiFormLabel-root": { color: "rgb(0 0 0 / 35%)" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(0 0 0 / 35%)",
                        "&.hover": { borderColor: "rgb(0 0 0 / 35%)" },
                      },
                    },
                    InputLabelProps: { shrink: true },
                  },
                }}
                // error={Boolean(touched.contact && errors.contact)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Typography variant={"h5"} color={"primary"} mt={1} mb={2}>
            Guests
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant={"body2"} sx={{ color: "gray" }}>
              Number of guests
            </Typography>
            <StyledTextField
              size={"small"}
              {...getFieldProps("numGuests")}
              type="number"
              error={Boolean(touched.numGuests && errors.numGuests)}
              helperText={touched.numGuests && errors.numGuests}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 1 }}
            />
          </Box>
          <StyledTextField
            fullWidth
            {...getFieldProps("tables")}
            type="number"
            label="Tables"
            error={Boolean(touched.tables && errors.tables)}
            helperText={touched.tables && errors.tables}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 1 }}
          />

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              type={"submit"}
              color={"error"}
              onClick={() => handleSubmit()}
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              size="large"
              variant="contained"
              type={"submit"}
              onClick={() => handleSubmit()}
              sx={{ textTransform: "none" }}
            >
              Reserve Now!
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </Container>
  );
}
