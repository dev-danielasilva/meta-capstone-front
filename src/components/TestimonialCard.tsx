import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import StarIcon from "@mui/icons-material/Star";

interface ITestimonial {
  id: number;
  avatar: string;
  name: string;
  timeAgo: string;
  stars: number;
  comment: string;
}
export const TestimonialCard: FC<{ testimonial: ITestimonial }> = ({
  testimonial,
}) => {
  const { avatar, name, timeAgo, stars, comment } = testimonial;

  return (
    <Card sx={{ background: (theme) => theme.palette.background.default }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Avatar alt={name} src={avatar} sx={{ width: 75, height: 75 }} />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
              <Typography variant="h6" color={"primary"} fontWeight={"bold"}>
                {name}
              </Typography>
              <Typography
                variant="body2"
                color={"secondary"}
                fontWeight={"bold"}
              >
                {new Array(stars).fill(1).map((_, ix) => (
                  <StarIcon key={ix} />
                ))}
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color={"primary"}>
            {timeAgo}
          </Typography>
        </Box>
        <Typography variant="body2" color={"primary"} mt={2}>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};
