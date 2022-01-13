import * as React from "react";
import { Box, Button, Grid, Container, Typography } from "@mui/material";
import theme from "~/lib/theme/theme";
import { Form } from "remix";

const styles = {
  appBar: {
    flexGrow: 1,
    padding: 2,
    borderBottom: "1px solid gray",
  },
};

export default function ButtonAppBar({
  logged,
  username,
}: {
  logged: boolean;
  username: string;
}) {
  return (
    <Grid item>
      <Grid item container alignItems="center" justifyContent="space-between">
        <Grid item container xs={8} sx={{ justifyContent: "flex-start" }}>
          <Typography variant="h4" color="textPrimary" id="react-admin-title">
            Welcome {username} !
          </Typography>
        </Grid>
        <Grid item container xs={4} justifyContent="flex-end" wrap="nowrap">
          <Form method="post" action="/logout">
            <Button color="inherit" type="submit">
              {logged ? "Logout" : "Login"}
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
