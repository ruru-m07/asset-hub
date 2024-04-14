import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@repo/ui/components/web/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asset Hub",
  description:
    "Asset-Hub is a self-hosted, open-source asset management system that helps developers store, organize, and manage their assets efficiently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
