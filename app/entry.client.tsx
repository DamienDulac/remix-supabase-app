import { useState } from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import ClientStyleContext from "~/lib/ClientStyleContext";
import createEmotionCache from "~/lib/theme/createEmotionCache";
import theme from "~/lib/theme/theme";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </ClientCacheProvider>,
  document
);
