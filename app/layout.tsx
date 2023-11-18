"use client";
import "@/app/styles/globals.css";
import NavBar from "./components/NavBar";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffbe0b",
      light: "#ffbe0b",
      contrastText: "#304d4a",
    },
    secondary: {
      main: "#00796b",
    },
    background: {
      // Table head, opage background color
      default: "#ffedd5",
      paper: "#F5F5F5",
    },
    info: {
      main: "#009688",
      dark: "#10776f",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <div className='flex justify-center items-center h-screen'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
