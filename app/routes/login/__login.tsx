import { Outlet } from "remix";
import { Grid, Container, Box, Typography } from "@mui/material";
import ConnectionIcon from "~/components/ui/icons/Connection";

export default function Index2() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        //justifyContent: "center",
      }}
    >
      <Grid
        item
        container
        xs={4}
        sx={{
          backgroundColor: "#FF6B6B",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Typography variant="h1" sx={{ color: "white" }}>
            Welcome Back !
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ mt: 2, color: "white" }}>
            Enter your personnal data and start to use dashboard
          </Typography>
        </Grid>
        <Grid item>
          <ConnectionIcon />
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        xs={8}
      >
        <Outlet />
      </Grid>
    </Box>
  );
}
