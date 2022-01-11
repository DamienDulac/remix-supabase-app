import { LoaderFunction, Outlet, json, useLoaderData, redirect } from "remix";
import { Box } from "@mui/material";

export default function Index2() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        // alignContent: "stretch",
        backgroundColor: "red",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </Box>
  );
}
