"use client";

import "../../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "./dash/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="absolute bg-base-white md:left-[250px] w-full md:w-full-custom min-h-screen   p-6">
        <Header />
        {children}
      </main>
    </>
  );
}
