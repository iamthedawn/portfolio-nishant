import * as React from "react";
import "./App.scss";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Layout from "./Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      <Layout/>
    </ThemeProvider>
  );
}
