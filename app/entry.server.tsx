import * as React from "react";
import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

import createEmotionCache from "~/lib/theme/createEmotionCache";
import theme from "~/lib/theme/theme";
import ServerStyleContext from "./lib/ServerStyleContext";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const MuiRemixServer = () => (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RemixServer context={remixContext} url={request.url} />
      </ThemeProvider>
    </CacheProvider>
  );

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <MuiRemixServer />
    </ServerStyleContext.Provider>
  );

  const emotionChunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerStyleContext.Provider value={emotionChunks.styles}>
      <MuiRemixServer />
    </ServerStyleContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
