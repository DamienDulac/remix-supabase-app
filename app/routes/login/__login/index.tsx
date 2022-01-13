import type { LoaderFunction, ActionFunction } from "remix";
import { authenticator, supabaseStrategy } from "~/auth.server";
import { Form, useLoaderData } from "remix";
import { AccountCircle, Password } from "@mui/icons-material";

import {
  Box,
  BoxProps,
  Button,
  Input,
  Grid,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";

export let meta = () => {
  return {
    title: "Login page",
    description: "Welcome to remix!",
  };
};

export const loader: LoaderFunction = async ({ request }) =>
  supabaseStrategy.checkSession(request, {
    successRedirect: "/",
  });

export const action: ActionFunction = async ({ request }) =>
  authenticator.authenticate("sb", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: "white",
        p: 1,
        m: 1,
        textAlign: "center",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function LoginPage() {
  return (
    <Grid
      sx={{
        border: "1px solid black",
        borderRadius: 2,
        padding: 12,
      }}
    >
      <Grid>
        <Typography variant="h2">Sign in to Dashboard</Typography>
      </Grid>
      <Form method="post">
        <Grid sx={{ alignItems: "center" }}>
          <Item>
            <TextField
              fullWidth
              id="outlined-email-input"
              label="Email"
              type="text"
              autoComplete="email"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Item>
          <Item>
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                ),
              }}
            />
          </Item>
          <Item>
            <Button fullWidth type="submit" variant="contained">
              LOG IN
            </Button>
          </Item>
        </Grid>
      </Form>
    </Grid>
  );
}
