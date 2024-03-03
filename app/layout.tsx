import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirmana Akselerasi",
  description: "Nirmana Akselerasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-space py-20`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
