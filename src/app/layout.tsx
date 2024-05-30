"use client";
import { roboto } from "@/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-base-gray-200 dark:bg-base-black-200 `}
      >
        {children}
      </body>
    </html>
  );
}
