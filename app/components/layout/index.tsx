import AppBar from "~/components/ui/AppBar";
import { Box, Drawer } from "@mui/material";
import Sidebar from "~/components/ui/Sidebar";
import theme from "~/lib/theme/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        bgcolor: "gray",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: theme.palette.text.primary,
          padding: theme.spacing(2, 0, 3),
          borderRight: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          width: `calc(100% - ${240}px)`,
          position: "relative",
          backgroundColor: "white",
          height: "100vh",
          wrap: "nowrap",
          bgcolor: "purple",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexShrink: 1 }}>
          <AppBar logged={true} />
        </Box>
        <Box
          sx={{
            bgcolor: "red",
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            flex: "1 1 100%",
          }}
        >
          <Box className="container remix-app__main-content">{children}</Box>
        </Box>
        <Box
          sx={{
            bgcolor: "yellow",
            flexShrink: 1,
            justifyContent: "center",
            display: "flex",
            paddingTop: "2rem",
            paddingBottom: "1rem",
            borderTop: "1px solid black",
          }}
        >
          <Box>
            <p>
              &copy; You!{" "}
              {`This page was rendered at ${new Date().toLocaleString()}`}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
