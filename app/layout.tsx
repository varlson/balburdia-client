import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caixinha - Balburdia",
  description: "Acompanhamento da caixinha  - Republica Balburdia",
  icons: {
    icon: ["favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="p-2 grid h-screen bg-blue-950 md:w-5/12 md:m-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
