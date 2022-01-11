import { LoaderFunction, useLoaderData, useOutletContext } from "remix";
import type { UserSession } from "~/routes/__app";
import { supabaseStrategy } from "~/auth.server";
import { Outlet } from "@mui/icons-material";

export let meta = () => {
  return {
    title: "Home",
    description: "Welcome to remix!",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  return supabaseStrategy.checkSession(request, {
    failureRedirect: "/login",
  });
};

export default function Index() {
  const session = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Hello {session.user.email}!
    </div>
  );
}
