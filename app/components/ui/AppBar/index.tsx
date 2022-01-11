import * as React from "react";
import { Box, Button } from "@mui/material";
import theme from "~/lib/theme/theme";
import { Form } from "remix";

const styles = {
  appBar: { flexGrow: 1, bgcolor: theme.palette.primary.main, padding: 2 },
};

export default function ButtonAppBar({ logged }: { logged: boolean }) {
  return (
    <Box sx={styles.appBar}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <Form method="post" action="/logout">
          <Button color="inherit" type="submit">
            <p>{logged}</p>
            {logged ? "Logout" : "Login"}
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
