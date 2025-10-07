import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import { Roboto, Open_Sans } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import Newsletter from "@/components/sections/newsletter/Newsletter";

// Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

// Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
  variable: "--font-open-sans",
  display: "swap",
});

// Yellowtail (в Google Fonts он идёт только regular 400)
import { Yellowtail } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Organick",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${openSans.variable} ${yellowtail.variable}`}
    >
      <body>
        <CartProvider>
          <Header />
          {children}
          <Newsletter />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
