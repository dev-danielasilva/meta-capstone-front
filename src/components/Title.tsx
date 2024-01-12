import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Title: FC<{ color: string }> = ({ color }) => {
  return (
    <Box>
      <Typography variant="h1" fontSize="3em" fontWeight={"bold"} color={color}>
        Little Lemon
      </Typography>
      <Typography
        variant="h6"
        fontWeight={"light"}
        lineHeight={"0.5"}
        color={color}
      >
        Chicago
      </Typography>
    </Box>
  );
};
