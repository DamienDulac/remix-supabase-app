import { LoaderFunction, useLoaderData, useOutletContext } from "remix";
import type { UserSession } from "~/routes/__app";
import { supabaseStrategy } from "~/auth.server";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Orders</h1>
    </div>
  );
}
