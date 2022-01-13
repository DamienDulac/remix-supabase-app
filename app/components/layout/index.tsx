import AppBar from "~/components/ui/AppBar";
import { Box, Drawer, Grid, Container } from "@mui/material";
import Sidebar from "~/components/ui/Sidebar";
import theme from "~/lib/theme/theme";

const styles = {
  root: {
    display: "flex",
    // overflow: "hidden",
    background: `linear-gradient(90deg, #001944 50%, #FFF 0)`,
    width: "100vw",
    height: "100vh",
  },
  content: {
    padding: theme.spacing(3),
    position: "relative",
    backgroundColor: "white",
    height: "100vh",
  },
  height: {
    height: "100%",
    // overflowY: "auto",
    // overflowX: "hidden",
  },
};

export default function Layout({
  children,
  logged,
}: {
  children: React.ReactNode;
  logged: boolean;
}) {
  return (
    <Box sx={styles.root}>
      <Sidebar />
      <Container component="section" maxWidth={false} sx={styles.content}>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          spacing={0}
          sx={styles.height}
        >
          <AppBar logged={logged} username="Damien" />
          <Grid
            item
            container
            wrap="nowrap"
            direction="column"
            sx={styles.height}
          >
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>

    // <Box
    //   sx={{
    //     display: "flex",
    //     overflow: "hidden",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <Drawer
    //     variant="permanent"
    //     sx={{
    //       width: 240,
    //       height: "100vh",
    //       overflow: "hidden",
    //       backgroundColor: theme.palette.text.primary,
    //       padding: theme.spacing(2, 0, 3),
    //       borderRight: 0,
    //     }}
    //   />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       width: `calc(100% - ${240}px)`,
    //       position: "relative",
    //       height: "100vh",
    //       flexWrap: "nowrap",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <Box sx={{ display: "flex", flexShrink: 1 }}>
    //       <AppBar logged={logged} />
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "stretch",
    //         width: "100%",
    //         paddingTop: "2rem",
    //         paddingBottom: "2rem",
    //         flex: "1 1 100%",
    //       }}
    //     >
    //       <Box className="container remix-app__main-content">{children}</Box>
    //     </Box>
    //     <Box
    //       sx={{
    //         flexShrink: 1,
    //         justifyContent: "center",
    //         display: "flex",
    //         paddingTop: "2rem",
    //         paddingBottom: "1rem",
    //         borderTop: "1px solid gray",
    //       }}
    //     >
    //       <Box>
    //         <p>
    //           &copy; You!{" "}
    //           {`This page was rendered at ${new Date().toLocaleString()}`}
    //         </p>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
}
