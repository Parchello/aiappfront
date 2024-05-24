import { Box } from "@mui/material";

function Login() {
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={0} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img
          src="mainpageRobot.jpg"
          alt="main page robot"
          style={{ width: "400px", height: "700px" }}
        />
      </Box>
      <Box>12345</Box>
    </Box>
  );
}

export default Login;
