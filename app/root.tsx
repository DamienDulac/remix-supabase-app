import { Box } from "@mui/material";
import { LiveReload, Meta, Links, Scripts, Outlet, useCatch } from "remix";
import Layout from "~/components/layout";

export const Document = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document title="Remix: So great, it's funny!">
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Box className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </Box>
    </Document>
  );
}
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <Box className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </Box>
    </Document>
  );
}
