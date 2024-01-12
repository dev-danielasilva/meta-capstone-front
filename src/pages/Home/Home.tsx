import { Box } from "@mui/material";
import Hero from "../../components/sections/Hero";
import Specials from "../../components/sections/Specials";
import Testimonials from "../../components/sections/Testimonials";
import About from "../../components/sections/About";

export default function Home() {
  return (
    <Box sx={{ mt: "90px !important", p: 0 }}>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </Box>
  );
}
