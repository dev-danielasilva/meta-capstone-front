import { Container, Grid, Typography, useTheme } from "@mui/material";
import { Title } from "../Title";

export default function About() {
  const theme = useTheme();
  return (
    <Container maxWidth="md" sx={{ my: 5, pb: 10 }}>
      <Grid container>
        <Grid item xs={6}>
          <Title color={theme.palette.primary.main} />
          <Typography
            variant="h6"
            color={"primary"}
            fontWeight={"light"}
            lineHeight={"1.2"}
            my={5}
          >
            Little Lemon, tucked away in Chicago, offers a cozy retreat into
            authentic Italian flavors. With a warm and inviting ambiance, this
            charming spot seamlessly blends fresh, local ingredients to create a
            delightful taste of Italy.
            <br />
            <br />
            Whether you're indulging in their renowned lemon-infused specialties
            or savoring classic dishes, Little Lemon promises a memorable dining
            experience in the heart of the city.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ position: "relative" }}>
          <img
            style={{ position: "absolute", top: 20, left: 50 }}
            src="/img/about/about-1.png"
            width={"250px"}
          />
          <img
            style={{ position: "absolute", top: 280, left: 100 }}
            src="/img/about/about-2.png"
            width={"250px"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
