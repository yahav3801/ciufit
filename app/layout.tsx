import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubikSprayPaint = localFont({
  src: "./fonts/RubikSprayPaint-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-rubik-spray-paint",
  preload: true,
});

const gveretLevin = localFont({
  src: "./fonts/GveretLevin-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-gveret-levin",
  preload: true,
});

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-rubik",
  preload: true,
});

export const metadata: Metadata = {
  title: "צהרון כיופית קרית אתא",
  description: "המקום החם והאוהב ביותר לילדי קרית אתא",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${rubikSprayPaint.variable} ${gveretLevin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
