import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John's Blog",
  description:
    "A blog about my life, adventures, and thoughts. Might be interesting, might not be. Who knows? 🤷‍♂️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
