import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/";
import { store } from "./utils/store.tsx";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7895B2",
    },
    secondary: {
      main: "#AEBDCA",
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
