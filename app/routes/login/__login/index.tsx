import type { LoaderFunction, ActionFunction } from "remix";
import { authenticator, supabaseStrategy } from "~/auth.server";
import { Form, useLoaderData } from "remix";
import { Box, BoxProps, Button, Input } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5E4D7",
        borderRadius: 1,
        flexDirection: "column",
      }}
    >
      <Form method="post">
        <Item>
          <Input type="email" placeholder="Email" name="email" />
        </Item>
        <Item>
          <Input type="password" placeholder="Password" name="password" />
        </Item>
        <Item>
          <Button type="submit">LOG IN</Button>
        </Item>
      </Form>
    </Box>
  );
}
