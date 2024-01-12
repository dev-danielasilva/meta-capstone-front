import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function BaseLayout() {
  return (
    <Container maxWidth={"xl"} sx={{ p: "0px !important" }}>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
}
