

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";


import "./app.css";

// export const links: Route.LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//   },
// ];

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="font-winky text-black dark:text-white flex flex-col min-h-screen">
      {children}
    </div>
  );
}

export default function App() {
  return (
      <Layout>
        <Outlet />
      </Layout>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="container mx-auto p-4 pt-16">
      <h1>Oops!</h1>
      <p>{error.message}</p>
    </div>
  );
}
