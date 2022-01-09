import * as React from "react";
import { Box, Button } from "@mui/material";
import theme from "~/lib/theme/theme";

const styles = {
  appBar: { flexGrow: 1, bgcolor: theme.palette.primary.main, padding: 2 },
};

export default function ButtonAppBar({ logged }: { logged: boolean }) {
  return (
    <Box sx={styles.appBar}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <Button color="inherit">{logged ? "Logout" : "Login"}</Button>
      </Box>
    </Box>
  );
}
