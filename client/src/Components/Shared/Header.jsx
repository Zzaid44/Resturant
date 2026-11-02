import { AppBar, Box, IconButtyon, Toolbar } from "@mui/material";

export default function Header() {
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
            <IconButtyon>Home</IconButtyon>
            <IconButtyon>Products</IconButtyon>
            <IconButtyon>Login</IconButtyon>
            <IconButtyon>Register</IconButtyon>
            <IconButtyon>About</IconButtyon>
            <IconButtyon>Contact</IconButtyon>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
