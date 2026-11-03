import { AppBar, Box, IconButtyon, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigat = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 3,
            bgcolor: "violet",
          }}
        >
          <IconButtyon variant="h2">Logo</IconButtyon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <IconButtyon onClick={() => navigat("/")}>Home</IconButtyon>
            <IconButtyon onClick={() => navigat("/products")}>
              Products
            </IconButtyon>
            <IconButtyon onClick={() => navigat("/login")}>
              Login
            </IconButtyon>
            <IconButtyon onClick={() => navigat("/register")}>
              Register
            </IconButtyon>
            <IconButtyon>About</IconButtyon>
            <IconButtyon>Contact</IconButtyon>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
