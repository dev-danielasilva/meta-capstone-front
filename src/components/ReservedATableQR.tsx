import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

export const ReservedATableQR: FC<{
  name: string;
  phone: string;
  guests: number;
  tables: number;
}> = ({ name, phone, guests, tables }) => {
  return (
    <Box
      sx={{
        pt: "90px !important",
        pb: 10,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant={"h1"}
          color={"text.primary"}
          fontSize="3em"
          fontWeight={"bold"}
        >
          Congratulations
        </Typography>
        <Typography variant={"h4"} color={"secondary"} mt={2}>
          Your table has been reserved
        </Typography>
        <Typography variant={"h6"} color={"text.primary"} mt={2}>
          Your table has been reserved by the name of:
        </Typography>
        <Typography variant={"h5"} color={"text.primary"} mt={2}>
          {name}
        </Typography>
        <Typography variant={"body2"} color={"text.primary"}>
          {phone}
        </Typography>
        <Typography variant={"h6"} color={"text.primary"} mt={2}>
          {tables} {tables > 1 ? "tables" : "table"} for {guests}{" "}
          {guests > 1 ? "guests" : "guest"}
        </Typography>
        <Typography variant={"body1"} color={"text.primary"} my={4}>
          Share this QR with your guests so the entrance will be faster
        </Typography>
        <img src={"/img/qr.png"} width={200} style={{ marginBottom: 32 }} />
        <Button
          href={"/home"}
          size={"large"}
          variant={"contained"}
          color={"secondary"}
          sx={{ textTransform: "none" }}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
};
