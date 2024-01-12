import { AppBar, Tab, Tabs } from "@mui/material";
import { useLocation, Link as RrdLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const PATHS = [
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/menu", label: "Menu" },
  { path: "/order-online", label: "Order Online" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <AppBar
      position={"fixed"}
      sx={{
        background: theme.palette.background.default,
        p: 2,
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <img src={"/img/color-logo.png"} width={150} />
      <Tabs value={pathname}>
        {PATHS.map((path) => {
          const isActive = pathname.includes(path.path);

          return (
            <Tab
              sx={{
                fontWeight: isActive ? "bold" : "",
                color: theme.palette.primary.main,
                textTransform: "capitalize",
              }}
              value={pathname.includes(path.path) ? pathname : path.path}
              label={path.label}
              key={path.path}
              component={RrdLink}
              to={path.path}
            />
          );
        })}
      </Tabs>
    </AppBar>
  );
}
