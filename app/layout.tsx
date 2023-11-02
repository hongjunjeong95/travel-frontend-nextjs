import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import QueryProviders from "./QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "진짜 나다운 여행 Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProviders>
          <Header />
          <main className="mx-56 mb-20">{children}</main>
          <Footer />
        </QueryProviders>
      </body>
    </html>
  );
}
