import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";

export interface IMenuItem {
  id: number;
  image: string;
  label: string;
  price: string;
  description: string;
}

export const MenuCard: FC<{ menuItem: IMenuItem }> = ({ menuItem }) => {
  const { image, label, price, description } = menuItem;
  return (
    <Card raised sx={{ maxWidth: 300, minHeight: 20 }}>
      <CardMedia sx={{ height: 250 }} image={image} title={label} />
      <CardContent sx={{ m: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h6" fontWeight={"light"}>
            {label}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color={(theme) => theme.palette.warning.light}
            fontWeight={"light"}
          >
            {price}
          </Typography>
        </Box>
        <Typography variant="body1" mt={2} fontWeight={"light"}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ m: 1 }}>
        <Button
          size="medium"
          color={"secondary"}
          sx={{ fontWeight: "bold" }}
          endIcon={<PersonIcon />}
        >
          Order Delivery
        </Button>
      </CardActions>
    </Card>
  );
};
