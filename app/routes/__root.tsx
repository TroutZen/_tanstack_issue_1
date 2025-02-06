import { createRootRoute, ErrorComponentProps } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { NotFound } from "~/components/pages/NotFound";
import { DefaultCatchBoundary } from "~/components/errors/DefaultCatchBoundary";
import * as React from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      // TODO(Devin): Add css
      // { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: (props: ErrorComponentProps) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
