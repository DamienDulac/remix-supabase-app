import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import createEmotionCache from "~/lib/theme/createEmotionCache";
import theme from "~/lib/theme/theme";

const emotionCache = createEmotionCache();

hydrate(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>,
  document
);
