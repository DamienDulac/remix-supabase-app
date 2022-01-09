// app/auth.server.ts
import type { Session } from "@supabase/supabase-js";
import { Authenticator } from "remix-auth";
import { SupabaseStrategy } from "@afaik/remix-auth-supabase-strategy";
import { supabase } from "~/lib/supabase/supabaseClient";
import { sessionStorage } from "~/session.server";

export const supabaseStrategy = new SupabaseStrategy(
  {
    supabaseClient: supabase,
    sessionStorage,
    sessionKey: "sb:session", // if not set, default is sb:session
    sessionErrorKey: "sb:error", // if not set, default is sb:error
  },
  async ({ req, supabaseClient }) => {
    // simple verify example for email/password auth
    const form = await req.formData();
    const email = form?.get("email");
    const password = form?.get("password");
    if (
      !email ||
      typeof email !== "string" ||
      !password ||
      typeof password !== "string"
    )
      throw new Error("Need a valid email and/or password");

    return supabaseClient.auth.api
      .signInWithEmail(email, password)
      .then((res) => {
        if (res?.error || !res.data)
          throw new Error(res?.error?.message ?? "No user found");

        return res?.data;
      });
  }
);

export const authenticator = new Authenticator<Session>(sessionStorage, {
  sessionKey: supabaseStrategy.sessionKey, // keep in sync
  sessionErrorKey: supabaseStrategy.sessionErrorKey, // keep in sync
});

authenticator.use(supabaseStrategy);
