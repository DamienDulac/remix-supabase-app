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
    <div>
      <Grid item mb={8}>
        <Typography variant="h1" sx={{ color: "#FF6B6B" }}>
          Sign in to Dashboard
        </Typography>
      </Grid>
      <Form method="post">
        <Grid item sx={{ mb: 3, mt: 3 }} xs={12}>
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
        </Grid>
        <Grid item sx={{ mb: 3 }}>
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
        </Grid>
        <Grid item sx={{ mb: 3 }}>
          <Button
            fullWidth
            sx={{ backgroundColor: "#FF6B6B" }}
            type="submit"
            variant="contained"
          >
            LOG IN
          </Button>
        </Grid>
      </Form>
    </div>
  );
}
