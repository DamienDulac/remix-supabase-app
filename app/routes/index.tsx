import { useLoaderData, redirect, Form, Link } from "remix";
import type { ActionFunction, LoaderFunction } from "remix";
import { supabaseStrategy } from "~/auth.server";

export let meta = () => {
  return {
    title: "Home",
    description: "Welcome to remix!",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request);
  if (!session) {
    return redirect("/login");
  }
  return { logged: true, user: session?.user?.email };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Hello {data?.user}!
    </div>
  );
}
