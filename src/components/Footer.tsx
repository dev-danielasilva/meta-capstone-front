import { Box, Container, Link, Typography } from "@mui/material";

const DOORMAT_NAVIGATION = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "Order Online", href: "/order-online" },
];
const CONTACT_INFO = [
  "21014 76th Ave W",
  "(55)555-5555-555",
  "hello@contact.com",
];
const SOCIAL_MEDIA_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Tiktok", href: "https://www.tiktok.com/" },
];

export default function Footer() {
  return (
    <Box sx={{ background: (theme) => theme.palette.primary.main, py: 10 }}>
      <Container maxWidth={"lg"}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <img
            // style={{ position: "absolute", top: 150, left: 800 }}
            src={"/img/footer.png"}
            width={200}
          />
          {/* Doormat Navigation */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant={"body1"}
              fontWeight={"bold"}
              color={(theme) => theme.palette.text.primary}
            >
              Doormat <br />
              Navigation
            </Typography>
            {DOORMAT_NAVIGATION.map((item, ix) => (
              <Link
                key={ix}
                href={item.href}
                variant="body2"
                sx={{ color: "white" }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          {/* Contact */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant={"body1"}
              fontWeight={"bold"}
              color={(theme) => theme.palette.text.primary}
            >
              Contact
            </Typography>
            {CONTACT_INFO.map((item, ix) => (
              <Typography key={ix} variant="body2" sx={{ color: "white" }}>
                {item}
              </Typography>
            ))}
          </Box>
          {/* Social Media Links */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant={"body1"}
              fontWeight={"bold"}
              color={(theme) => theme.palette.text.primary}
            >
              Social Media Links
            </Typography>
            {SOCIAL_MEDIA_LINKS.map((item, ix) => (
              <Link
                key={ix}
                href={item.href}
                variant="body2"
                sx={{ color: "white" }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
