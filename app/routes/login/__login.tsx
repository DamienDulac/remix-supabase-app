import { Outlet } from "remix";
import { Grid, Container, Box } from "@mui/material";

export default function Index2() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </Box>
  );
}
