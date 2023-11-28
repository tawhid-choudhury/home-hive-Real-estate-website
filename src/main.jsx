import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import SiteTheme from "./utils/MuiTheme/MuiTheme";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SiteTheme>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </SiteTheme>
    </QueryClientProvider>
  </React.StrictMode>
);