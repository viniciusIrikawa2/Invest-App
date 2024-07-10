import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Provider from "./context/InvestmentContext";
import { Toaster } from "react-hot-toast";
import MysteryComponent from "./components/MysteryComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invest",
  description: "invest application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        <NavBar/>
        <Provider>
          {children}
        </Provider>
        <MysteryComponent/>
      </body>
    </html>
  );
}
