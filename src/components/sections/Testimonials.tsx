import { Box, Container, Typography } from "@mui/material";
import { TestimonialCard } from "../TestimonialCard";

const TESTIMONIALS = [
  {
    id: 1,
    avatar: "/img/avatar/emma.png",
    name: "Emma M.",
    timeAgo: "15min",
    stars: 5,
    comment:
      "Little Lemon exceeded my expectations! The Lemon Delight dessert is a true masterpiece—zesty and sweet perfection. The staff is friendly, and the attention to detail in every dish is impeccable. Definitely my favorite spot in town, five stars all the way!",
  },
  {
    id: 2,
    avatar: "/img/avatar/carlos.png",
    name: "Carlos R. ",
    timeAgo: "1 month",
    stars: 5,
    comment:
      "I can't get enough of Little Lemon's Bruschetta! It's the perfect blend of freshness and simplicity. The ambiance is warm and inviting, making it a go-to spot for authentic Italian flavors. Five stars for an exceptional dining experience!",
  },
  {
    id: 3,
    avatar: "/img/avatar/sophie.png",
    name: "Sophie L.",
    timeAgo: "1 year",
    stars: 5,
    comment:
      "Little Lemon exceeded my expectations! The Lemon Delight dessert is a true masterpiece—zesty and sweet perfection. The staff is friendly, and the attention to detail in every dish is impeccable. Definitely my favorite spot in town, five stars all the way!",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ background: (theme) => theme.palette.primary.main }} pb={20}>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={"h4"}
          color={"text.primary"}
          textAlign={"center"}
          mt={20}
          mb={10}
        >
          Testimonials
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          {TESTIMONIALS.map((tst, ix) => (
            <TestimonialCard key={ix} testimonial={tst} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
