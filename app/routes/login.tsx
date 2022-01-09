import type { LoaderFunction, ActionFunction } from "remix";
import { authenticator, supabaseStrategy } from "~/auth.server";
import { Form, useLoaderData } from "remix";

export let meta = () => {
  return {
    title: "Login page",
    description: "Welcome to remix!",
  };
};

export const loader: LoaderFunction = async ({ request }) =>
  supabaseStrategy.checkSession(request, {
    successRedirect: "/profile",
  });

export const action: ActionFunction = async ({ request }) =>
  authenticator.authenticate("sb", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });

export default function LoginPage() {
  return (
    <Form method="post">
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Sign In</button>
    </Form>
  );
}
