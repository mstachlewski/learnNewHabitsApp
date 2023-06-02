import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/";
import store from "./utils/store.tsx";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7895B2",
      dark: "#6182a2",
    },
    secondary: {
      main: "#AEBDCA",
    },
    info: {
      main: "#22c55e",
    },
    success: {
      main: "#22c55e",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
