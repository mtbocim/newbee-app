"use client";
import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "@/app/styles/globals.css";
import NavBar2 from "./components/NavBar2";
import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { lime, purple } from "@mui/material/colors";

const geologicaFont = Geologica({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5c6060",
      light: "#ffbe0b",
      contrastText: "#ffbe0b",
    },
    secondary: {
      main: "#00796b",
    },
    background: {
      default: "#ffedd5",
      paper: "rgba(245,245,245,0.86)",
    },
    info: {
      main: "#009688",
      dark: "#10776f",
    },
  },
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body>
          <ScopedCssBaseline>
            <NavBar2 />
            <div className='flex justify-center items-center h-screen'>
            {children}
            </div>
          </ScopedCssBaseline>
        </body>
      </ThemeProvider>
    </html>
  );
}
