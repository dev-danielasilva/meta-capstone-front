import { Box, Button, Container, Typography } from "@mui/material";
import { IMenuItem, MenuCard } from "../MenuCard";

const SPECIALS: IMenuItem[] = [
  {
    id: 1,
    image: "/img/recipes/salad-ceasar.png",
    label: "Salad Ceasar",
    price: "$12.30",
    description:
      "Savor the classic Caesar Salad – crisp romaine, creamy Caesar dressing, Parmesan, and golden croutons for a delightful, timeless bite.",
  },
  {
    id: 2,
    image: "/img/recipes/bruschetta.png",
    label: "Bruschetta",
    price: "$35.20",
    description:
      "Enjoy the perfect bite of simplicity with our Bruschetta – toasted bread topped with ripe tomatoes, fresh basil, and a hint of garlic, all kissed with olive oil.",
  },
  {
    id: 3,
    image: "/img/recipes/lemon-dessert.png",
    label: "Lemon Dessert",
    price: "$10.20",
    description:
      "Sweeten your taste buds with Lemon Delight. This zesty dessert is a burst of citrusy goodness, combining tangy and sweet flavors for a refreshing finale.",
  },
];

export default function Specials() {
  return (
    <Container maxWidth="lg" sx={{ mt: "90px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={(theme) => theme.palette.primary.main}
        >
          Specials
        </Typography>
        <Button
          size={"large"}
          color={"primary"}
          variant="contained"
          sx={{
            textTransform: "none",
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          Online Menu
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          pb: 10,
        }}
      >
        {SPECIALS.map((spc, ix) => (
          <MenuCard key={ix} menuItem={spc} />
        ))}
      </Box>
    </Container>
  );
}
