import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "@/app/styles/globals.css";
import NavBar2 from "./components/NavBar2";

const geologicaFont = Geologica({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={geologicaFont.className}>
        <NavBar2 />
        <div className='flex justify-center items-center h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
