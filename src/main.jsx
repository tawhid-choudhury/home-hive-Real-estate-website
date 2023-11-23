import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import SiteTheme from "./utils/MuiTheme/MuiTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteTheme>
      <RouterProvider router={router} />
    </SiteTheme>
  </React.StrictMode>
);