import { Box, Container } from "@mui/material";
import Hero from "../../components/sections/Hero";
import Specials from "../../components/sections/Specials";
import Testimonials from "../../components/sections/Testimonials";

export default function Home() {
  return (
    <Box sx={{ mt: "90px !important", p: 0 }}>
      <Hero />
      <Specials />
      <Testimonials />
      {/* <About /> */}
    </Box>
  );
}
