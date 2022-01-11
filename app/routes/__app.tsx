import { LoaderFunction, Outlet, json, useLoaderData, redirect } from "remix";
import Layout from "~/components/layout";
import { supabaseStrategy } from "~/auth.server";

export type UserSession = {
  logged: boolean;
  user?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request);

  return json<UserSession>({
    logged: Boolean(session?.user),
    user: session?.user?.email,
  });
};

export default function Index() {
  const data = useLoaderData<UserSession>();

  return (
    <Layout logged={data.logged}>
      <Outlet />
    </Layout>
  );
}
