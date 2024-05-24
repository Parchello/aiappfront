import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo/Logo.tsx";
import { useAuth } from "../context/AuthContext.tsx";
import NaivgationLink from "./shared/NavigationLink/NavigationLink.tsx";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NaivgationLink
                bg="#00fffc"
                to="/chat"
                text="Go to chat"
                textColor="black"
              />
              <NaivgationLink
                bg="51538f"
                to="/"
                text="Logout"
                textColor="white"
                onCklick={auth.logout}
              />
            </>
          ) : (
            <>
              <NaivgationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NaivgationLink
                bg="51538f"
                to="/signup"
                text="Signup"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
