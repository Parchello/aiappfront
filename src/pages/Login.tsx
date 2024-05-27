import { Box, Button, Typography } from "@mui/material";
import { RiLoginBoxLine } from "react-icons/ri";
import CostomiseInput from "../components/shared/CostomiseInput/CostomiseInput";

function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={0} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img
          src="mainpageRobot.jpg"
          alt="main page robot"
          style={{ width: "400px", height: "700px" }}
        />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"auto"}
        mt={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              LOGIN
            </Typography>
            <CostomiseInput type="email" name="email" label="email" />
            <CostomiseInput type="password" name="password" label="password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<RiLoginBoxLine />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
