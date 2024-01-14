import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Title } from "../Title";

export default function Hero() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
      <Container
        maxWidth={"lg"}
        sx={{
          mt: "90px !important",
          pb: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={5} sx={{ mt: 5 }}>
            <Title color={theme.palette.text.primary} />
            <Typography
              variant="h6"
              color={"text.primary"}
              fontWeight={"light"}
              lineHeight={"1.2"}
              my={5}
            >
              Cozy Italian spot in Chicago, blending fresh local ingredients for
              an authentic taste of Italy.
            </Typography>
            <Button
              href="/reservations"
              color={"secondary"}
              variant={"contained"}
              size={"large"}
              sx={{
                textTransform: "none",
                color: (theme) => theme.palette.primary.main,
                mt: 5,
              }}
            >
              Reserver a Table
            </Button>
          </Grid>
          <Grid item xs={7} sx={{ position: "relative" }}>
            <img
              style={{ position: "absolute", top: 100, left: 150 }}
              src={"/img/hero-image.png"}
              width={"500px"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
