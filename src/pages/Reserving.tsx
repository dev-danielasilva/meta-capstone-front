import {
  Box,
  Button,
  Container,
  IconButton,
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
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import dayjs from "dayjs";
import { useState } from "react";
import { ReservedATableQR } from "../components/ReservedATableQR";

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  input: { color: "black" },
  "& .MuiFormLabel-root": { color: "rgb(0 0 0 / 35%)" },
  "& .Mui-disabled": { "-webkit-text-fill-color": "black !important" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(0 0 0 / 35%) !important",
    "&.hover": { borderColor: "rgb(0 0 0 / 35%) !important" },
  },
}));

const initialValues = {
  name: "",
  phone: "",
  dateTime: dayjs(),
  guests: 1,
  tables: 1,
};
export default function Reserving() {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const phoneRegExp = /^[(]?[0-9]{3}[)]?[-.]?[0-9]{3}[-.]?[0-9]{4,6}$/im;

  const validationSchema = Yup.object({
    name: Yup.string().required("You must provide a name for the reservation"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("You must provide a phone number"),
    dateTime: Yup.date().required(
      "You must provide a date and a time to reserve a table."
    ),
    guests: Yup.number().min(1).max(12).required(),
    tables: Yup.number().min(1).max(2).required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        console.log("hey!!!");
        console.log("values", values);

        setShowSummary(true);
        // setSubmitting(false);
      } catch (error) {
        console.error(error);
        // setErrors(error)
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    values,
    setFieldValue,
  } = formik;

  const handleGuests = (isSum: boolean) => {
    if (isSum) {
      if (values.guests < 12) {
        setFieldValue("guests", values.guests + 1);
      }
    } else {
      if (values.guests > 1) {
        setFieldValue("guests", values.guests - 1);
      }
    }
  };

  return showSummary ? (
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
            {...getFieldProps("phone")}
            type="text"
            label="Contact"
            placeholder="(55) 555-555"
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 1 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <MobileDateTimePicker
                // sx={{ mb: 1 }}
                label="Date & Time"
                {...getFieldProps("dateTime")}
                onChange={(value) => setFieldValue("dateTime", value)}
                disablePast
                minTime={values.dateTime.set("hour", 9).startOf("hour")}
                maxTime={values.dateTime.set("hour", 22).startOf("hour")}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    // helperText: touched.dateTime && errors.dateTime, //eslint-disable-line
                    error: Boolean(touched.dateTime && errors.dateTime),
                    placeholder: "MM/DD/YYYY hh:mm aa",
                    sx: {
                      input: { color: "black" },
                      "& .MuiFormLabel-root": { color: "rgb(0 0 0 / 35%)" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(0 0 0 / 35%) !important",
                        "&.hover": {
                          borderColor: "rgb(0 0 0 / 35%) !important",
                        },
                      },
                    },
                    InputLabelProps: { shrink: true },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Typography variant={"h5"} color={"primary"} mt={1} mb={2}>
            Guests
          </Typography>
          {values.guests >= 12 && (
            <Typography variant={"caption"} sx={{ color: "gray" }}>
              **You can reserve for only 12 guests. If you're interested in a
              party please phone us.
            </Typography>
          )}
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
              {...getFieldProps("guests")}
              type="number"
              disabled
              error={Boolean(touched.guests && errors.guests)}
              helperText={touched.guests && errors.guests}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 1, maxWidth: "100px" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {values.guests < 12 && (
              <IconButton
                color={"primary"}
                size="small"
                onClick={() => handleGuests(true)}
              >
                <PersonAddIcon />
              </IconButton>
            )}
            {new Array(values.guests).fill(1).map((_, ix) => (
              <PersonIcon
                key={ix}
                color={"secondary"}
                sx={{ cursor: values.guests > 1 ? "pointer" : "default" }}
                onClick={() => handleGuests(false)}
              />
            ))}
          </Box>

          {/* ---------------------- Guests ----------------------- */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            {values.tables > 1 && (
              <IconButton
                color={"primary"}
                size="small"
                onClick={() => setFieldValue("tables", 1)}
              >
                <ArrowLeftIcon />
              </IconButton>
            )}
            <StyledTextField
              size={"small"}
              {...getFieldProps("tables")}
              type="number"
              disabled
              error={Boolean(touched.tables && errors.tables)}
              helperText={touched.tables && errors.tables}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 1, maxWidth: "60px" }}
            />
            {values.tables < 2 && values.guests > 3 && (
              <IconButton
                color={"primary"}
                size="small"
                onClick={() => setFieldValue("tables", 2)}
              >
                <ArrowRightIcon />
              </IconButton>
            )}
            <Typography variant={"body2"} sx={{ color: "gray" }}>
              Tables
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 10 }}>
            <Button
              href={"/home"}
              size="large"
              variant="outlined"
              type={"submit"}
              color={"error"}
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
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
  ) : (
    <ReservedATableQR
      name={values.name}
      phone={values.phone}
      guests={values.guests}
      tables={values.tables}
    />
  );
}
