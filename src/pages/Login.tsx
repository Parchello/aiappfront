import { Box, Typography } from "@mui/material";

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
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"auto"}
        mt={16}
      >
        <form
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
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
