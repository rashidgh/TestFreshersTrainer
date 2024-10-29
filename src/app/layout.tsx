import type { Metadata } from "next";

import "./globals.css";
import "./app.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TestFreshers",
  description: "Start Learning  with TestFreshers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <Toaster />
      </body>
    </html>
  );
}
